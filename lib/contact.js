/**
 * Central contact + social details for the whole site.
 * Update a value here and every button, link, and card follows.
 */

// Raw email addresses.
export const EMAIL = {
  work: "piusnaveena@gmail.com", // engineering / hiring / freelance
  media: "naveenapius.collabs@gmail.com", // brand collabs / content partnerships
};

// `mailto:` href helper so components never hand-build the scheme.
export const mailto = (address) => `mailto:${address}`;

// External profiles. `handle` is the display form; `url` is the link target.
export const SOCIAL = {
  instagram: {
    handle: "@naveenapius",
    url: "https://instagram.com/naveenapius",
  },
  linkedin: {
    handle: "LinkedIn",
    url: "https://www.linkedin.com/in/naveenapius/", 
  },
  github: {
    handle: "GitHub",
    url: "https://github.com/naveenapius",
  },
  medium: {
    handle: "Medium",
    url: "https://naveenapius.medium.com",
  },
};

// Canonical portfolio URL.
export const SITE_URL = "https://naveenapius.com";

// Resume URL. Set NEXT_PUBLIC_RESUME_URL in the environment (Netlify dashboard /
// .env.local) so the resume can be swapped without a code change. When it moves,
// update the var and rebuild. Falls back to the current Google Drive link.
export const RESUME_URL =
  process.env.NEXT_PUBLIC_RESUME_URL ||
  "https://drive.google.com/drive/u/2/folders/1Aibnb7FHhKuy3FO9xgq0ToKzOJ-t1mUL";
