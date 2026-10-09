# ArticlesSection Specification

## Overview
- **Target file:** `src/components/ArticlesSection.tsx`
- **Screenshot:** `docs/design-references/fitnessfirst.de/05-articles-section.jpg`
- **Interaction model:** static 3-card grid, hover state on cards (image/link)

## DOM Structure
```
<section> (white bg, padding ~64px)
  <div class="container">
    <h2>Top 3 articles on personal training</h2>
    <div class="cards-grid"> (3 columns, gap ~32px, margin-top 32px)
      <article class="card"> x3
        <img class="card-image" />            — aspect ~4:3, object-fit cover, full card width
        <h3 class="card-title">...</h3>
        <a class="card-link">Read more ›</a>
      </article>
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- background-color: #ffffff
- padding: 64px 32px

### `<h2>` "Top 3 articles on personal training"
- font-family: var(--font-sans); font-weight: 700; font-size: 28px; color: #000000; font-style: normal; text-transform: none

### `.cards-grid`
- display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-top: 32px

### `.card-image`
- width: 100%; aspect-ratio: 4/3 (approx, matches screenshot proportions); object-fit: cover
- border: 1px solid #eee (subtle, from screenshot's card edge)

### `.card-title`
- font-family: var(--font-sans); font-weight: 700; font-size: 18px; color: #000000; line-height: 1.3
- margin-top: 16px

### `.card-link` ("Read more ›")
- color: #000000; font-size: 14px; font-weight: 500
- margin-top: 8px; display: inline-block
- hover: color changes to #D6002A (brand red) — reasonable default hover treatment, not explicitly measured

## States & Behaviors
- Card hover: image gets a subtle `hover:brightness-95` or `hover:opacity-90` treatment (not explicitly measured on live site, conservative default for a clickable card).

## Text Content (verbatim, translated to English)
- Section heading: `Top 3 articles on personal training`
1. **Creating a training plan – here's how to do it right!**
   Tips for your personal fitness plan: preparation, content & scope. Examples for muscle building, weight loss & endurance.
   Link: `Read more ›`
2. **Building muscle with age: tips & training plan from 50**
   From age 30, building muscle gets harder. Find out here how to train for muscle growth correctly as a best-ager over 50, and what's different for women!
   Link: `Read more ›`
3. **Body recomposition: losing fat and building muscle at the same time?**
   (Excerpt not captured from source page — use a short, on-brand one-liner: "Find out whether it's really possible to lose fat and build muscle at the same time, and how body recomposition works.")
   Link: `Read more ›`

## Assets
- `/images/article-trainingsplan.jpg`
- `/images/article-muskelaufbau.jpg`
- `/images/article-rekomposition.jpg`

## Responsive Behavior
- **Desktop (≥768px):** 3-column grid as above.
- **Mobile (<768px):** single column, cards stacked, full width, gap reduces to ~24px.
- Breakpoint: `md` (768px).
