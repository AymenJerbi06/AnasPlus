# Page Topology — fitnessfirst.de/personal-training

Source: https://www.fitnessfirst.de/personal-training (German; cloned copy renders English translations of the same copy).
Drupal + Acquia Cohesion site. Desktop viewport used for extraction: 1440px (actual browser reported 1400x771 content area). Doc height ~4004px.

## Stack (top → bottom)

| # | Section | Component file | Top (px) | Height (px) | Bg |
|---|---------|-----------------|----------|-------------|----|
| — | Header/Nav (fixed, position:fixed, z-index:230) | `SiteHeader.tsx` | 0 | 108 → 64 (scrolled) | black |
| 1 | Hero ("Personal Training") | `HeroSection.tsx` | 108 | 520 | black, full-bleed photo right/behind |
| 2 | Booking steps + city search | `BookingStepsSection.tsx` | 628 | 578 | black |
| 3 | FAQ accordion | `FaqSection.tsx` | 1206 | 557 | white |
| 4 | Video intro heading + player | `VideoSection.tsx` | 1779 + 1899 | 104 + 577 | white |
| 5 | Related articles (3 cards) | `ArticlesSection.tsx` | 2499 | 710 | white |
| 6 | Closing CTA (2 buttons) | `CtaSection.tsx` | 3209 | 220 | black |
| — | Footer (3 link columns + social) | `SiteFooter.tsx` | 3485 | 463 | `#ececed` light gray |

## Layout notes

- Page background defaults to white; black sections (header, hero, steps, CTA) use an explicit black background on their own wrapper — they are NOT a page-level dark mode.
- Header is `position: fixed; top:0; z-index:230` and overlays the hero (hero content starts visually under it — hero top offset of 108px in the DOM flow accounts for the header's initial height, achieved by the header's static/fixed combo — in the Next build, simplest approach: header `fixed` + a spacer matching header height, OR hero section gets `padding-top` equal to header height).
- No page-level scroll-snap or smooth-scroll library detected (default native scroll).
- A circular "scroll to top" button fades in after scrolling down (bottom-right, fixed).
- No layered/overlay background images beyond icon-font glyphs — each section uses at most one photographic image.

## Interaction models by section

- **Header**: scroll-driven (not click). `scroll-on` class added once `scrollY > 0`; utility top bar collapses `height: 44px → 0px` (`transition: height .3s ease-in-out`); overall header height `108px → 64px`.
- **Hero**: static.
- **Booking steps**: static (3 numbered steps) + a city-search combobox (functional on live site; in the clone, build as a non-wired search input + dropdown "Search" placeholder — no real filtering needed, mock only).
- **FAQ**: click-driven accordion, single-expand-at-a-time pattern not confirmed exclusive (the live site allowed multiple open) — build as independently toggleable items (no accordion exclusivity needed). Chevron icon flips down↔up.
- **Video section**: static heading + a YouTube `iframe` embed (click-to-play, YouTube's own UI).
- **Articles**: static 3-card grid, no carousel.
- **CTA**: static, two buttons (solid red primary + outlined/ghost secondary with reduced-opacity "disabled" look).
- **Footer**: static, standard link columns + social icon row.

## Responsive

Live-site mobile/tablet viewports could not be captured directly (browser automation viewport resize was not effective in this session — window stayed at 1400px regardless of requested size). Build responsive behavior using standard Tailwind conventions consistent with the desktop proportions visible in screenshots:
- Header: collapse nav links into a hamburger/menu below `lg` (1024px).
- Hero: text block stacks above/over full-bleed image; keep readable at `sm`.
- Steps + FAQ + Articles: grid/flex rows collapse to a single column below `md` (768px).
- Footer columns stack to 1 column below `sm` (640px).

This is a known limitation — noted to the user, not a silent gap.
