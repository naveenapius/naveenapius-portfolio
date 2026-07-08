import { SOCIAL } from "@/lib/contact";

/**
 * Highlight reels shown in the media page Reel Showcase.
 *
 * TO ADD A REEL:
 *   - Drop the video file in `/public` and reference it by `video` (e.g.
 *     "/reel-ladakh.mp4"). A vertical 9:16 clip matches the card frame.
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
    video: "/showcase-1.mp4",
    views: "81.5K",
    likes: "2.3K",
    link: "https://www.instagram.com/reel/DSY4V7JEycM/",
  },
  {
    title: "CRF Women on Wheels: Ready Assist",
    video: "/showcase-2.mp4",
    views: "69K",
    likes: "2.4K",
    link: "https://www.instagram.com/reel/DMwORrAS3Fp/",
  },
  {
    title: "Enduro Edge: Kickstart",
    video: "/showcase-3.mp4",
    views: "22.2K",
    likes: "750",
    link: "https://www.instagram.com/reel/DYO2cTKSdft/",
  },
];
