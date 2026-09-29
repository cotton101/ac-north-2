# Mobile, colour and favicon changes

## Favicon and logo

All icons were generated from the AC North logo. It has a transparent background and was trimmed and centred.

| File | Use |
|---|---|
| `src/app/favicon.ico` | Browser tab icon (16, 32 and 48 px) |
| `src/app/icon.png` | 512 px icon for Android and other devices |
| `src/app/apple-icon.png` | 180 px iPhone home screen icon, on a white background because iPhones do not show transparency well |
| `public/logo-mark.png` | Logo used in the header and footer |

- `src/app/icon.svg`, the placeholder slate chevron, was removed.
- `src/components/Logo.tsx` now shows the logo image next to "AC North".
- `src/app/opengraph-image.tsx` and `src/app/twitter-image.tsx`: the social sharing image now uses the logo and the new colours, with three bars in the logo's three blues.

## Colour scheme

File: `src/app/globals.css`

The colours are taken from the logo's three blues: sky `#47B1FB`, blue `#016BE2` and navy `#012D6E`.

| Token | Before | After | Used for |
|---|---|---|---|
| `paper` | `#F7F6F3` | `#FFFFFF` | Page background |
| `stone` | `#EDEBE6` | `#F3F7FC` | Alternate sections, footer |
| `ink` | `#1C1C1A` | `#0A1A33` | Text |
| `muted` | `#5E5E59` | `#4F5D73` | Secondary text |
| `rule` | `#D9D6CF` | `#DDE5EF` | Lines and borders |
| `accent` | `#3E5A6B` | `#016BE2` | Links, numbers, highlights |
| `accent-deep` | `#2C4351` | `#012D6E` | Link hover |
| `sky` | — | `#47B1FB` | Diagrams only, not text |

The accent blue has a contrast ratio of about 5:1 on white, which passes WCAG AA for body text.

Other colour changes:
- **Footer** (`src/components/Footer.tsx`): changed from dark to light (pale blue-grey with a top border) so the logo shows properly. Links have more padding for easier tapping.
- **Ranking map** (`src/components/HeatmapDiagram.tsx`): top 3 is blue, 4 to 10 is sky and 11 or lower is grey.
- **Results drawing** (`src/components/ResultsDiagram.tsx`): the map area is light sky and the review dots are sky.
- **Browser bar** (`src/app/layout.tsx`): the theme colour is set to white, so mobile browser bars match the site.

## Mobile

Every page was checked at 375 px and 320 px wide with mobile emulation. No page scrolls sideways.

- **Header** (`src/components/Header.tsx`): now sticks to the top of the screen, so the menu can be reached from anywhere on long pages. It is a plain white bar with a bottom border, the same on desktop.
- **Mobile menu** (`src/components/MobileNav.tsx`):
  - Covers the whole screen below the header, so page content no longer shows through.
  - The page behind cannot scroll while the menu is open.
  - Closes when a link is tapped or Escape is pressed.
  - Highlights the current page.
  - Has larger tap areas for links and the Menu button.
- **Ranking maps** (`src/components/HeatmapDiagram.tsx`): the two maps stack on screens narrower than 480 px so the numbers stay readable, and sit side by side on wider screens.
