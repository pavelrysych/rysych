---
name: rysych.com
description: Portfolio of Pavel Rysych, Product Design Leader. A brutalist borehole - every project is dug from the surface everyone sees down to the one decision underneath, then proved.
colors:
  ink: "#000000"
  paper: "#ffffff"
  heat-1: "#ffefe9"
  heat-2: "#ffd0bf"
  signal: "#ff3b00"
  mute: "#4a4a4a"
  mute-dark: "#c4c4c4"
  rule-dark: "#5a5a5a"
  stage: "#ececec"
typography:
  display:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(48px, 8.6vw, 148px)"
    fontWeight: 860
    lineHeight: 0.86
    letterSpacing: "-0.006em"
    fontVariation: "'wdth' 62"
  core:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(40px, 5.7vw, 92px)"
    fontWeight: 860
    lineHeight: 0.9
    letterSpacing: "-0.012em"
    fontVariation: "'wdth' 62"
  index-name:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(38px, 4.9vw, 80px)"
    fontWeight: 850
    lineHeight: 0.88
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 62"
  headline:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(36px, 4.6vw, 76px)"
    fontWeight: 850
    lineHeight: 0.92
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 62"
  why-2:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(27px, 2.95vw, 46px)"
    fontWeight: 640
    lineHeight: 1.08
    letterSpacing: "-0.016em"
    fontVariation: "'wdth' 84"
  why-1:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(22px, 2.15vw, 33px)"
    fontWeight: 520
    lineHeight: 1.3
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 96"
  chapter:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(30px, 3.1vw, 50px)"
    fontWeight: 760
    lineHeight: 1
    letterSpacing: "-0.012em"
    fontVariation: "'wdth' 78"
  body:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(16px, 1.15vw, 18px)"
    fontWeight: 400
    lineHeight: 1.45
  reading:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(17px, 1.2vw, 19px)"
    fontWeight: 400
    lineHeight: 1.55
  figure:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "clamp(40px, 4.6vw, 76px)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "tnum"
  depth-numeral:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "clamp(20px, 1.9vw, 30px)"
    fontWeight: 500
    lineHeight: 1
    fontFeature: "tnum"
  label:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.2
  control:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.2
rounded:
  none: "0px"
spacing:
  gut: "clamp(16px, 2.4vw, 36px)"
  ruler: "clamp(96px, 9.4vw, 148px)"
  ruler-case: "clamp(112px, 10.5vw, 168px)"
  inset: "clamp(16px, 2vw, 32px)"
  row-y: "clamp(28px, 3.6vw, 56px)"
  stratum-y: "clamp(16px, 2vw, 26px)"
components:
  button-outline:
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-signal:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  stratum-surface:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  stratum-why-1:
    backgroundColor: "{colors.heat-1}"
    textColor: "{colors.ink}"
    typography: "{typography.why-1}"
  stratum-why-2:
    backgroundColor: "{colors.heat-2}"
    textColor: "{colors.ink}"
    typography: "{typography.why-2}"
  core-band:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    typography: "{typography.core}"
  proof-band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.figure}"
  index-row:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.index-name}"
  index-row-open:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  index-thumb:
    rounded: "{rounded.none}"
    width: "clamp(64px, 6.6vw, 104px)"
---

# Design System: rysych.com

## Overview

**Creative North Star: "The Borehole"**

Meaning over surface. Every project is drilled vertically, like a core sample: the surface everyone sees (the product, at full size), two layers of "Why?", the one sentence at the core, and the proof underneath. A mono depth column on the left logs each layer (0, −1, −2, −3 Core, = Proof), and the page reads as a ruled log rather than a gallery. The deeper the layer, the hotter its ground and the larger, heavier and narrower its type, so the eye is pulled down to the core without being told to look there.

The world is brutalist and exact: pure black ink on white paper, one signal red, 1px ink rules between every stratum, square corners everywhere, no shadows, no gradients for atmosphere. Density is high but ordered; every band sits on the same left ruler. Pavel himself is dug the same way on the homepage hero, down to "Make the important decision obvious." The product visuals are the one place colour and motion are allowed to be lavish: real screens and looping product films, framed in hard 1px boxes.

**Key Characteristics:**
- A left depth column (the ruler) on every band, with a mono numeral and label.
- A heat scale from paper to signal red that encodes depth, then a black proof band.
- Archivo variable for words, narrowing from 96% to 62% width as depth increases; Geist Mono for depths, labels, controls and figures.
- Full-width 1px ink rules between strata; square corners; flat surfaces.
- Live product films as the Surface of each project, large, and as small thumbnails on closed rows.

## Colors

Two absolutes and one signal, with a heat ramp between paper and signal that means depth and nothing else.

### Primary
- **Signal Red** (signal): the core. The ground of every Core band, the open-row "Close" toggle, the CV link, pressed/active states (paused motion toggle, copied email, "Dig all" when everything is open), the "Live" tag, `::selection`, and highlights inside the How I work sums. Type on it is always black (5.9:1); never small white type on signal.

### Secondary
- **Heat One** (heat-1): the −1 "Why?" stratum ground and its key swatch.
- **Heat Two** (heat-2): the −2 "Why?" stratum ground; muted text on it uses Mute (6.3:1).

### Neutral
- **Ink** (ink): all type on paper, every rule and frame, and the ground of the Proof band, the open index row, the contact bedrock, the case title band, table heads and the mobile menu slab.
- **Paper** (paper): page ground, Surface stratum, and type on ink.
- **Mute** (mute): secondary text on paper and heat grounds (intro, figure captions, fact labels, quote roles; 8.9:1 on paper).
- **Mute Dark** (mute-dark): secondary text on ink (proof descriptions, context lines, footer; 12:1).
- **Rule Dark** (rule-dark): hairlines inside ink bands (proof figure grid, the seam between two open rows, mobile menu rows).
- **Stage** (stage): the light stage a black phone stands on, and the ground behind case plates.

Film stages may carry the product's own background colour inline (black, #0d0d0d, #d2d7db) so a film never letterboxes on the wrong ground; these are per-visual values, not palette tokens.

### Named Rules
**The Heat Means Depth Rule.** Paper, heat-1, heat-2, signal, ink are a sequence: Surface, −1, −2, Core, Proof. Never use a heat colour as decoration outside that order.

**The Black On Red Rule.** Signal red always carries ink type. White type never sits on signal.

## Typography

**Display Font:** Archivo variable (wght 100–900, wdth 62–125%), self-hosted, with system-ui fallback
**Label/Mono Font:** Geist Mono variable, self-hosted, with ui-monospace fallback

**Character:** A variable grotesque that compresses as it sinks, against a neutral mono that logs depths and numbers like an instrument readout.

### Hierarchy
- **Display** (860, clamp(48px, 8.6vw, 148px), 0.86, 62% width, uppercase): the contact headline on the bedrock band.
- **Core** (860, clamp(40px, 5.7vw, 92px), 0.9, 62% width, max 14em; long cores 17em at clamp(32px, 4.2vw, 68px)): the one sentence on the red band; the 404 title uses the same setting.
- **Index name** (850, clamp(38px, 4.9vw, 80px), 0.88, 62% width, uppercase): project names in the work index and the case title band (clamp(52px, 7vw, 96px)).
- **Headline** (850, clamp(36px, 4.6vw, 76px), 0.92, 62% width, uppercase): homepage section heads.
- **Why −2** (640, clamp(27px, 2.95vw, 46px), 1.08, 84% width, 31ch) and **Why −1** (520, clamp(22px, 2.15vw, 33px), 1.3, 96% width, 32ch): the two layers above the core.
- **Promise** (650, clamp(32px, 3.9vw, 60px), 1, 80% width): the hero's −1 line.
- **Chapter** (760, clamp(30px, 3.1vw, 50px), 1, 78% width): case-page chapter headings; the opening lead statement is lighter (560, clamp(24px, 2.4vw, 38px), 92% width).
- **Body** (400, clamp(16px, 1.15vw, 18px), 1.45); **Reading** (clamp(17px, 1.2vw, 19px), 1.55, max 64ch) in case chapters; quotes 450 at clamp(18px, 1.45vw, 23px).
- **Figure** (Geist Mono 600, clamp(40px, 4.6vw, 76px), 1, tabular): proof numbers; row figures clamp(22px, 2vw, 32px).
- **Depth numeral** (Geist Mono 500, clamp(20px, 1.9vw, 30px), tabular) over a **Label** (Geist Mono 12px, uppercase).
- **Control** (Geist Mono 600, 13px, uppercase): buttons, nav, captions, tags, figure numbers ("fig. 3").

### Named Rules
**The Sinking Type Rule.** Deeper layers get larger, heavier and narrower: width steps 96% → 84% → 62% as weight steps 520 → 640 → 860. Do not set a shallow layer heavier than a deeper one.

**The Mono Is The Instrument Rule.** Depths, labels, controls, years and figures are Geist Mono; sentences are Archivo. Never set a sentence in mono or a figure in Archivo.

## Layout

The page is a stack of full-width strata. Each stratum is a two-column grid: the ruler (clamp(96px, 9.4vw, 148px) on the homepage, clamp(112px, 10.5vw, 168px) on case pages, wide enough for "2021–2023" or "The proposition") holding the depth label with a 1px right rule, then the body with an inset (clamp(16px, 2vw, 32px)) and the page gutter (clamp(16px, 2.4vw, 36px)) on the right. Every stratum ends in a 1px rule. Depth numerals and labels are sticky while their stratum scrolls; the numeral reserves the label's room so they never overlap.

The header aligns to the same ruler: name over the depth column, title where the words start, links on the right. The hero is a two-column grid with Pavel's portrait (clamp(220px, 23vw, 360px)) spanning the Surface and −1 strata, and the Core band running full width beneath. The work index rows are a single grid: years in the ruler, a 4:3 live thumbnail, the name, role, headline figure, and the Why? toggle. Surface strata put the visual first and large (16:9 by default; 24rem portrait and 34rem square variants), copy at 19rem beside it. Case pages run the long read as a ruled log: one continuous vertical rule at the ruler edge, every chapter, plate and table a stratum with its label in the depth column (fig. counters on plates); chapter headings float left at 40% beside the text above 1100px.

Breakpoints: 1100px (header title drops; row regrids to two lines), 860px (surfaces, quotes and principles go to one column), 760px (nav becomes the Menu box), 640px (the ruler collapses to 0, depth labels sit inline above their stratum, rows stack beside the thumbnail). No horizontal scroll from 320px.

### Named Rules
**The One Ruler Rule.** Every band, the header and the footer align to the same depth column. Content never starts left of the ruler on desktop.

## Elevation & Depth

Flat. Depth is literal and vertical: it is expressed by order, the heat scale and type weight, never by shadow or blur. The only inset box-shadow in the system is a 1px rule-dark hairline that separates two open (black) rows; it is a rule, not elevation. The Mechanism venture cards lay a 30% black scrim over the film so the white logo reads.

### Named Rules
**The No Shadow Rule.** Nothing floats. Separation is a 1px ink rule or a change of ground.

## Shapes

Square everywhere (0px radius): frames, buttons, tags, thumbnails, swatches, tables, play controls. Borders are 1px ink for frames and rules, 1.5px currentColor for controls, 4px ink above the How I work total. The single rounded form is the real phone bezel around the Subskim screen (black, clamp(24px, 3.2vw, 46px) corner), because it depicts a physical device.

## Components

### Buttons
- **Shape:** square (0px), 1.5px currentColor border, min-height 44px, 0 16px padding, Geist Mono 13px 600 uppercase.
- **Outline:** inverts on hover and focus (ground becomes the current text colour, text becomes paper); on ink bands the border is paper and the hover is paper ground with ink text.
- **Signal:** red ground, ink text (CV download, active toggles); hovers to paper.
- **Links:** underlined 1px, 0.18em offset; hover thickens to 3px. Focus is a 3px currentColor outline at 3px offset, signal red where the ground is ink-on-ink.

### Borehole Row (signature)
- **Closed:** a full-width row on paper: years in the ruler, a small 4:3 live film thumbnail in a 1px frame, the uppercase compressed name, role, one headline figure with a mono caption, and a boxed "Why?" with a down arrow.
- **Hover / Focus / Open:** the row turns ink with paper text; open, the toggle turns signal red, reads "Close" and the arrow rotates 180deg. The first project is open by default; "Dig all five" opens every row and turns red.
- **Dig:** opening reveals the strata one under another (clip from the top plus 12px drop, 480ms, 90ms stagger, `cubic-bezier(0.16, 1, 0.3, 1)`); skipped under reduced motion. Without script every row is already dug; closed rows use `hidden="until-found"` so find-in-page still opens them.

### Surface Stratum
The product visual, large, in a 1px ink frame with a mono "fig. n" caption beneath. Films are muted looping lazy-autoplay videos with posters on a stage of their own colour. Subskim pairs the real phone screen on the light stage with the live-site film and a red "Live" tag.

### Why Strata
Heat-1 and heat-2 grounds, one sentence each at the Why −1 / Why −2 settings.

### Core Band
Signal ground, the one core sentence at the Core setting, then the verbatim source quote with the core phrase marked in an ink box with paper text, and a "My part" line with a boxed mono tag.

### Proof Band
Ink ground: a ruled grid of figures (mono number first, uppercase mono term, mute-dark description), an optional context line with a mono lead ("For context, not credit"), and the outline "Read the … case" button.

### Header and Footer
Header: mono 13px uppercase, 1px bottom rule, name over the ruler, links right; below 760px a boxed "Menu" opens an ink slab of 52px rows. A boxed motion toggle stops every looping film and turns signal red while paused. Footer: mono 13px on the ink bedrock, aligned past the ruler, with a 1px rule-dark top rule.

### Case Page
An ink title band (years in the ruler, name at index-name scale, boxed "All projects"), a facts strip ruled by 1px gaps over ink, the borehole, then the ruled log. Chapter labels sit sticky in the depth column; tables have an ink head row and hard rules; customer quotes sit in a 1px-gap ruled grid. The page ends with the next project's closed index row, which links to its case.

### How I Work
The five cores stacked as a sum ("+" in the depth column, each core linked to its project, the word "decision" marked in signal) closing on a 4px rule and a "= Core" red band; then three principles in a ruled three-column strip.

## Do's and Don'ts

### Do:
- **Do** put every new band on the depth column with a mono numeral and label, and end it with a 1px ink rule.
- **Do** follow the order Surface (paper) → −1 (heat-1) → −2 (heat-2) → Core (signal) → Proof (ink).
- **Do** show the product visual first and large in the Surface, framed 1px ink, with a "fig. n" mono caption.
- **Do** use the site.js lazy-autoplay film markup (muted, loop, playsinline, poster, data-quiet) for any looping film, so the motion toggle and reduced motion govern it.
- **Do** keep type on signal red black, and secondary text mute on paper/heat and mute-dark on ink.
- **Do** quote the core and proof copy verbatim from the case; figures are set in Geist Mono with tabular numerals.

### Don't:
- **Don't** round corners, add shadows, glows or decorative gradients; the phone bezel is the only curve.
- **Don't** use heat-1, heat-2 or signal outside their depth roles, or introduce a second accent hue.
- **Don't** set white text on signal red.
- **Don't** place a mono kicker above a heading; labels live in the depth column (on phones, inline at the top of their stratum).
- **Don't** replace live product films with old stills where a film exists.
