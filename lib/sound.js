// Shared UI sound effects. Synthesized via the Web Audio API rather than an
// audio file, so there's no asset to ship or load.

let audioCtx;

function getAudioContext() {
  if (typeof window === "undefined") return null;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return null;
  if (!audioCtx) audioCtx = new Ctx();
  return audioCtx;
}

/**
 * Plays a short, soft click — used on button interactions across the site.
 */
export function playClickSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  if (ctx.state === "suspended") ctx.resume();

  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(720, ctx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(
    240,
    ctx.currentTime + 0.08,
  );

  gain.gain.setValueAtTime(0.18, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.09);

  oscillator.connect(gain).connect(ctx.destination);
  oscillator.start();
  oscillator.stop(ctx.currentTime + 0.09);
}
