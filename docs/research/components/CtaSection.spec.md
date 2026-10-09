# CtaSection Specification

## Overview
- **Target file:** `src/components/CtaSection.tsx`
- **Screenshot:** `docs/design-references/fitnessfirst.de/06-cta-footer.jpg` (top portion, above the gray footer)
- **Interaction model:** static

## DOM Structure
```
<section> (black bg, padding ~64px, centered content, text-align center)
  <h2>Ready to get started? Book your first personal training session now!</h2>
  <div class="buttons"> (flex column, gap ~24px, centered)
    <a class="btn-primary">FIND A TRAINER NOW</a>
    <a class="btn-ghost">BOOK AN APPOINTMENT</a>
  </div>
</section>
```

## Computed Styles

### Section
- background-color: #000000
- padding: 64px 32px; text-align: center

### `<h2>`
- font-family: var(--font-sans); font-weight: 700; font-size: 22px; color: #ffffff; max-width: 560px; margin: 0 auto 32px
- font-style: normal; text-transform: none

### `.btn-primary` ("FIND A TRAINER NOW")
- background: #D6002A; color: #ffffff
- font-family: var(--font-heading); font-style: italic; text-transform: uppercase; font-size: 16px
- padding: 14px 24px; border: 2px solid #D6002A; border-radius: 0; display: inline-block

### `.btn-ghost` ("BOOK AN APPOINTMENT")
- background: transparent; color: #8a8a8a (muted gray, looks disabled in screenshot)
- font-family: var(--font-heading); font-style: italic; text-transform: uppercase; font-size: 16px
- padding: 14px 24px; border: 2px solid #4a4a4a; border-radius: 0; display: inline-block
- Note: visually reads as a disabled/secondary state on the live site (lower contrast than the primary button) — replicate the muted look but keep it as a real functional link, not a disabled element, unless the client wants it inert.

## States & Behaviors
N/A (static). No hover data captured — apply `hover:brightness-110` on primary, `hover:border-white hover:text-white` on ghost as a conservative default.

## Text Content (verbatim, translated to English)
- Heading: `Ready to get started? Book your first personal training session now!`
- Primary button: `FIND A TRAINER NOW`
- Ghost button: `BOOK AN APPOINTMENT`

## Assets
None.

## Responsive Behavior
- **All widths:** buttons already stack vertically on the live site at this width; keep stacked column layout at all breakpoints, just reduce heading font-size to ~18px below `sm` (640px).
