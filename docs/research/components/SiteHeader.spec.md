# SiteHeader Specification

## Overview
- **Target file:** `src/components/SiteHeader.tsx`
- **Screenshot:** `docs/design-references/fitnessfirst.de/01-hero-section.jpg` (header visible at top)
- **Interaction model:** scroll-driven (header shrinks), static otherwise (dropdowns are click/hover out of scope — build top-level links only, no mega-menu panels needed)

## DOM Structure
```
<header> (fixed, full width, z-50, bg black)
  <div class="header-top">  — utility bar, 44px tall at scroll 0, collapses to 0
    Contact | Careers | Sport Trips | Member Login   (small white text links, right-aligned)
  </div>
  <div class="header-main"> — 64px tall always
    <a href="/"><img logo /></a>           — left
    <nav> top-level links </nav>            — center
    <button class="cta">BECOME A MEMBER</button>  — right, red bg
  </div>
</header>
<div style="height: 108px" />  <!-- spacer so content below isn't hidden by fixed header's initial height -->
```

## Computed Styles

### `<header>`
- position: fixed; top: 0; left: 0; right: 0; z-index: 50
- background-color: #000000
- transition: all 0.3s ease-in-out
- height: 108px initially, 64px once scrolled

### `.header-top` (utility bar)
- display: flex; justify-content: flex-end; align-items: center; gap: 24px
- height: 44px → 0px when scrolled; overflow: hidden
- transition: height 0.3s ease-in-out
- font-size: 13px; color: #ffffff; text-transform: none

### `.header-main`
- display: flex; align-items: center; justify-content: space-between
- height: 64px; padding: 0 32px
- max-width: 1440px; margin: 0 auto (boxed container)

### Logo
- `<img>` height ≈ 28px (white "Fitness First" wordmark), use `/images/logo-white.png`

### Nav links
- font-family: var(--font-sans); font-size: 15px; font-weight: 500; color: #ffffff
- active item ("Training"): border-bottom: 2px solid #D6002A; padding-bottom: 4px
- gap between items: ~28px

### CTA button ("BECOME A MEMBER")
- background: #D6002A; color: #ffffff
- font-family: var(--font-heading); font-style: italic; text-transform: uppercase; font-size: 14px
- padding: 10px 20px; border: 2px solid #D6002A; border-radius: 0

## States & Behaviors

### Scroll shrink
- **Trigger:** `window.scrollY > 0`
- **State A (top):** header height 108px, `.header-top` height 44px/visible
- **State B (scrolled):** header height 64px, `.header-top` height 0/hidden
- **Transition:** `height 0.3s ease-in-out`
- **Implementation:** client component, `useEffect` scroll listener toggling a `scrolled` boolean state, applied as conditional Tailwind classes (`h-[108px]` vs `h-16`, and `.header-top` `h-11 opacity-100` vs `h-0 opacity-0 overflow-hidden`).

## Text Content (verbatim, translated to English)
- Utility bar: `Contact` · `Careers` · `Sport Trips` · `Member Login`
- Top-level nav: `Free Trial` · `Membership` · `Gyms` · `Training` (active) · `Classes` · `HYROX` · `Corporate Fitness` · `Magazine`
- CTA button: `BECOME A MEMBER`

## Assets
- `/images/logo-white.png` (downloaded)

## Responsive Behavior
- **Desktop (≥1024px):** full nav row as described.
- **Mobile (<1024px):** collapse `.header-main` nav into a hamburger icon (use `lucide-react` `Menu`/`X`) that opens a simple full-screen or slide-down list of the same top-level links; utility bar hidden entirely below `lg`. CTA button remains visible, shrinks padding.
- Breakpoint: `lg` (1024px).
