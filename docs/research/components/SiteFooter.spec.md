# SiteFooter Specification

## Overview
- **Target file:** `src/components/SiteFooter.tsx`
- **Screenshot:** `docs/design-references/fitnessfirst.de/06-cta-footer.jpg` (bottom portion)
- **Interaction model:** static, link hover states

## DOM Structure
```
<footer> (bg #ECECED, padding ~48px 32px)
  <div class="container">
    <div class="columns-row"> (3 columns, gap ~64px)
      <div class="col">
        <h4>COMPANY</h4>
        <a>About us</a>
        <a>Press</a>
      </div>
      <div class="col">
        <h4>CAREERS</h4>
        <a>Careers at Fitness First</a>
        <a>FF as an employer</a>
        <a>Jobs</a>
        <a>Partnerships</a>
        <a>Become a personal trainer</a>
        <a>Training</a>
      </div>
      <div class="col">
        <h4>SERVICE</h4>
        <a>News</a>
        <a>Contact</a>
        <a>FAQ's</a>
        <a>Member Login</a>
        <a>Pause your membership here</a>
        <a>Cancel your membership here</a>
        <a>Right of withdrawal</a>
        <a>Cookie settings</a>
      </div>
    </div>
    <hr />
    <div class="social-row"> (centered)
      <p>Follow us for more inspiration</p>
      <div class="social-icons"> (5 circular black icon buttons, white glyph)
        Facebook, Instagram, YouTube, TikTok, WhatsApp
      </div>
    </div>
  </div>
</footer>
```

## Computed Styles

### Footer
- background-color: #ececed
- padding: 48px 32px 32px

### `.columns-row`
- display: grid; grid-template-columns: repeat(3, 1fr); gap: 64px
- padding-bottom: 32px; border-bottom: 1px solid #d5d5d5 (the `<hr>`)

### Column heading (`h4`, e.g. "COMPANY")
- font-family: var(--font-sans); font-weight: 700; font-size: 13px; letter-spacing: 0.05em; text-transform: uppercase; color: #000000
- margin-bottom: 16px

### Column links
- display: block; color: #000000; font-size: 15px; line-height: 2.2 (generous vertical rhythm per screenshot spacing)
- hover: text-decoration: underline (standard default, not explicitly measured)

### `.social-row`
- text-align: center; padding-top: 32px
- paragraph: font-size: 14px; font-weight: 700; color: #000000; margin-bottom: 16px

### `.social-icons`
- display: flex; justify-content: center; gap: 16px
- each icon: width/height 44px; border-radius: 50%; background: #000000; color: #ffffff; display: flex; align-items: center; justify-content: center
- icon glyph size: 20px, from `src/components/icons.tsx` (`FacebookIcon`, `InstagramIcon`, `YoutubeIcon`, `TiktokIcon`, `WhatsappIcon`)

## States & Behaviors
- Link hover: underline (default browser-reasonable treatment).
- Social icon hover: `hover:opacity-80` scale/opacity feedback.

## Text Content (verbatim, translated to English)
- Columns: **COMPANY** (About us, Press) · **CAREERS** (Careers at Fitness First, FF as an employer, Jobs, Partnerships, Become a personal trainer, Training) · **SERVICE** (News, Contact, FAQ's, Member Login, Pause your membership here, Cancel your membership here, Right of withdrawal, Cookie settings)
- Social line: `Follow us for more inspiration`

## Assets
- Social icons: `src/components/icons.tsx` (already created — `FacebookIcon`, `InstagramIcon`, `YoutubeIcon`, `TiktokIcon`, `WhatsappIcon`). Import, do not recreate.

## Responsive Behavior
- **Desktop (≥768px):** 3-column grid as above.
- **Mobile (<768px):** columns stack to single column, each column full width with spacing between (`space-y-8`); social row unchanged (already centered/compact).
- Breakpoint: `md` (768px).
