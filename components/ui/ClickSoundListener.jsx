"use client";

import { useEffect } from "react";
import { playClickSound } from "@/lib/sound";

/**
 * Mounted once in the root layout. Plays the shared click sound on every
 * click anywhere on the site, rather than wiring it into each component.
 */
export default function ClickSoundListener() {
  useEffect(() => {
    document.addEventListener("click", playClickSound);
    return () => document.removeEventListener("click", playClickSound);
  }, []);

  return null;
}
