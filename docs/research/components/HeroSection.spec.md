# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/fitnessfirst.de/01-hero-section.jpg`
- **Interaction model:** static

## DOM Structure
```
<section> (black bg, full-bleed photo as background/right-aligned image, min-height ~520px)
  <div class="container"> (left-aligned text block, vertically centered)
    <h1>PERSONAL TRAINING</h1>
    <p>Maximum results with personal coaching – individual, flexible, motivating</p>
    <a class="cta-button">FIND A TRAINER NOW</a>
  </div>
  <img class="hero-photo" /> — fills right ~60% of section, object-fit: cover, photographic, dark/moody
</section>
```

## Computed Styles

### Section
- background-color: #000000
- min-height: 520px (desktop); position: relative; overflow: hidden
- padding-top: 108px (to clear fixed header) — or render header spacer above instead; either works, pick the spacer-div approach for simplicity (see SiteHeader spec) and give this section `padding-top: 0`.

### Hero image
- position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center
- a dark gradient overlay from left (black) fading to transparent is implied by the photo's own exposure — add `bg-gradient-to-r from-black/80 via-black/40 to-transparent` on an overlay div so the left-aligned text stays legible over the image, matching the screenshot's look.

### `<h1>` "PERSONAL TRAINING"
- font-family: var(--font-heading) ("Soho Bold")
- font-style: italic; text-transform: uppercase
- font-size: 42px; line-height: 48px; font-weight: 700 (use the bold font file)
- color: #ffffff

### Subtext paragraph
- font-family: var(--font-sans); font-size: 18px; line-height: 1.4; color: #ffffff
- max-width: ~480px

### CTA button ("FIND A TRAINER NOW")
- background: #D6002A; color: #ffffff
- font-family: var(--font-heading); font-style: italic; text-transform: uppercase; font-size: 16px
- padding: 12px 16px; border: 2px solid #D6002A; border-radius: 0; display: inline-block
- width: auto (hug content, ~237px in the screenshot at this copy length)

## States & Behaviors
N/A (static section). CTA link target: `#form` (anchor down to the booking-steps section's search).

## Text Content (verbatim, translated to English)
- Heading: `PERSONAL TRAINING`
- Subtext: `Maximum results with personal coaching – individual, flexible, motivating`
- Button: `FIND A TRAINER NOW`

## Assets
- `/images/hero-personal-training.jpg` (downloaded — trainer coaching a client with boxing wraps, dark gym setting)

## Responsive Behavior
- **Desktop (≥1024px):** text block ~45% width on the left, image fills remaining width/bleeds full height as in screenshot.
- **Mobile (<1024px):** image becomes a full-width background behind the text block (text overlaid, same gradient-overlay technique, just centered/stacked), section height adapts to content (`min-height: 420px` reasonable). Text block full width with padding.
- Breakpoint: `lg` (1024px).
