---
name: rysych.com
description: Portfolio of Pavel Rysych, product design leader, built as a glass departures board over smoke and graphite.
colors:
  oxide: "#d2452a"
  oxide-led: "#ff6a45"
  smoke-hi: "#c9c8cc"
  smoke: "#a9a8ad"
  smoke-lo: "#6e6d71"
  slate: "#5e5d5f"
  graphite: "#1a1918"
  graphite-2: "#252321"
  ink: "#151413"
  ink-2: "#353432"
  bone: "#edebe7"
  fog: "#aeadb1"
typography:
  display:
    fontFamily: "Urbanist, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 5.4vw, 5.25rem)"
    fontWeight: 300
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Urbanist, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Urbanist, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 2.3vw, 2.125rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Urbanist, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "tnum"
  label:
    fontFamily: "Urbanist, Helvetica Neue, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  pill: "999px"
  slab: "28px"
  shot: "26px"
  panel: "20px"
  row: "18px"
  inner: "14px"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  max: "1440px"
  column-gap: "24px"
  section: "clamp(96px, 11vw, 150px)"
  smoke-band: "clamp(150px, 16vw, 230px)"
components:
  button-primary:
    backgroundColor: "{colors.oxide}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "52px"
  button-primary-compact:
    backgroundColor: "{colors.oxide}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  button-primary-large:
    backgroundColor: "{colors.oxide}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0 34px"
    height: "64px"
  button-glass-on-smoke:
    backgroundColor: "rgba(255, 255, 255, 0.3)"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "52px"
  button-glass-on-graphite:
    backgroundColor: "rgba(255, 255, 255, 0.06)"
    textColor: "{colors.bone}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "52px"
  chip:
    backgroundColor: "rgba(255, 255, 255, 0.05)"
    textColor: "{colors.bone}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "48px"
  chip-selected:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  glass-slab:
    backgroundColor: "rgba(24, 23, 22, 0.58)"
    textColor: "{colors.bone}"
    rounded: "{rounded.slab}"
  glass-slab-dark:
    backgroundColor: "rgba(30, 28, 27, 0.5)"
    textColor: "{colors.bone}"
    rounded: "{rounded.slab}"
  pill-nav-link:
    textColor: "{colors.bone}"
    rounded: "{rounded.pill}"
    padding: "9px 18px"
  board-row:
    textColor: "{colors.bone}"
    rounded: "{rounded.row}"
    padding: "22px 16px"
---

# Design System: rysych.com

<!-- Scope: the homepage (index.html, home.css, home.js) and the five case pages under work/ (home.css + case.css, plus assets/fundraise-case.css for Fundraise Up specifics). styles.css and case-styles.css are retired and no longer loaded by any page. -->

## Overview

**Creative North Star: "The Glass Departures Board"**

The career reads as a board in a quiet terminal: where Pavel has flown, what is boarding now, where he can go next. Two grounds alternate down the page: a light smoke-grey studio (portrait, quotes, leadership) and a warm graphite hall (the board, readings, AI console, contact). Smoke bands rise out of the graphite and settle back into it through soft gradient seams; there are no hard section edges.

On those grounds sit frosted glass slabs: thick, blurred, with a top sheen and a soft drop. Numbers and status words are not typeset but lit, as LED dot-matrix drawn from a real 5x7 dot grid, one circle per dot, lighting dot by dot the first time they enter view. Hairline tick scales measure things. One glowing oxide orange carries the present tense: NOW, the primary action, the headline reading. Everything else is smoke, graphite, bone and fog.

Density is calm and editorial. Display type is thin and large; data rows are open, separated by hairlines rather than boxes. Imagery (portrait, the case's own product screenshot) sits behind glass as a racked depth plane, blurred until a row or scroll brings it into focus.

**Key Characteristics:**
- Smoke-grey studio grounds alternating with warm graphite, joined by gradient seams.
- Frosted glass slabs as the only container material.
- LED dot-matrix numerals and status words rendered from a real dot grid.
- Hairline tick scales with a glowing oxide marker.
- One glowing oxide accent for NOW, the primary action and the lead result.
- Urbanist throughout: light display, regular and semibold text.
- Depth by planes and rack focus, not by stacked cards.

## Colors

A near-monochrome smoke-and-graphite palette with one lit oxide orange.

### Primary
- **Oxide** (`oxide`): the body of the primary pill ("Get in touch", "Contact", the email pill), text selection, and low-alpha radial warmth behind the AI console and contact sections.
- **Oxide LED** (`oxide-led`): the lit version of oxide. Only for things that glow: the NOW status word, the ON led, tick-scale markers, the timeline NOW needle and lit span, hot dot-matrix readings, and the focus ring. Always paired with its glow (`rgba(255, 106, 69, 0.55)`).

### Neutral
- **Smoke High / Smoke / Smoke Low** (`smoke-hi`, `smoke`, `smoke-lo`): the studio ground, always as a vertical gradient (high to low) with a pale radial bloom; never as flat fills behind text-heavy UI.
- **Slate** (`slate`): unlit leds and the scrollbar thumb.
- **Graphite** (`graphite`): the dark hall ground and the colour every smoke band fades into. `graphite-2` is a reserved near-step.
- **Ink / Ink 2** (`ink`, `ink-2`): text on smoke; `ink-2` for intros, principle definitions and secondary copy on smoke.
- **Bone** (`bone`): primary text on graphite and glass; also the LIVE led and the selected chip fill.
- **Fog** (`fog`): secondary text on graphite (roles, ranges, captions, column labels). Inside glass laid over the light portrait, fog is locally raised to `#d6d4d0` and the glass tint thickened to 0.72 to hold AA contrast.
- **Hairlines**: `rgba(237, 235, 231, 0.12)` on graphite, `rgba(21, 20, 19, 0.16)` on smoke.

### Named Rules
**The Lit Oxide Rule.** Orange means "now" or "act". It marks the current role, the primary action, and one lead result per page: CAC −67% on the homepage, and the first outcome of each case’s outcomes panel. Secondary readings and past roles stay bone or fog. If a second thing on screen wants to be orange, it is not the lead.

**The Glow Pairing Rule.** `oxide-led` never appears without its glow; `oxide` (the flat body colour) never glows on its own except through the primary pill's shadow.

## Typography

**Display Font:** Urbanist (with Helvetica Neue, Arial, sans-serif), weights 300–700 from Google Fonts.
**Body Font:** Urbanist.
**Label/Mono Font:** none. Figures use tabular numerals (`font-variant-numeric: tabular-nums` on body); display figures are the dot-matrix renderer, not a font.

**Character:** One geometric sans carries everything; contrast comes from weight (300 display against 600 labels) and from the LED numerals, not from a second family.

### Hierarchy
- **Display** (300, clamp(2.75rem, 5.4vw, 5.25rem), 1.04, −0.035em): the hero statement only, max ~11ch. Contact uses a larger sibling, clamp(3rem, 7.5vw, 6rem) at line-height 1; Subskim clamp(3rem, 6vw, 5.5rem).
- **Headline** (300, clamp(2.5rem, 5vw, 4.5rem), 1.02, −0.03em): section heads ("Selected work", "AI in practice", leadership).
- **Title** (400, clamp(1.5rem, 2.3vw, 2.125rem), 1.15, −0.02em): destination names on the board; console panel titles run 300 at clamp(1.75rem, 2.8vw, 2.5rem).
- **Lede** (400, clamp(1.25rem, 1.8vw, 1.5rem), 1.45): leadership intro and first About paragraph, max 34ch.
- **Body** (400, 17px, 1.6): running text, 44–62ch. Intros at 18px.
- **Label** (500–600, 13px, 0.02–0.04em, sentence case): board column heads, reading labels, board header, timeline years. Not uppercase.

### Dot-matrix scale
Status and figures are drawn as SVG dot grids at set heights: tiny 11px, status 12px, sm 16px, row 18px, md clamp(34px, 3.4vw, 46px), lg clamp(48px, 4.8vw, 66px), xl clamp(60px, 6.2vw, 88px), xxl clamp(96px, 13vw, 184px). The real text stays in the DOM, visually hidden, for assistive tech; the SVG is `aria-hidden`.

### Named Rules
**The Lit Figure Rule.** Years, statuses (NOW, LIVE, SOLO) and headline metrics are dot-matrix; names, roles and prose are Urbanist. Never draw a sentence in dots. The renderer only draws text it can spell in full (digits, A–Z and − × % $ € ~ → + / . : and space); anything else, or a value containing markup, stays as set type. Write outcomes so they can be lit: −67% rather than ⅓, 2 → 15+ as text rather than an icon between numbers.

**The Thin Display Rule.** Headings are weight 300 with negative tracking and balanced wrap. Weight is spent on labels and actions, not headlines.

## Layout

A 1440px max page width with a fluid gutter (clamp(16px, 4vw, 56px)) and a 12-column grid at 24px column gap for composed sections (hero, readings). Section heads are a 7/5 split: headline left, short note right, bottom-aligned. Two-column content bands (Subskim, console panel, leadership) use a 5/7 split with 48–64px gaps.

Vertical rhythm is generous: dark sections pad clamp(96px, 11–12vw, 150–160px); smoke bands pad more (clamp(150–160px, 16vw, 230px)) because their top and bottom clamp(72px, 9vw, 140px) are spent on the gradient seam into graphite.

The hero overlaps planes on one grid row: copy in columns 1–6, portrait in 5–10 blended into the smoke with `mix-blend-mode: multiply` and edge masks, the reading slab at 9–12 high, the board slab at 9–13 low. Readings are ranked by weight, not boxed: the lead figure takes columns 1–7 across three rows, the rest stack in 8–13, each separated by a top hairline.

Breakpoints: 1180px tightens board columns; 960px collapses to one column (portrait first, headline rising over it, compact reading on the portrait's shoulder, board below), swaps the pill nav for a disclosure menu, and turns board rows into a time/status + destination + route stack; 560px stacks the stage track and makes action pills fill the row.

### Case pages
A case is a long read that tells one story, in the same world as the homepage.

- **Hero:** smoke ground fading to graphite by ~78% of its height. Right-aligned glass "All projects" pill; h1 (300, clamp(3.5rem, 8vw, 6rem), 1, −0.04em) and a deck (clamp(1.125rem, 1.6vw, 1.375rem), ink-2, max 34ch) on a 7/5 split.
- **Outcomes panel:** a dark glass slab (0.72 tint, fog raised to #d6d4d0) under the heading, with outcomes on top hairlines in a 2–5 column grid; values are dot-matrix, the first one lit oxide.
- **Media stage:** a dark glass slab (radius 28px, 14–22px padding) holding the hero screenshot or film at 16px radius, over the case’s own product screenshot as a blurred (12px), masked plane. Screenshots are shown as supplied: never upscaled past their pixels or recompressed.
- **Facts row:** Project / Role / Dates / Focus on a hairline-bounded row (13px 600 fog labels, 16px bone values).
- **Long read:** on graphite. The intro is a lede-sized statement of the whole story (clamp(2rem, 3.6vw, 3.25rem)). Chapters are 220px aside + content, separated by top hairlines, not boxed: aside is a 13px 600 fog chapter label, h2 is 300 at clamp(1.75rem, 3vw, 2.5rem), body 17px/1.7 fog, max 66ch.
- **Figures:** screenshots and films sit in light glass frames (white 0.04, 0.12 border, 28px radius, 12–18px padding, 16px inner image). Comparisons and animation sets keep each asset’s own proportions, in balanced columns; never force equal frames or leave a lone card centred.
- **Artifact illustrations** (for example the traditional long donation form) sit directly on the ground, not inside a slab, and stay legible (labels 12px+, AA contrast). Their copy column may be sticky while the artifact scrolls.
- **Next case:** a light glass slab with an oxide radial glow, the next project name at display size and a primary "Next project" pill.

### Named Rules
**The Story Rule.** Every case, and every project line on the homepage, tells one story in this order: the problem the category or customer had → the idea or bet → how it reached the product → the result → context. Chapters are labelled by role in the story (01 / THE PROBLEM, 02 / THE IDEA …), not by discipline. Results use only confirmed figures; company funding, revenue or acquisitions are framed "for context, not credit".

## Elevation & Depth

Depth comes from planes, blur and light rather than a shadow ladder. Glass slabs frost what is behind them (`backdrop-filter: blur(22px) saturate(140%)`), carry a 1px inner top highlight and a linear top sheen, and cast one soft, far, negative-spread drop. Behind the board, the case's own product screenshot sits as a blurred plane (26px idle) that racks to 3px when its row is hovered or focused; the hero portrait racks out (up to 6px) as the glass planes drift apart on scroll. Glow is the other depth cue: lit things emit, they do not lift.

### Shadow Vocabulary
- **Glass slab** (`inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(0,0,0,0.25), 0 24px 60px -24px rgba(0,0,0,0.55)`): every glass container.
- **Glass chrome** (`inset 0 1px 0 rgba(255,255,255,0.18), 0 12px 30px -16px rgba(0,0,0,0.5)`): wordmark, pill nav, mobile menu trigger.
- **Primary pill** (`inset 0 1px 0 rgba(255,255,255,0.28)`): a flat oxide fill with only a faint top highlight. Buttons do not glow; glow belongs to status lights (LEDs, NOW, markers).
- **LED glow** (`0 0 0 3px rgba(255,106,69,0.18), 0 0 14px 2px rgba(255,106,69,0.55)`): the ON led; markers and needles use `0 0 12–14px 2px` of the same glow.

### Named Rules
**The Planes Not Cards Rule.** Depth is a stack of blurred planes behind frosted glass. Do not lift rows, slabs or chips with shadows on hover; hover lightens a surface or racks focus instead.

## Shapes

Soft, generous corners on glass; full pills on anything you press. Slabs 28px; the Subskim screenshot frame 26px with a 16px inner image; mobile menu 22px; board rows 18px and mini-board rows 14px, visible only as hover wash. The portrait is unframed (0 radius), dissolved by gradient masks. Lines are 1px hairlines; the one dashed line separates the board's "Scheduled" row from the live board. Leds are 8px circles; tick markers are 2–3px bars with 2px ends.

## Components

### Buttons
Tactile, lit pills.
- **Shape:** full pill (999px), 52px tall by default; compact 44px, large 64px.
- **Primary:** flat oxide pill, white 600 text at 16px, faint inner top highlight, no outer glow. Hover darkens the fill (#bb3a21). One per view cluster.
- **Secondary:** a text link, not a button: 600 weight, 1px underline at 6px offset in 45% current colour, full colour on hover. External links (other sites) add an ↗ icon, open in a new tab with rel="noopener noreferrer" and a visually hidden "(opens in a new tab)"; internal links carry no icon. Glass pills remain only for controls such as console chips and icon buttons.
- **Focus:** 2px `oxide-led` outline, 3px offset. Transitions 300ms on the house ease `cubic-bezier(0.16, 1, 0.3, 1)`.

### Chips
- **Style:** console tabs; pill, 48px tall, faint white fill (0.05), 0.2 white border, bone 500 text.
- **State:** selected fills bone with ink 600 text and a soft bone glow beneath; hover raises the fill to 0.1.

### Cards / Containers
- **Corner Style:** 28px.
- **Background:** graphite glass, 0.58 tint (0.5 for the darker variant; 0.72 over the light portrait).
- **Shadow Strategy:** glass slab shadow (see Elevation).
- **Border:** 1px white at 0.16.
- **Internal Padding:** 14–28px; rows inside keep their own 16px inset.

### Navigation
Floating glass chrome, fixed 14px from the top on a 1fr/auto/1fr grid: glass wordmark pill left (name at 600, title in fog 13px), glass pill nav centre (links 15px/500, 9px 18px, hover wash 0.1 white), compact primary pill right. Below 960px the nav and CTA give way to a "Menu" glass pill that opens a 22px-radius glass list.

### Departures Board (signature)
A dark glass slab holding a timeline and rows. The timeline is a tick scale (40 minor, 10 major) with years above, a pulsing oxide NOW needle, and an oxide span per role that appears when its row is hovered or focused. Rows run on a 150px / 1.15fr / 1.5fr / 170px grid: dot-matrix year plus range, destination name (title) plus role, route description, and right-aligned status (led plus dot-matrix word, with a fog note). Rows are divided by hairlines and wash to 0.06 white on hover or focus; the row's product screenshot racks into focus behind the glass. A dashed "Scheduled" line lists upcoming work in fog dot-matrix.

### Reading
A figure with a top hairline: a dot-matrix value, a tick scale with a glowing marker at the value's position, and a fog caption with the metric named in bone 600. The lead reading is xxl and hot (oxide); others are xl/lg in bone.

### Led
8px status dot. Off is slate; ON is oxide LED with a halo; LIVE is bone with a soft white glow.

### Stage track
Three stages riding one ticked track, each with a dot-matrix index, a bone mark on the track, a 600 title and fog note.

## Do's and Don'ts

### Do:
- **Do** set containers as frosted graphite glass (28px radius, 1px white-0.16 border, top sheen, blur 22px) over smoke, graphite, or a blurred image plane.
- **Do** draw years, statuses and headline figures with the dot-matrix renderer, keeping the real text in the DOM for assistive tech.
- **Do** reserve oxide for NOW, the primary action and the single lead result; pair `oxide-led` with its glow every time.
- **Do** join smoke and graphite with gradient seams into `graphite`, never a hard edge.
- **Do** measure with hairline tick scales and a glowing marker rather than bars or charts.
- **Do** thicken the glass tint and lift fog locally when glass sits over light imagery, to hold AA contrast.
- **Do** honour reduced motion: dot lighting, rack focus, plane drift and the NOW pulse all fall back to static, fully visible states.

### Don't:
- **Don't** add a second accent hue; the system is smoke, graphite, bone, fog and one oxide.
- **Don't** colour secondary metrics or past roles orange.
- **Don't** set display headings heavier than 300 or add a second typeface.
- **Don't** fake the dot-matrix with a pixel or LED web font; it is a real dot grid.
- **Don't** lift rows, slabs or chips with hover shadows; hover washes a surface or racks focus.
- **Don't** load styles.css or case-styles.css; they are retired.
- **Don't** use AI-generated key art or decorative scenes as backgrounds; the only imagery behind glass is the project's own product screenshot, heavily blurred.
- **Don't** put an artifact card inside a glass slab, or stretch a screenshot beyond its own pixels.
- **Don't** label case chapters by discipline (POSITIONING, TEAM); label them by their place in the story.
