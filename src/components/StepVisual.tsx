/**
 * Mock screens for each week-one step, standing in for the reference site's
 * project photography. Plain shapes on a blue backdrop; nothing here is a real
 * client or result.
 */
export type StepKind = "search" | "benchmark" | "profile" | "website" | "citations" | "top3";

const BACKDROPS: Record<StepKind, string> = {
  search: "radial-gradient(120% 90% at 15% 10%, #47b1fb, #016be2 45%, #012d6e 100%)",
  benchmark: "radial-gradient(120% 90% at 85% 15%, #2f8cff, #0a3f99 50%, #071a3d 100%)",
  profile: "radial-gradient(120% 90% at 20% 90%, #7cc6ff, #016be2 45%, #012d6e 100%)",
  website: "radial-gradient(120% 90% at 80% 85%, #34c3f0, #0158bb 50%, #01204f 100%)",
  citations: "radial-gradient(120% 90% at 10% 20%, #0a4fb5, #012d6e 55%, #070e1a 100%)",
  top3: "radial-gradient(120% 90% at 50% 0%, #47b1fb, #016be2 40%, #012d6e 100%)",
};

const W = "#ffffff";
const LINE = "#dbe6f3";
const SOFT = "#eef4fb";
const BLUE = "#016be2";
const SKY = "#47b1fb";
const NAVY = "#012d6e";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <>
      <rect x="70" y="50" width="460" height="350" rx="18" fill={W} />
      {children}
    </>
  );
}

const SCENES: Record<StepKind, React.ReactNode> = {
  search: (
    <Card>
      <rect x="100" y="100" width="400" height="52" rx="26" fill={W} stroke={LINE} strokeWidth="2" />
      <circle cx="132" cy="124" r="9" fill="none" stroke={BLUE} strokeWidth="3" />
      <path d="M139 131l8 8" stroke={BLUE} strokeWidth="3" strokeLinecap="round" />
      <text x="160" y="132" fontSize="20" fill={NAVY} fontWeight="500">plumber leeds</text>
      <rect x="298" y="112" width="2" height="26" fill={BLUE} />
      <text x="100" y="200" fontSize="13" fill="#6b7a90" fontWeight="600" letterSpacing="1.5">AGREED SEARCH TERMS</text>
      {["plumber leeds", "emergency plumber leeds", "boiler repair leeds"].map((t, i) => (
        <g key={t}>
          <rect x="100" y={220 + i * 52} width="400" height="40" rx="10" fill={SOFT} />
          <circle cx="124" cy={240 + i * 52} r="9" fill={i === 0 ? BLUE : SKY} />
          <path d={`M119 ${240 + i * 52}l4 4 7-8`} stroke={W} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <text x="146" y={246 + i * 52} fontSize="16" fill={NAVY} fontWeight="500">{t}</text>
        </g>
      ))}
    </Card>
  ),
  benchmark: (
    <Card>
      <text x="100" y="95" fontSize="13" fill="#6b7a90" fontWeight="600" letterSpacing="1.5">RANKING MAP · DAY 1</text>
      {Array.from({ length: 5 }, (_, r) =>
        Array.from({ length: 7 }, (_, c) => {
          const d = Math.abs(r - 2) + Math.abs(c - 3);
          const rank = d === 0 ? 8 : d === 1 ? 11 : d === 2 ? 15 : 20;
          const fill = rank <= 10 ? SKY : rank <= 15 ? "#b9d3ee" : LINE;
          return (
            <g key={`${r}-${c}`}>
              <circle cx={130 + c * 57} cy={140 + r * 55} r="20" fill={fill} />
              <text x={130 + c * 57} y={146 + r * 55} fontSize="14" textAnchor="middle" fill={rank <= 10 ? W : NAVY} fontWeight="600">
                {rank === 20 ? "20+" : rank}
              </text>
            </g>
          );
        }),
      )}
      <circle cx="301" cy="250" r="27" fill="none" stroke={NAVY} strokeWidth="2.5" />
    </Card>
  ),
  profile: (
    <Card>
      <rect x="100" y="80" width="400" height="90" rx="12" fill={SOFT} />
      <path d="M150 105a16 16 0 0 0-16 16c0 12 16 28 16 28s16-16 16-28a16 16 0 0 0-16-16Z" fill={BLUE} />
      <circle cx="150" cy="121" r="6" fill={W} />
      <rect x="186" y="104" width="170" height="14" rx="7" fill={NAVY} />
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M${194 + i * 22} 130l4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1Z`} fill="#fbbc05" />
      ))}
      <rect x="186" y="152" width="120" height="8" rx="4" fill={LINE} />
      {["Plumber", "Boiler repair", "Bathroom fitter"].map((t, i) => (
        <g key={t}>
          <rect x={100 + [0, 110, 250][i]} y="190" width={[100, 130, 150][i]} height="32" rx="16" fill={i === 0 ? BLUE : W} stroke={i === 0 ? BLUE : LINE} strokeWidth="2" />
          <text x={100 + [0, 110, 250][i] + [50, 65, 75][i]} y="211" fontSize="13" textAnchor="middle" fill={i === 0 ? W : NAVY} fontWeight="500">{t}</text>
        </g>
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="100" y={246 + i * 44} width="400" height="34" rx="8" fill={SOFT} />
          <rect x="116" y={258 + i * 44} width={[150, 190, 120][i]} height="10" rx="5" fill="#9fb8d6" />
          <circle cx="478" cy={263 + i * 44} r="7" fill={SKY} />
        </g>
      ))}
    </Card>
  ),
  website: (
    <Card>
      <rect x="70" y="50" width="460" height="40" rx="18" fill={SOFT} />
      <rect x="70" y="72" width="460" height="18" fill={SOFT} />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={96 + i * 18} cy="70" r="5" fill={LINE} />
      ))}
      <rect x="160" y="61" width="240" height="18" rx="9" fill={W} />
      <text x="100" y="135" fontSize="12" fill={BLUE} fontWeight="600" letterSpacing="1.5">PLUMBER IN LEEDS</text>
      <rect x="100" y="148" width="250" height="18" rx="6" fill={NAVY} />
      <rect x="100" y="174" width="200" height="18" rx="6" fill={NAVY} />
      <rect x="100" y="206" width="230" height="8" rx="4" fill={LINE} />
      <rect x="100" y="222" width="210" height="8" rx="4" fill={LINE} />
      <rect x="100" y="250" width="120" height="34" rx="17" fill={BLUE} />
      <rect x="370" y="120" width="130" height="160" rx="10" fill={SOFT} />
      <path d="M370 210c40-10 80 30 130-5" stroke={W} strokeWidth="8" fill="none" />
      <path d="M435 150a12 12 0 0 0-12 12c0 9 12 21 12 21s12-12 12-21a12 12 0 0 0-12-12Z" fill={BLUE} />
      <rect x="100" y="310" width="400" height="60" rx="10" fill={SOFT} />
      <text x="118" y="336" fontSize="12" fill="#6b7a90" fontFamily="ui-monospace, monospace">{'{ "@type": "Plumber",'}</text>
      <text x="118" y="356" fontSize="12" fill="#6b7a90" fontFamily="ui-monospace, monospace">{'  "areaServed": "Leeds" }'}</text>
    </Card>
  ),
  citations: (
    <Card>
      <text x="100" y="95" fontSize="13" fill="#6b7a90" fontWeight="600" letterSpacing="1.5">LISTINGS</text>
      {["Google Business Profile", "Apple Maps", "Bing Places", "Yelp", "Foursquare"].map((t, i) => (
        <g key={t}>
          <rect x="100" y={112 + i * 54} width="400" height="44" rx="10" fill={SOFT} />
          <rect x="114" y={122 + i * 54} width="24" height="24" rx="7" fill={[BLUE, NAVY, SKY, "#2f8cff", "#0a4fb5"][i]} />
          <text x="152" y={139 + i * 54} fontSize="16" fill={NAVY} fontWeight="500">{t}</text>
          <rect x="400" y={122 + i * 54} width="86" height="24" rx="12" fill="#dff3e6" />
          <text x="443" y={138 + i * 54} fontSize="12" textAnchor="middle" fill="#1b7a3d" fontWeight="600">Matches</text>
        </g>
      ))}
    </Card>
  ),
  top3: (
    <Card>
      <rect x="100" y="80" width="400" height="120" rx="12" fill={SOFT} />
      <path d="M100 160c90-20 160 40 400 5" stroke={W} strokeWidth="10" fill="none" />
      <path d="M260 80c10 50-20 80-5 120" stroke={W} strokeWidth="7" fill="none" />
      {[
        [170, 120],
        [330, 150],
        [420, 105],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="15" fill={i === 0 ? BLUE : SKY} />
          <text x={x} y={y + 5} fontSize="13" textAnchor="middle" fill={W} fontWeight="700">{i + 1}</text>
        </g>
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="100" y={218 + i * 58} width="400" height="48" rx="10" fill={i === 0 ? "#e3f0ff" : SOFT} stroke={i === 0 ? BLUE : "none"} strokeWidth="2" />
          <text x="120" y={248 + i * 58} fontSize="16" fill={BLUE} fontWeight="700">{i + 1}</text>
          {i === 0 ? (
            <text x="146" y={248 + i * 58} fontSize="16" fill={NAVY} fontWeight="600">Your business</text>
          ) : (
            <rect x="146" y={236 + i * 58} width={[0, 160, 130][i]} height="12" rx="6" fill="#9fb8d6" />
          )}
          {[0, 1, 2, 3, 4].map((s) => (
            <circle key={s} cx={400 + s * 16} cy={242 + i * 58} r="5" fill="#fbbc05" />
          ))}
        </g>
      ))}
    </Card>
  ),
};

export default function StepVisual({ kind }: { kind: StepKind }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden" style={{ background: BACKDROPS[kind] }}>
      {/* Soft light, like a studio backdrop */}
      <div aria-hidden="true" className="absolute -left-1/4 -top-1/4 h-3/4 w-3/4 rounded-full bg-white/10 blur-3xl" />
      <svg
        viewBox="0 0 600 450"
        aria-hidden="true"
        className="relative w-[82%] max-w-[640px] drop-shadow-[0_40px_60px_rgba(1,20,60,0.55)]"
      >
        {SCENES[kind]}
      </svg>
    </div>
  );
}
