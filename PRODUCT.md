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
- Homepage sections (the borehole: every block dug from surface to core): hero dug through Pavel himself — 0 Surface (name, title, one-line intro) and −1 Why? (the promise) beside his portrait, down to a red Core band "Make the important decision obvious."; Selected work as an index of five borehole rows (Subskim, Admirals, Mechanism Ventures, MetaMap, Fundraise Up), each with years, a small live film thumbnail, name, role and one headline figure, Subskim open by default and "Dig all five" to open the rest; an open row digs 0 Surface (the product visual, large) → −1 Why? → −2 Why? → −3 Core (the core sentence and its verbatim source, plus "My part") → = Proof (the figures and a link to the case); How I work (the five cores summed to "= Make the important decision obvious.", then three principles linked to Admirals chapters); What colleagues say (three quotes); Contact on a black band (email with copy, CV, LinkedIn, Instagram, Threads). Header: name, title, Work, How I work, Contact, email, LinkedIn, CV (PDF).
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
- Homepage proof figures (user-approved for publication, 2026-10-04; each verbatim from its case page's Key outcomes):
  - Admirals: −67% customer acquisition cost; +€400k monthly revenue from a targeted UI change.
  - Mechanism: +28% onboarding conversion (Pettable, within three months); −18% user churn through leave-intent interventions.
  - MetaMap: verification checks from 2 to 15+; a 5 + 12 design and delivery team (five designers and twelve developers).
  - Fundraise Up: ×2.8 donation conversion; ~98% donor satisfaction (CSAT).
- Added to the homepage highlights on 2026-10-04 (verbatim from the case pages; user-approved for publication, 2026-10-05):
  - Admirals: +16% first-time deposits; annual losses reduced from €10M to €1.6M (labelled "Broader business impact").
  - Mechanism: 4 products, one studio (Pettable, Learner, Top Nutrition Coaching, PrimePutt); $300M+ portfolio revenue labelled "For context, not credit".
  - MetaMap: $70M company funding, later acquired by Incode, labelled "For context, not credit".
  - Fundraise Up: 12 → 350+ company team growth (company headcount, not Pavel's result).
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
