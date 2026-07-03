# Gadgeon.ai — Website

A fully static, dependency-free marketing site for **gadgeon.ai**, built to match the
[Figma design](https://www.figma.com/design/Lk75wfJRGSqzMmAimvsAzU/Gadgeon.ai?node-id=1957-151).

## Structure

```
gadgeon-ai/
├── index.html    # all page markup
├── styles.css    # all styles (design tokens at :root)
├── script.js     # all interactivity (vanilla JS, no build step)
└── assets/       # images, icons, client & industry logos
```

## Run it

No build required — it's plain HTML/CSS/JS. Either:

- Open `index.html` directly in a browser, **or**
- Serve the folder: `python3 -m http.server 8123` then open
  <http://localhost:8123/gadgeon-ai/>

## Sections

Header · Hero + stats + trusted-by marquee · "AI At The Core" bento grid ·
The Need (challenges) · What We Do (solutions) · Why Gadgeon · Industries ·
Client Stories (case studies) · Insights · Ready to build (CTA + partner stack) · Footer.

## Interactivity

- Sticky nav with scroll shadow and section scroll-spy
- Mobile hamburger menu
- Smooth in-page anchor scrolling (offset for the fixed header)
- Reveal-on-scroll animations (gated behind `.js` so content is visible without JS)
- Animated stat counters
- Auto-scrolling client-logo marquee
- Contact modal (opens from every "Let's Talk" / "Talk to an Expert" / "Book…" CTA)
  with inline validation and a success state
- Back-to-top button
- `prefers-reduced-motion` respected

## Design tokens

Colors, fonts and the brand gradient live in `:root` at the top of `styles.css`.
Brand gradient: `#f47920 → #c756d9 → #3182fc`. Type: **Urbanist** (Inter for the wordmark).

## Notes

- The contact form is client-side only (no backend wired). On submit it validates and
  shows an in-page confirmation; a `mailto:` fallback is present but commented out in
  `script.js` — uncomment to route submissions to an inbox, or POST to your endpoint.
- Partner/tech logos in the "Ready to build" stack are rendered as styled text to keep
  the site self-contained and offline-safe; swap in SVGs if brand marks are preferred.
