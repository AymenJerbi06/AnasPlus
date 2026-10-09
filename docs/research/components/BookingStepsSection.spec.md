# BookingStepsSection Specification

## Overview
- **Target file:** `src/components/BookingStepsSection.tsx`
- **Screenshot:** `docs/design-references/fitnessfirst.de/02-booking-steps-section.jpg`
- **Interaction model:** static content + a non-functional mock search input (no real filtering logic needed)

## DOM Structure
```
<section id="form"> (black bg, padding ~64px vertical)
  <div class="container">
    <h2>Book your first session now! Here's how:</h2>
    <div class="steps-row"> (flex row, 3 columns, centered text each)
      <div class="step"><span class="step-number">- 1 -</span><p>Choose a personal trainer.</p></div>
      <div class="step"><span class="step-number">- 2 -</span><p>Arrange an appointment by email or phone.</p></div>
      <div class="step"><span class="step-number">- 3 -</span><p>Your training can begin!</p></div>
    </div>
    <div class="search-row"> (flex row, label left + input right, ~80px gap below steps)
      <label>Please select at least one city</label>
      <input type="text" placeholder="Search" />
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- background-color: #000000
- padding: 64px 32px

### Heading "Book your first session now! Here's how:"
- font-family: var(--font-sans); font-weight: 700; font-size: 24px; color: #ffffff
- margin-bottom: ~48px (not italic, not uppercase — this one is a plain bold sans heading, distinct from the italic/uppercase H1 style)

### `.steps-row`
- display: flex; justify-content: space-between (or center with gap); text-align: center
- 3 equal columns on desktop

### `.step-number` (e.g. "- 1 -")
- color: #D6002A; font-size: 24px; font-weight: 700; display: block; margin-bottom: 12px

### Step text (e.g. "Choose a personal trainer.")
- color: #ffffff; font-weight: 700; font-size: 16px; line-height: 1.4; max-width: 220px; margin: 0 auto

### `.search-row`
- display: flex; align-items: center; gap: 16px; margin-top: 64px
- label: color: #ffffff; font-weight: 700; font-size: 16px
- input: background: #ffffff; color: #000; padding: 14px 16px; width: 320px; border: none; border-radius: 0; placeholder "Search" in gray

## States & Behaviors
- Search input: purely cosmetic mock — no dropdown/results wiring required. On focus, standard browser outline is fine (or a thin red focus ring to match brand: `focus:ring-2 focus:ring-[--ff-red]`).

## Text Content (verbatim, translated to English)
- Heading: `Book your first session now! Here's how:`
- Step 1: `Choose a personal trainer.`
- Step 2: `Arrange an appointment by email or phone.`
- Step 3: `Your training can begin!`
- Label: `Please select at least one city`
- Input placeholder: `Search`

## Assets
None (text + input only).

## Responsive Behavior
- **Desktop (≥768px):** 3-column steps row, search row as a horizontal flex (label + input side by side).
- **Mobile (<768px):** steps stack vertically, centered, with spacing between; search row stacks label above input, input full width.
- Breakpoint: `md` (768px).
