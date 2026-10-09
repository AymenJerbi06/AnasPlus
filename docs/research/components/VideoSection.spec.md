# VideoSection Specification

## Overview
- **Target file:** `src/components/VideoSection.tsx`
- **Screenshot:** `docs/design-references/fitnessfirst.de/04-video-section.jpg`
- **Interaction model:** static heading + a standard YouTube embed (YouTube handles its own click-to-play interaction)

## DOM Structure
```
<section> (white bg, padding ~64px, centered content, max-width container)
  <h2>What can I expect from personal training?</h2>
  <div class="video-wrapper"> (16:9 aspect, max-width ~1080px, centered, margin-top 32px)
    <iframe src="https://www.youtube.com/embed/e6ZtBtG0tV0" title="Personal Training at Fitness First – How our personal trainers can help you" />
  </div>
</section>
```

## Computed Styles

### Section
- background-color: #ffffff
- padding: 64px 32px; text-align: center (heading only)

### `<h2>` "What can I expect from personal training?"
- font-family: var(--font-sans); font-weight: 700; font-size: 28px; color: #000000
- text-transform: none; font-style: normal (plain bold sans heading, like BookingStepsSection's heading — not the italic uppercase H1 style)

### `.video-wrapper`
- position: relative; width: 100%; max-width: 1080px; margin: 32px auto 0
- aspect-ratio: 16 / 9
- `<iframe>` absolute inset-0, width/height 100%, border: none

## States & Behaviors
N/A beyond YouTube's native player chrome (play button, controls) which comes for free with the `iframe` embed — do not attempt to rebuild custom video controls.

## Text Content (verbatim, translated to English)
- Heading: `What can I expect from personal training?`
- Video title (iframe `title` attr, for accessibility): `Personal Training at Fitness First – How our personal trainers can help you`

## Assets
- No local video file needed — embed `https://www.youtube.com/embed/e6ZtBtG0tV0` directly via `<iframe>` (loading="lazy").

## Responsive Behavior
- **All widths:** the `aspect-ratio` box keeps the embed responsive automatically; just reduce horizontal padding at `<640px` and reduce heading font-size to ~22px below `md`.
- Breakpoint: `md` (768px) for heading size only; layout itself is fluid.
