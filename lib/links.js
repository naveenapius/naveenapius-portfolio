/**
 * True for links that leave the app (http(s) URLs, mailto:) as opposed to
 * internal routes ("/blog") or same-page anchors ("#work").
 */
export const isExternalHref = (href) =>
  href.startsWith("http") || href.startsWith("mailto:");

// Spread onto an <a> for external hrefs so they open safely in a new tab.
export const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};
