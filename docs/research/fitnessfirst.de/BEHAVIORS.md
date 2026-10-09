# Behaviors — fitnessfirst.de/personal-training

## Header scroll behavior (scroll-driven, NOT click)
- Trigger: `window.scrollY > 0` → header gains class `scroll-on`.
- State A (top, scrollY=0): header height `108px`; `.header-top` utility bar visible, `height: 44px`, `display:flex`.
- State B (scrolled): header height `64px`; `.header-top` collapses to `height: 0px`.
- Transition: `height 0.3s ease-in-out` on the utility bar. Header itself: `transition: all` (treat as `all .3s ease-in-out` for consistency).
- Header `position: fixed; top:0; z-index:230`, bg `#000`, no box-shadow in either state.
- Implementation: a scroll listener (or `useEffect` + `window.addEventListener('scroll', …, {passive:true})`) toggling a boolean that adds/removes a class, OR pure CSS with a 1px scroll-sentinel + `IntersectionObserver` — either acceptable, scroll-listener is simpler here since the threshold is scrollY===0.

## FAQ accordion (click-driven)
- Each of the 5 items: number (`01`–`05`, red, bold) + question (bold black) + chevron icon, full-width row with bottom border.
- Click toggles that single item's expanded state independently (not single-open-only).
- Expanded: chevron flips from pointing down to pointing up; answer paragraph (gray/black body text) slides/fades in below the question.
- No measured transition on the live site beyond the browser-default content reflow — use a simple `grid-rows-[0fr]→[1fr]` or height-auto reveal with ~200ms ease transition for a polished feel.

## Back-to-top button
- A circular white button with an up-chevron appears fixed bottom-right once the page is scrolled down; not present at scrollY=0. Click scrolls smoothly to top. Treat as: `opacity`/`visibility` toggle on scroll, same scroll-driven trigger as the header.

## Video section
- Not a custom video player — it's a standard YouTube `iframe` (`youtube.com/embed/e6ZtBtG0tV0` on the source site; in the clone, swap to a generic placeholder/embed or keep a YouTube-style thumbnail-with-play-button static mock since no real video asset belongs to this project). Click-to-play is YouTube's native behavior if a real iframe is used.

## Hover states
- Primary CTA buttons (red bg, white text, uppercase italic, red 2px border): on hover, standard treatment is background darkens slightly / or inverts to red-text-on-white — exact hover computed style wasn't captured; apply a conservative `hover:brightness-110` or `hover:bg-black hover:text-[--ff-red]` treatment consistent with the brand's bold aesthetic. Note as an approximation.
- Footer links: standard underline-on-hover is a safe default (not explicitly measured).
- Nav links: active item has a red underline (`Training` item shows this in the hero screenshot — red 2px bottom border under the active nav label).

## No scroll-snap, no parallax, no auto-carousel, no Lenis/Locomotive Scroll detected.
