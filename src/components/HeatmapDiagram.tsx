/**
 * Two ranking maps side by side. Each circle is the business's Google
 * position for the search when made from that point in the area.
 */

const START = [
  ["20+", "20+", "20+", "20+", "20+", "20+", "20+"],
  ["20+", "20+", "18", "16", "19", "20+", "20+"],
  ["20+", "17", "12", "11", "13", "18", "20+"],
  ["20+", "15", "10", "8", "9", "14", "20+"],
  ["20+", "18", "13", "10", "12", "17", "20+"],
  ["20+", "20+", "17", "15", "18", "20+", "20+"],
  ["20+", "20+", "20+", "20+", "20+", "20+", "20+"],
];

const AIM = [
  ["6", "4", "3", "3", "3", "4", "7"],
  ["4", "3", "2", "2", "2", "3", "4"],
  ["3", "2", "1", "1", "1", "2", "3"],
  ["3", "2", "1", "1", "1", "2", "3"],
  ["3", "2", "1", "1", "1", "2", "3"],
  ["4", "3", "2", "2", "2", "3", "5"],
  ["7", "4", "3", "3", "3", "4", "6"],
];

function band(value: string) {
  const n = value === "20+" ? 21 : Number(value);
  if (n <= 3) return { circle: "fill-accent", text: "fill-paper" };
  if (n <= 10) return { circle: "fill-accent/45", text: "fill-ink" };
  return { circle: "fill-rule", text: "fill-muted" };
}

function Grid({ data, label }: { data: string[][]; label: string }) {
  const step = 34;
  const r = 13.5;
  const size = step * 7;

  return (
    <div>
      <p className="eyebrow mb-3">{label}</p>
      <svg viewBox={`0 0 ${size} ${size}`} role="img" aria-label={`Ranking map: ${label}`} className="h-auto w-full">
        <rect x="0" y="0" width={size} height={size} rx="3" className="fill-stone" />
        {data.map((row, y) =>
          row.map((value, x) => {
            const { circle, text } = band(value);
            const cx = step / 2 + x * step;
            const cy = step / 2 + y * step;
            return (
              <g key={`${x}-${y}`}>
                <circle cx={cx} cy={cy} r={r} className={circle} />
                <text
                  x={cx}
                  y={cy + 3.5}
                  textAnchor="middle"
                  style={{ fontSize: value.length > 2 ? 8.5 : 10, fontVariantNumeric: "tabular-nums" }}
                  className={`${text} font-medium`}
                >
                  {value}
                </text>
              </g>
            );
          }),
        )}
        {/* The business location */}
        <rect x={step * 3.5 - 17} y={step * 3.5 - 17} width="34" height="34" rx="17" className="fill-none stroke-ink" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

export default function HeatmapDiagram() {
  return (
    <figure>
      <div className="grid max-w-xl gap-8 min-[480px]:grid-cols-2 min-[480px]:gap-5 sm:gap-8">
        <Grid data={START} label="At the start" />
        <Grid data={AIM} label="The aim" />
      </div>
      <figcaption className="mt-5 max-w-xl text-[0.8125rem] leading-relaxed text-muted">
        Each circle is your Google position when someone searches from that point in your area. The
        ringed circle is your business.
        <span className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
          <span className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-accent" /> Top 3
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-accent/45" /> 4 to 10
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-rule" /> 11 or lower
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
