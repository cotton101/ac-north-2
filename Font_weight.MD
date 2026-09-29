# Font weight changes

The text looked too thin, so the weights were increased. The font is still Inter. Inter is a variable font, so any weight from 100 to 900 is available without loading another file.

| Text | Before | After |
|---|---|---|
| Body text | 400 | 500 |
| Headings (`font-semibold`) | 600 | 650 |

- **Body text** (`src/app/globals.css`, `body`): raised to 500 so paragraphs read firmer, especially in the grey secondary text.
- **Headings** (`src/app/globals.css`, `--font-weight-semibold`): raised to 650 so they stay clearly heavier than the body text.
- **Mac text smoothing** (`src/app/layout.tsx`): the `antialiased` class was removed. It makes text render thinner on Macs, so Mac visitors now see the same weight as Windows visitors.

## Unchanged

- **Small number labels** ("01", "Day 1"): these still use the monospace font.
- **Colours and sizes:** no changes.

Checked on desktop and at 375 px on mobile.
