import { groq } from "next-sanity";

// Shared card fields for the blog index (no heavy `body`).
const cardFields = groq`
  _id,
  title,
  subtitle,
  excerpt,
  "slug": slug.current,
  coverImage,
  categories,
  publishedAt,
  readTime
`;

/** All published posts, newest first — blog index. */
export const postsListQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    ${cardFields}
  }
`;

/** Latest two published posts, newest first — homepage Work section. */
export const latestPostsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) [0...2] {
    ${cardFields}
  }
`;

/** Slugs only — for generateStaticParams. */
export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)].slug.current
`;

/** A single post by slug, with full body — individual post page. */
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ${cardFields},
    body
  }
`;
