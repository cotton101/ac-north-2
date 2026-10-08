# Intro and mobile logo removal

## Intro screen removed

The opening screen ("AC North" with changing words underneath) no longer shows. The home page loads straight in.

- `src/components/Intro.tsx`: deleted.
- `src/app/layout.tsx`: the `<Intro />` component and the inline script that skipped it on later pages are removed.
- `src/app/globals.css`: the `word-up` animation and the `.intro-seen` rule are removed.
- `src/lib/site.ts`: the `INTRO_KEY` constant is removed.
- `src/lib/scrollLock.ts`: the comment no longer mentions the opening screen; the menu still uses the lock.
- `README.md`: the Intro entry is removed.

## Spinning logo hidden on phones

- `src/app/page.tsx`: the spinning logo in the hero only shows on screens 768px wide and up (`hidden md:block`). On phones the headline, text and buttons fill the screen on their own. Laptops and desktops are unchanged.

## Checked

- No intro on desktop or phone, including in a screenshot taken just over a second after the page loaded.
- Spinning logo visible on a 1440px desktop, hidden on a 390px phone.
- No sideways scrolling on the phone.
- Production build passes.
