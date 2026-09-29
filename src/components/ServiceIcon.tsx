/** Coloured service tiles, after the reference site's per-service icons, in the logo's blues. */
export const SERVICE_COLOURS: Record<string, string> = {
  benchmarking: "#47b1fb",
  "google-business-profile": "#016be2",
  "website-seo": "#2f8cff",
  "service-and-area-pages": "#7cc6ff",
  citations: "#0a4fb5",
  "weekly-updates": "#34c3f0",
};

const GLYPHS: Record<string, React.ReactNode> = {
  // A ranking grid
  benchmarking: (
    <g fill="currentColor">
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => <circle key={`${r}${c}`} cx={13 + c * 7} cy={13 + r * 7} r={r === 1 && c === 1 ? 3 : 2} />),
      )}
    </g>
  ),
  // A map pin
  "google-business-profile": (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20 8a8 8 0 0 0-8 8c0 6 8 15 8 15s8-9 8-15a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
    />
  ),
  // A browser window
  "website-seo": (
    <g fill="none" stroke="currentColor" strokeWidth="2.4">
      <rect x="9" y="11" width="22" height="18" rx="2.5" />
      <path d="M9 16h22" />
      <path d="M13 21h9M13 25h6" strokeLinecap="round" />
    </g>
  ),
  // Stacked pages
  "service-and-area-pages": (
    <g fill="currentColor">
      <rect x="10" y="9" width="15" height="19" rx="2" opacity="0.55" />
      <rect x="15" y="13" width="15" height="19" rx="2" />
    </g>
  ),
  // Listing rows
  citations: (
    <g fill="currentColor">
      <circle cx="12.5" cy="13" r="2.5" />
      <circle cx="12.5" cy="20" r="2.5" />
      <circle cx="12.5" cy="27" r="2.5" />
      <rect x="17" y="11.5" width="14" height="3" rx="1.5" />
      <rect x="17" y="18.5" width="14" height="3" rx="1.5" />
      <rect x="17" y="25.5" width="10" height="3" rx="1.5" />
    </g>
  ),
  // A rising chart
  "weekly-updates": (
    <path
      d="M9 28l7-7 5 4 10-11M25 14h6v6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function ServiceIcon({ slug, size = 48 }: { slug: string; size?: number }) {
  const colour = SERVICE_COLOURS[slug] ?? "#016be2";
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" className="shrink-0">
      <path d="M0 12C0 3 3 0 12 0h16c9 0 12 3 12 12v16c0 9-3 12-12 12H12C3 40 0 37 0 28Z" fill={colour} />
      <g className="text-white">{GLYPHS[slug]}</g>
    </svg>
  );
}
