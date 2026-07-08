"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { isExternalHref, externalLinkProps } from "@/lib/links";

/**
 * Reel showcase card: a 9:16 looping video with a views / likes overlay, a
 * sound on/off button, a title, and a "View on Instagram" out-link. Hover
 * lifts up-left and swaps the shadow to lime (site card behavior).
 *
 * Sound is coordinated by the parent grid so only one reel plays audio at a
 * time — `muted` reflects that shared state, `onToggleSound` requests it.
 *
 * @param {{ title?: string, video: string, views: string, likes: string, link: string }} reel
 * @param {boolean} muted
 * @param {() => void} onToggleSound
 */
export default function ReelCard({ reel, muted, onToggleSound }) {
  const { title, video, views, likes, link } = reel;
  const videoRef = useRef(null);

  // Drive the element's muted state from the shared control. Setting the DOM
  // property (rather than the React attribute, which is unreliable for muted)
  // guarantees the toggle takes effect; re-play on unmute in case a browser
  // paused it.
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = muted;
    if (!muted) el.play?.().catch(() => {});
  }, [muted]);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[8px] border-2 border-ink bg-paper shadow-[7px_7px_0_var(--ink)] transition duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[7px_7px_0_var(--lime)]">
      <div className="relative aspect-[9/16] border-b-2 border-ink">
        <video
          ref={videoRef}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Views / likes overlay, over a scrim so it stays legible on any frame */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-4 bg-gradient-to-t from-ink/85 to-transparent px-[14px] pb-3 pt-10 font-mono text-[12.5px] font-semibold text-paper">
          <span className="inline-flex items-center gap-[6px]">
            <EyeIcon /> {views}
          </span>
          <span className="inline-flex items-center gap-[6px]">
            <HeartIcon /> {likes}
          </span>
        </div>

        {/* Sound on/off — only one reel unmutes at a time (see ReelGrid) */}
        <button
          type="button"
          onClick={onToggleSound}
          aria-label={muted ? "Unmute video" : "Mute video"}
          aria-pressed={!muted}
          className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-paper text-ink shadow-[2px_2px_0_var(--ink)] transition duration-150 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0_var(--ink)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
        >
          {muted ? <MutedIcon /> : <SoundIcon />}
        </button>
      </div>

      <div className="flex flex-1 flex-col p-[clamp(18px,2.2vw,24px)]">
        {title && (
          <h3 className="mb-4 font-body text-[19px] font-bold leading-[1.2]">
            {title}
          </h3>
        )}
        <Link
          href={link}
          {...(isExternalHref(link) ? externalLinkProps : {})}
          className="mt-auto inline-flex items-center gap-2 font-mono text-[11.5px] font-semibold tracking-[0.06em] no-underline"
        >
          <span className="border-b-2 border-lime pb-1">View on Instagram</span>
          <span className="text-lime-text">↗</span>
        </Link>
      </div>
    </article>
  );
}

function EyeIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function SoundIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 5 6 9H2v6h4l5 4V5z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M18.5 5.5a9 9 0 0 1 0 13" />
    </svg>
  );
}

function MutedIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 5 6 9H2v6h4l5 4V5z" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}
