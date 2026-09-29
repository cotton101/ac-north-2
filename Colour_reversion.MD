# Colour scheme reversion

The site goes back to the original colour scheme: warm off-white, near-black and slate. The blue scheme taken from the logo is removed. Fonts are unchanged (Inter throughout).

## Kept from the previous change

- The AC North logo in the header and footer.
- All favicons and app icons (`src/app/favicon.ico`, `src/app/icon.png`, `src/app/apple-icon.png`, `public/logo-mark.png`).
- All mobile fixes:
  - pinned header,
  - full-screen menu with scroll lock and Escape to close,
  - ranking maps stacked on narrow screens,
  - larger tap areas on footer links.

## Colours

File: `src/app/globals.css`

| Token | Blue scheme | Now |
|---|---|---|
| `paper` | `#FFFFFF` | `#F7F6F3` |
| `stone` | `#F3F7FC` | `#EDEBE6` |
| `ink` | `#0A1A33` | `#1C1C1A` |
| `muted` | `#4F5D73` | `#5E5E59` |
| `rule` | `#DDE5EF` | `#D9D6CF` |
| `accent` | `#016BE2` | `#3E5A6B` |
| `accent-deep` | `#012D6E` | `#2C4351` |
| `sky` | `#47B1FB` | removed |

## Other files

- **Footer** (`src/components/Footer.tsx`): back to the dark footer with light text.
- **Logo** (`src/components/Logo.tsx`): on the dark footer, the logo sits on a small off-white tile, because its navy lower half disappears against the dark background otherwise. The header logo is unchanged.
- **Ranking map** (`src/components/HeatmapDiagram.tsx`): top 3 in slate, 4 to 10 in light slate, 11 or lower in grey.
- **Results drawing** (`src/components/ResultsDiagram.tsx`): the map area is back to stone and the review dots to slate.
- **Social images** (`src/app/opengraph-image.tsx`, `src/app/twitter-image.tsx`): the original colours with the logo kept, and a single slate line in place of the three blue bars.
- **Browser bar** (`src/app/layout.tsx`): the theme colour is back to `#F7F6F3`.
