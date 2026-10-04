# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hiring decision-makers evaluating Pavel Rysych for **Head of Design / Director of Product Design** roles: founders, CPOs, VPs of Product, and recruiters at startups and established product companies. They arrive from a CV, LinkedIn, or a referral, usually with limited time, and need to decide whether Pavel can own product design, lead and grow a design team, and bring AI into how a team works. Many will skim the homepage in under a minute, then read one or two case studies in depth before an interview.

## Product Purpose

rysych.com is Pavel's professional portfolio. It exists to get him shortlisted and into conversations for design leadership roles. Success means a hiring manager understands within the first screen what responsibility Pavel can take, finds credible proof in the selected work, and reaches out (email, LinkedIn, CV).

## Positioning

A **Product Design Leader** who combines three things a neighboring portfolio rarely shows together:

1. Leadership through change: founding designer (Fundraise Up), head of design through a platform pivot (MetaMap, later acquired by Incode), head of design connecting customer strategy, team restructuring, and web production (Admirals).
2. Hands-on AI practice: prototypes, design-system-to-code workflows, AI-assisted web production and review, and team workshops, shown as real working projects rather than tool lists.
3. A product he conceived, designed, and built himself with AI tools: Subskim.

Experience across design, product, and growth lets him connect design decisions with business outcomes.

## Operating Context

- Visitors read on desktop between meetings and on phones from LinkedIn/email links.
- The homepage is a scannable overview; case pages (`work/<project>/`) are the material read before an interview.
- Site copy is in English for an international, English-speaking audience. Working notes in this repo are in Russian.

## Capabilities and Constraints

- Static site: `index.html`, `home.css`, `home.js`, `site.js`, `case.css` (+ `assets/fundraise-case.css`), a branded `404.html`; case pages in `work/subskim`, `work/admirals`, `work/mechanism`, `work/metamap`, `work/fundraise-up`. No framework or build step; deployed on Vercel from GitHub main (`vercel.json` for URLs and caching, `.vercelignore` keeps working docs out of the deployment).
- Homepage sections (image-led, few words): full-bleed hero photograph with the promise and one "Get in touch" action; Selected work as product cards with real screenshots (Subskim wide, then Admirals, Mechanism Ventures, MetaMap, Fundraise Up), each with role, years and one proof figure; colleague quotes; How I work (three short principles linked to Admirals chapters); Contact. Header: name plus Work, About, CV, Contact.
- AI projects are presented as standalone projects without employer attribution.
- Public contact email: rysych@gmail.com.
- Work format: remote preferred; open to relocation to Singapore, Dubai, London, or the US.
- CV: ATS-friendly PDF at `/Pavel_Rysych_CV.pdf` (short link `/cv`), linked from the nav on every page and from Contact. Its HTML source lives outside the repo in `../CV/`.
- Visual direction (2026-10-04): the user asked for California-startup minimalism on a light page, with Stripe / Airbnb, Apple and designer personal sites (rauno.me, emilkowal.ski, paco.me) as references. No divider lines, no glows, no accent hue.

## Brand Commitments

- Name: **Pavel Rysych**; title: **Product Design Leader**.
- Core promise: "I build products and the design teams behind them."
- Real portrait of Pavel (misty mountain landscape: green hills, black jacket, round glasses) is part of his identity on the site; it is the full-bleed hero photograph (landscape mirrored so he stands on the right; the person himself is shown in his real orientation, at his request).
- Personal side: photography and filmmaking — attention, detail, storytelling.
- Voice: first person, calm, specific, factual; claims tied to concrete episodes. No inflated titles or unverified attributions.

## Evidence on Hand

- Case studies with real artifacts in `assets/` for Admirals, Subskim, MetaMap, Fundraise Up, Mechanism (key art, product screens, walkthrough video for MetaMap).
- Confirmed metrics (user-approved for publication, 2026-09-29):
  - Admirals: customer journey improvements contributed to a two-thirds reduction in CAC; web redesign tripled click-through rates.
  - Fundraise Up: 2.8× widget conversion.
  - Mechanism: portfolio driving $300M+ in revenue.
- Real testimonials: Yuriy Smirnov (Co-Founder & COO, Fundraise Up), Peter Byrnes (Co-Founder & CEO, Fundraise Up), Celestin Soubrier (Chief Growth Officer, MetaMap).
- Subskim: live product at https://subskim.com — conceived and built entirely by Pavel (idea, product, design, and AI-assisted implementation), confirmed 2026-09-29; AI screenshot import with user review before saving.
- Editorial source material: `portfolio-content.md`.
- Do not fabricate: additional testimonials, user counts or revenue for Subskim, team sizes beyond confirmed numbers, or results not listed above.

## Product Principles

1. Show the work, not claims: every leadership or AI statement links to a real episode or artifact.
2. Respect the reader's time: the first screen states the role and promise; proof is one scroll away.
3. Leadership and craft together: the site should show both team-level impact and hands-on product quality.
4. Honest attribution: Pavel's personal contribution is distinguished from team and company results.
5. The site itself is evidence of design quality and AI-assisted building.

## Accessibility & Inclusion

Keyboard-accessible interactions, reduced-motion support, and readable text on both desktop and mobile. Target WCAG 2.1 AA.
