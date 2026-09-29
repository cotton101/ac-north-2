/**
 * A line drawing of a local Google search: the map with three businesses,
 * then the normal results below. Explanatory, not decorative: it shows where
 * the work lands.
 */
export default function ResultsDiagram({ className = "" }: { className?: string }) {
  const listings = [0, 1, 2];
  const pins = [
    { x: 118, y: 124 },
    { x: 232, y: 158 },
    { x: 312, y: 108 },
  ];
  const top = 222;
  const gap = 50;

  return (
    <figure className={className}>
      <svg viewBox="0 0 400 470" role="img" aria-labelledby="results-diagram-title" className="h-auto w-full">
        <title id="results-diagram-title">
          A local Google search showing three businesses on a map above the normal results
        </title>

        {/* Page frame */}
        <rect x="0.5" y="0.5" width="399" height="469" rx="3" className="fill-paper stroke-rule" />

        {/* Search bar */}
        <rect x="24" y="24" width="352" height="34" rx="17" className="fill-none stroke-ink" strokeWidth="1" />
        <circle cx="46" cy="41" r="6" className="fill-none stroke-muted" strokeWidth="1.2" />
        <line x1="50.5" y1="45.5" x2="54" y2="49" className="stroke-muted" strokeWidth="1.2" />
        <rect x="66" y="38" width="120" height="6" rx="3" className="fill-rule" />

        {/* Map */}
        <rect x="24" y="74" width="352" height="124" rx="2" className="fill-stone" />
        <path d="M24 150 C 120 140, 200 186, 376 170" className="fill-none stroke-paper" strokeWidth="7" />
        <path d="M170 74 C 180 130, 150 160, 160 198" className="fill-none stroke-paper" strokeWidth="5" />
        <path d="M260 74 L 290 198" className="fill-none stroke-paper" strokeWidth="4" />
        {pins.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="10" className="fill-accent" />
            <text
              x={p.x}
              y={p.y + 3.5}
              textAnchor="middle"
              style={{ fontSize: 10 }}
              className="fill-paper font-semibold"
            >
              {i + 1}
            </text>
          </g>
        ))}

        {/* Map listings */}
        {listings.map((i) => {
          const y = top + i * gap;
          return (
            <g key={i}>
              <rect x="14" y={y - 10} width="372" height={gap - 6} rx="2" className="fill-stone" />
              <text x="24" y={y + 8} style={{ fontSize: 11 }} className="fill-accent font-semibold">
                {i + 1}
              </text>
              <rect x="46" y={y} width={170 - i * 16} height="7" rx="3.5" className="fill-accent" />
              {[0, 1, 2, 3, 4].map((s) => (
                <circle key={s} cx={49 + s * 9} cy={y + 18} r="2.6" className="fill-accent/55" />
              ))}
              <rect x="96" y={y + 15.5} width="150" height="5" rx="2.5" className="fill-muted/40" />
            </g>
          );
        })}

        {/* Bracket marking the three map results */}
        <path
          d={`M392 ${top - 10} H396 V${top + 2 * gap + gap - 16} H392`}
          className="fill-none stroke-accent"
          strokeWidth="1.2"
        />

        {/* Normal results */}
        <line x1="24" y1="378" x2="376" y2="378" className="stroke-rule" />
        {[0, 1].map((i) => {
          const y = 396 + i * 38;
          return (
            <g key={i}>
              <rect x="24" y={y} width="170" height="7" rx="3.5" className="fill-rule" />
              <rect x="24" y={y + 14} width="300" height="5" rx="2.5" className="fill-rule/70" />
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-3 text-[0.8125rem] text-muted">
        For local searches, Google shows three businesses on a map above the normal results.
      </figcaption>
    </figure>
  );
}
