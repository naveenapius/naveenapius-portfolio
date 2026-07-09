"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import ReelCard from "@/components/media/ReelCard";
import { REELS } from "@/lib/reels";

/**
 * Reel grid that enforces "one soundtrack at a time": it tracks which reel is
 * currently unmuted and mutes the rest. Cards autoplay muted; tapping a card's
 * sound button makes it the active (unmuted) one.
 *
 * Each card also reports when it scrolls out of the viewport, which mutes it
 * if it was the active one — on desktop the row leaves as a unit, on mobile
 * (stacked single column) each card leaves independently.
 */
export default function ReelGrid() {
  // Index of the reel currently playing sound; null = all muted.
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSound = (index) =>
    setActiveIndex((current) => (current === index ? null : index));

  const muteIfActive = (index) =>
    setActiveIndex((current) => (current === index ? null : current));

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[clamp(26px,3.4vw,44px)]">
      {REELS.map((reel, index) => (
        <Reveal key={reel.video} className="h-full">
          <ReelCard
            reel={reel}
            muted={activeIndex !== index}
            onToggleSound={() => toggleSound(index)}
            onLeaveViewport={() => muteIfActive(index)}
          />
        </Reveal>
      ))}
    </div>
  );
}
