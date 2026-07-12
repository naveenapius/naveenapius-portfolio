import { SOCIAL } from "@/lib/contact";

// Reel videos are served from Backblaze B2 through a Cloudflare Worker proxy
// (see /cloudflare/media-proxy-worker.js) rather than /public, to keep
// Netlify's metered bandwidth free for the rest of the site.
const ASSETS_BASE = "https://assets.naveenapius.com";

/**
 * Highlight reels shown in the media page Reel Showcase.
 *
 * TO ADD A REEL:
 *   - Upload the video file to the `naveenapius-media` B2 bucket and
 *     reference it by `video` (e.g. `${ASSETS_BASE}/reel-ladakh.mp4`). A
 *     vertical 9:16 clip matches the card frame.
 *   - `views` / `likes` are display strings (e.g. "112K") rendered as an
 *     overlay on the video.
 *   - `link` is the Instagram permalink for the "View on Instagram" out-link;
 *     falls back to the profile when a post link isn't handy.
 *
 * @typedef {{ title?: string, video: string, views: string, likes: string, link: string }} Reel
 * @type {Reel[]}
 */
export const REELS = [
  {
    title: "Bandidos Pitstop: Indian Supercross Racing League",
    video: `${ASSETS_BASE}/showcase-1.mp4`,
    views: "81.5K",
    likes: "2.3K",
    link: "https://www.instagram.com/reel/DSY4V7JEycM/",
  },
  {
    title: "CRF Women on Wheels: Ready Assist",
    video: `${ASSETS_BASE}/showcase-2.mp4`,
    views: "69K",
    likes: "2.4K",
    link: "https://www.instagram.com/reel/DMwORrAS3Fp/",
  },
  {
    title: "Enduro Edge: Kickstart",
    video: `${ASSETS_BASE}/showcase-3.mp4`,
    views: "22.2K",
    likes: "750",
    link: "https://www.instagram.com/reel/DYO2cTKSdft/",
  },
];
