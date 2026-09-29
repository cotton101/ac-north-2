/* eslint-disable @next/next/no-img-element -- the stacked layers must share one decoded image */

/**
 * The AC North logo turning slowly on its vertical axis, like the 3D mark in the
 * reference site's hero. Stacked copies behind the front face give it depth.
 */
const DEPTH = 14;

export default function SpinningLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-square ${className}`}>
      {/* Light behind the mark */}
      <div
        aria-hidden="true"
        className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgb(71_177_251/0.55),rgb(1_107_226/0.25)_45%,transparent_70%)] blur-3xl"
      />
      <div className="absolute inset-0 [perspective:1400px]">
        <div className="relative h-full w-full animate-spin-y [transform-style:preserve-3d]">
          {Array.from({ length: DEPTH }, (_, i) => (
            <img
              key={i}
              src="/ac-north-logo-blue.png"
              alt=""
              aria-hidden="true"
              draggable={false}
              className="absolute inset-0 h-full w-full select-none"
              style={{
                transform: `translateZ(${(i - DEPTH / 2) * 1.6}px)`,
                filter: i === DEPTH - 1 ? "drop-shadow(0 0 24px rgb(71 177 251 / 0.35))" : "brightness(0.45) saturate(1.2)",
              }}
            />
          ))}
        </div>
      </div>
      <span className="sr-only">AC North logo</span>
    </div>
  );
}
