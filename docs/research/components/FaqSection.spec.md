# FaqSection Specification

## Overview
- **Target file:** `src/components/FaqSection.tsx`
- **Screenshot:** `docs/design-references/fitnessfirst.de/03-faq-section-collapsed.jpg`
- **Interaction model:** click-driven accordion (each item toggles independently — NOT single-open exclusivity)

## DOM Structure
```
<section> (white bg, padding ~64px, 2-column layout)
  <div class="container grid grid-cols-2 gap-12">
    <img class="faq-photo" />                — left column, ~45% width, rounded? (screenshot shows sharp corners), aspect ~1:1.3
    <div class="faq-list">                    — right column
      <h2>QUESTIONS &amp; ANSWERS ABOUT PERSONAL TRAINING</h2>
      <ul>
        <li class="faq-item"> (5 of these, each a <details>-like client component)
          <button class="faq-trigger">
            <span class="faq-number">01</span>
            <span class="faq-question">What does personal training cost?</span>
            <ChevronDown class="faq-chevron" />
          </button>
          <div class="faq-answer">...paragraph...</div>
        </li>
        ... 02–05
      </ul>
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- background-color: #ffffff (page default, no explicit bg needed)
- padding: 64px 32px

### `faq-photo`
- width: ~45%; object-fit: cover; height: auto (natural aspect of the source photo)

### `<h2>` "QUESTIONS & ANSWERS..."
- font-family: var(--font-heading); font-style: normal (NOT italic here — screenshot shows upright bold, not italic); text-transform: uppercase
- font-size: 32px; line-height: 1.15; font-weight: 700; color: #000000
- margin-bottom: 32px

### `.faq-item`
- border-bottom: 1px solid #e5e5e5
- padding: 20px 0

### `.faq-trigger` (button, full width, flex row, justify-between, items-center, cursor pointer)
### `.faq-number` ("01"–"05")
- color: #D6002A; font-weight: 700; font-size: 28px; min-width: 48px

### `.faq-question`
- color: #000000; font-weight: 700; font-size: 18px; flex: 1

### `.faq-chevron`
- color: #D6002A; transition: transform 0.2s ease
- rotates 180deg when expanded (points up instead of down)

### `.faq-answer`
- color: #333333 (dark gray body text); font-size: 15px; line-height: 1.6
- padding-top: 12px; padding-left: ~64px (aligned under the question text, past the number column)

## States & Behaviors

### Accordion expand/collapse (click-driven, per item independently)
- **Trigger:** click on `.faq-trigger`
- **Collapsed:** `.faq-answer` not rendered / height 0, chevron pointing down
- **Expanded:** `.faq-answer` visible, chevron rotated 180° (pointing up)
- **Transition:** ~200ms ease height/opacity reveal (e.g. CSS grid `grid-template-rows: 0fr → 1fr` trick, or simple conditional render with a fade-in — either is acceptable; grid-rows technique gives a smoother height animation)
- **Implementation:** client component, `useState<Set<number>>` or per-item boolean, each item toggles independently (multiple can be open at once)

## Text Content (verbatim, translated to English)

1. **What does personal training cost?**
   Personal training helps you reach your goals faster and more effectively. Depending on your available time, budget, and goals, your personal trainer puts together a fully individual concept for you. Pricing is set independently by each coach.

2. **How does a personal training session work?**
   First, your personal trainer gets a clear picture of your fitness level, health, and athletic experience. Together, you then define your personal training goal based on your wishes and expectations. Your coach regularly accompanies and supports you during training and, if needed, creates an individual training plan. They're your competent point of contact for all training-related questions.

3. **How can a personal trainer help me?**
   With a personal trainer, you reach your goals faster and more effectively. Your coach answers all your questions about training and nutrition. And best of all: they keep motivating you to push past your limits! Whether it's functional training or machine-based training, your personal trainer tailors your training individually to your wishes and starting point.

4. **What does Fitness First offer in the area of personal training?**
   We work with qualified, self-employed personal trainers who offer a range of services that you can book directly. The offering, the training itself, and the terms and pricing are determined by the coach. In this case, the coach is the service provider — Fitness First has no influence over it.

5. **Who is personal training suitable for?**
   Personal training is suitable for everyone. Whether you're a beginner or advanced: a professional coach helps you reach your goals faster and better, and helps you perform every exercise correctly. They become your personal point of contact for questions about training and nutrition. A coach is also a great motivator for those days when your inner couch potato takes over. Find the right trainer for you and your goals now!

## Assets
- `/images/faq-training.jpg` (downloaded — leg press exercise photo)

## Responsive Behavior
- **Desktop (≥768px):** 2-column grid (image | list) as above.
- **Mobile (<768px):** single column, image on top (full width, fixed aspect e.g. `aspect-[4/3]`), FAQ list below. Answer left-padding reduces to align with question text (no number-column offset needed).
- Breakpoint: `md` (768px).
