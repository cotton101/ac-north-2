# FAQ changes

## Layout fix

- The FAQ list was offset to the right of the page (it started two-thirds of the way across, leaving an empty column). It now lines up with the page heading.
- The open/close indicator no longer rotates. It switches between `+` and `−`, so nothing moves when a question opens.

File: `src/app/faq/page.tsx`

## Answer changes

File: `src/content/faq.ts`

### What is SEO?

**Before:** SEO stands for search engine optimisation. It is the work of improving your website and your presence online so that Google shows your business higher in its results when people search for what you offer.

**After:** SEO stands for search engine optimisation. It is the work of improving your presence online so that Google shows your business higher in its results when people search for what you offer.

### Why is SEO ongoing?

**Before:** Google's results keep changing, and your competitors keep working on their own sites. The monthly work keeps you in the top 3.

**After:** Google's results keep changing, and your competitors keep working on their own ranking. The monthly work keeps you in the top 3.

Second paragraph unchanged: Rankings also build over time. Each month adds content, links and improvements that make your position more secure.

### Do I need a new website?

**Before:** Usually not. Most sites can be fixed and improved as they are. If something about your current site makes ranking impractical, the audit will say so and explain why.

**After:** No. Sites can be fixed and improved as they are. If something about your current site makes ranking impractical, the audit will say so and explain why.

### What do you need from me?

**Before:** Access to your website, your Google Business Profile, Google Search Console and Google Analytics, and a short conversation about your services and customers. We handle the rest.

**After:** Access to your website, Google Business Profile and a short conversation about your services and customers. We handle the rest.

### Will you make changes to my website?

**Before:** Yes. Most of the work involves changes to page titles, content, links and technical settings. Anything that changes how your site looks or what it says about your business is agreed with you first.

**After:** Negligible. Most of the work involves changes to page titles, content, links and technical settings. Nothing will be changed about how your site looks or what it says about your business.

## Related changes

### Who we work with — "What we need from you"

Updated to match the new FAQ answers.

File: `src/app/who-we-work-with/page.tsx`

**Before:**
1. Access to your website, or to whoever manages it.
2. Access to your Google Business Profile, Search Console and Analytics. We can set these up if you do not have them.
3. A short conversation about your services, customers and the areas you cover.
4. Approval for any change to how your site looks or what it says about your business.

**After:**
1. Access to your website, or to whoever manages it.
2. Access to your Google Business Profile. We can set one up if you do not have one.
3. A short conversation about your services and customers.

### Social sharing URL (og:url)

Every inner page was inheriting the home page address as its `og:url`. The tag has been removed so search engines and social sites use each page's own canonical URL. Service pages also now keep the site name when shared.

Files: `src/app/layout.tsx`, `src/app/what-we-do/[slug]/page.tsx`
