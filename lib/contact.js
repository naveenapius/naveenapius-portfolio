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
};

// Canonical portfolio URL.
export const SITE_URL = "https://naveenapius.com";
