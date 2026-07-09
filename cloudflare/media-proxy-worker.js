// Cloudflare Worker: proxies a private Backblaze B2 bucket publicly.
// Deployed by pasting into the Cloudflare dashboard (Workers & Pages), not
// part of the Next.js build — kept here for reference/version history only.
//
// Requires three Worker secrets (Settings > Variables and Secrets):
//   B2_KEY_ID       - Backblaze application key ID
//   B2_APP_KEY      - Backblaze application key
//   B2_BUCKET_NAME  - e.g. "naveenapius-media"
//
// Serves requests like GET /showcase-1.mp4 by fetching
// {bucket}/showcase-1.mp4 from B2 using a server-side auth token, so the
// bucket itself never needs to be public. Forwards Range requests so video
// seeking/scrubbing works.

let cachedAuth = null;
let cachedAuthExpiry = 0;

async function getB2Auth(env) {
  const now = Date.now();
  if (cachedAuth && now < cachedAuthExpiry) return cachedAuth;

  const resp = await fetch(
    "https://api.backblazeb2.com/b2api/v2/b2_authorize_account",
    {
      headers: {
        Authorization: `Basic ${btoa(`${env.B2_KEY_ID}:${env.B2_APP_KEY}`)}`,
      },
    },
  );

  if (!resp.ok) {
    throw new Error(`B2 auth failed: ${resp.status}`);
  }

  const data = await resp.json();
  cachedAuth = data;
  // Tokens last 24h; refresh a little early to be safe.
  cachedAuthExpiry = now + 1000 * 60 * 60 * 23;
  return data;
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const filePath = url.pathname; // e.g. "/showcase-1.mp4"

    if (filePath === "/" || filePath === "") {
      return new Response("Not found", { status: 404 });
    }

    // Full (non-Range) requests are cached at Cloudflare's edge so repeat
    // visits skip the B2 auth + fetch round trip entirely. Range requests
    // (video seeking) bypass the cache since partial responses shouldn't be
    // cached under the same key.
    const cache = caches.default;
    const isRangeRequest = request.headers.has("Range");
    if (!isRangeRequest) {
      const cached = await cache.match(request);
      if (cached) return cached;
    }

    let auth;
    try {
      auth = await getB2Auth(env);
    } catch (err) {
      return new Response("Upstream auth error", { status: 502 });
    }

    const downloadUrl = `${auth.downloadUrl}/file/${env.B2_BUCKET_NAME}${filePath}`;

    const upstreamHeaders = new Headers({
      Authorization: auth.authorizationToken,
    });
    const range = request.headers.get("Range");
    if (range) upstreamHeaders.set("Range", range);

    const fileResp = await fetch(downloadUrl, { headers: upstreamHeaders });

    const respHeaders = new Headers(fileResp.headers);
    respHeaders.set("Cache-Control", "public, max-age=31536000, immutable");
    respHeaders.set("Access-Control-Allow-Origin", "*");

    const response = new Response(fileResp.body, {
      status: fileResp.status,
      headers: respHeaders,
    });

    if (!isRangeRequest && response.status === 200) {
      ctx.waitUntil(cache.put(request, response.clone()));
    }

    return response;
  },
};
