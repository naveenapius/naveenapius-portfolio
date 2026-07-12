import { SITE_URL } from "@/lib/contact";

// Generates /robots.txt at build time. Allow all crawlers across the whole
// site (nothing here is private). `host` uses the canonical SITE_URL.
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
