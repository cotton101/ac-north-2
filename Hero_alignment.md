# Hero alignment

File: `src/app/page.tsx`

The home page hero text was centred vertically against the Google search drawing, which pushed it about 90 px lower than the drawing's top edge. The two columns are now aligned to the top.

- **Change:** the hero grid uses `items-start` instead of `items-center`.
- **Result on desktop:** the "Local SEO" label and the top of the drawing both start 161 px from the top of the page. The headline, paragraph and links move up with the label and keep their spacing.
- **Why:** it matches the other sections, where headings line up with the top of the content beside them, and it brings the headline higher on the screen.
- **Mobile:** the text and drawing stack on phones, so nothing changes there.
