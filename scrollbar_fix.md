# Scrollbar fix

Opening the menu on a laptop used to make the header, including the menu button, jump sideways. The page's scrollbar disappeared while the menu was open, which made the page about 15px wider.

## What changed

**The scrollbar no longer changes.** The menu and the opening screen used to stop the page scrolling by hiding the scrollbar (`overflow: hidden` on `<body>`). Now they leave the scrollbar alone and block wheel, touch and keyboard scrolling of the page behind them instead.

- `src/lib/scrollLock.ts` (new): `lockScroll()` and `unlockScroll()`. They block wheel, touch and keyboard scrolling (Space, Page Up/Down, Home, End, arrow keys), except inside an element marked `data-scroll-allow` that has room to scroll.
- `src/components/Header.tsx`: the menu uses the lock while open.
- `src/components/Intro.tsx`: the opening screen uses the same lock.

**No second scrollbar in the menu.** On shorter laptop screens the menu is taller than the window, and it showed its own scrollbar next to the page's.

- The menu's own scrollbar is hidden. It can still be scrolled with a mouse wheel, trackpad or touch.
- The menu is centred only when it fits (`align-content: safe center`). When it doesn't fit, it starts just below the header, so the top items are never hidden behind it.

## Checked

Measured on every frame while the menu opened and closed, and at 1280×600, 1366×657, 1440×760, 1536×730 and 1920×950:

- The menu button stays at the same position the whole time.
- The page scrollbar stays visible at its normal width (15px) and position.
- The menu never shows a scrollbar of its own.
- The page behind the menu doesn't scroll with the mouse wheel while the menu is open, and scrolls normally after it closes.
- The top of the menu is always visible below the header.
