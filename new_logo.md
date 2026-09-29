# New logo

The blue logo is replaced with the new slate and black version, which matches the site's colour scheme. Every icon was generated from the new logo. It has a transparent background and was trimmed and centred.

## Files

| File | Use | Background |
|---|---|---|
| `src/app/favicon.ico` | Browser tab icon (16, 32 and 48 px) | Off-white rounded tile |
| `src/app/icon.png` | 512 px icon for Android and other devices | Off-white rounded tile |
| `src/app/apple-icon.png` | 180 px iPhone home screen icon | Off-white square (iPhone rounds the corners) |
| `public/ac-north-logo.png` | Logo in the header, footer and social images | Transparent |

`public/logo-mark.png` (the blue logo) was removed. The logo now lives at a new filename so no cached copy of the old blue logo can be shown by Next.js image optimisation or by browsers.

## Why the tile

The logo's black lower arc disappears on dark backgrounds. The favicon and app icon therefore sit on a small off-white tile (`#F7F6F3`, the site background), so the whole mark shows on both light and dark browser tabs. The dark footer already uses the same approach.

## Code

- `src/components/Logo.tsx`: points to `/ac-north-logo.png`.
- `src/app/opengraph-image.tsx`, `src/app/twitter-image.tsx`: read `public/ac-north-logo.png` for the social sharing image.

Checked in the header, the dark footer, the favicon on light and dark tabs, the iPhone icon and the sharing image.
