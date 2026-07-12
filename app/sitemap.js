import { SITE_URL } from "@/lib/contact";

// Generates /sitemap.xml at build time. List the site's crawlable routes
// here; add an entry when a new page route is added. The blog lives on
// Medium (external), so it isn't part of this sitemap.
const ROUTES = [
  { path: "/", priority: 1 },
  { path: "/media", priority: 0.8 },
];

export default function sitemap() {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
