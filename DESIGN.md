---
name: rysych.com
description: Portfolio of Pavel Rysych, Product Design Leader. A quiet white product page where the work and the numbers do the talking.
colors:
  ink: "#1d1d1f"
  ink-hover: "#3a3a3c"
  ink-soft: "#424245"
  muted: "#636366"
  dot: "#d2d2d7"
  tile: "#f5f5f7"
  tile-pressed: "#ebebef"
  paper: "#ffffff"
typography:
  display:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 4.6vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.04em"
  display-closing:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 6.4vw, 5.25rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 4.2vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.625rem, 2.6vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  figure:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 3.2vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.04em"
    fontFeature: "tnum"
  lede:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1.5vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "-0.003em"
    fontFeature: "tnum"
  body-long:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  pill: "999px"
  frame: "28px"
  tile: "24px"
  media: "20px"
  screen: "16px"
spacing:
  max: "1200px"
  gutter: "clamp(20px, 5vw, 64px)"
  section: "clamp(88px, 10vw, 144px)"
  header: "64px"
  row-gap: "28px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.ink-hover}"
    textColor: "{colors.paper}"
  button-primary-large:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "52px"
  button-primary-compact:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "36px"
  button-secondary:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.tile-pressed}"
    textColor: "{colors.ink}"
  icon-button:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "52px"
  icon-button-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  nav-link:
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.pill}"
    padding: "7px 12px"
  nav-link-hover:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.ink}"
  tab-track:
    backgroundColor: "{colors.tile}"
    rounded: "{rounded.pill}"
    padding: "4px"
  tab:
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "40px"
  tab-selected:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  work-row:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "28px 24px"
  work-row-hover:
    backgroundColor: "{colors.tile}"
  tile:
    backgroundColor: "{colors.tile}"
    rounded: "{rounded.tile}"
    padding: "clamp(24px, 3vw, 36px)"
  media-tile:
    backgroundColor: "{colors.tile}"
    rounded: "{rounded.frame}"
    padding: "clamp(10px, 1.6vw, 20px)"
---

# Design System: rysych.com

## Overview

**Creative North Star: "The Quiet Launch Page"**

A white page written like a Californian product launch, by a designer. The work and its numbers carry the page; the system steps back so they can. Everything is ink on white, with one light-grey tile colour that holds product moments, and a single black pill that tells the reader what to do next. References the user named: Stripe and Airbnb, Apple product pages, and designer personal sites (rauno.me, emilkowal.ski, paco.me).

Density is generous and calm: wide sections (88 to 144px apart), a 1200px measure, headings set tight and heavy in Geist, body set soft in grey. Depth comes from tone (white against light grey), never from lines, glows or glass. Motion is a single quiet entrance on the first screen and small 200ms state changes everywhere else.

This system replaces the retired "Glass Departures Board" world entirely (graphite, smoke, oxide LED, Urbanist, glass panels). The first viewport is a full-bleed photograph of Pavel on a misty hillside, mirrored so he stands on the right, with the promise set in white over the hills, the way OpenAI opens its pages.

**Key Characteristics:**
- Pure white ground, near-black ink, one reading grey, one light-grey tile; no accent hue.
- Geist variable at 600 with tight negative tracking for every heading; 400 body at 17px with tabular figures.
- Pills for every action: black for the one primary action, light grey for secondary.
- Underlined text links; a ↗ arrow appears only when the link leaves the site.
- Product screens sit sharp inside light-grey tiles; on phones they run edge to edge.
- No divider lines, no glows, no glass panels, no eyebrows.

## Colors

A monochrome Apple-light palette: ink, a softened ink, one grey, and two steps of light-grey tile on white.

### Primary
- **Graphite Ink** (`ink`): All headings, the primary black pill, the selected carousel dot, the focus ring and text selection. It is the only "colour" that asks for action.
- **Pressed Graphite** (`ink-hover`): The black pill's hover state only (the email pill, the next-case pill and the primary pill share it).

### Neutral
- **Soft Ink** (`ink-soft`): Long-read paragraphs, work-row stories, About copy, table cells and header nav links; prose that should read as text, not as headline.
- **Reading Grey** (`muted`): The one grey. Ledes under headings, roles, years, figure labels, captions, footer, inactive tabs.
- **Dot Grey** (`dot`): Inactive carousel dots and the scrollbar thumb. Never used as a line.
- **Product Tile** (`tile`): The light-grey surface for product moments: media tiles, the outcomes tile, the next-case tile, the Subskim band, secondary pills, the tab track, stage numerals and work-row hover.
- **Pressed Tile** (`tile-pressed`): Hover on secondary pills, the video placeholder, and the oversized 404 numeral.
- **Paper** (`paper`): The page, the text on black pills, the selected tab, and the mobile menu sheet.

### Named Rules
**The No-Accent Rule.** There is no brand hue. Emphasis comes from weight, size and the black pill. A coloured link, badge or highlight is off-system.

**The Tone-Not-Line Rule.** Surfaces are separated by tone (white against `tile`), never by a border, hairline or divider. If two things need separating, add space or put one in a tile.

## Typography

**Display Font:** Geist variable, self-hosted (`/assets/fonts/geist-variable.woff2`, weights 100 to 900, OFL), with `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif`
**Body Font:** Geist (same file)

**Character:** One neutral grotesk doing everything, Apple-style: heavy, tightly tracked headlines over light, slightly loose body. Geist is a sanctioned exception to the overused-font detector, recorded in `.impeccable/config.json`.

### Hierarchy
- **Display** (600, `clamp(2.75rem, 5vw, 4.5rem)`, 1.02): The hero promise only, white on the photograph, max 11em so it always sets in three lines ("and the design teams" never breaks; on phones the size follows the viewport width).
- **Display Closing** (600, `clamp(2.75rem, 6.4vw, 5.25rem)`, 1.0): The contact sign-off, max 11ch. The largest type on the site is the invitation to write.
- **Headline** (600, `clamp(2.25rem, 4.2vw, 3.5rem)`, 1.08): Homepage section titles and About. The case-page deck sentence uses the same voice at `clamp(2rem, 4.2vw, 3.5rem)` / 1.1, max 24ch.
- **Title** (600, `clamp(1.625rem, 2.6vw, 2.25rem)`, 1.15): Case chapter headings, case quotes title, AI panel headings.
- **Figure** (600, `clamp(2rem, 3.2vw, 2.75rem)`, 1.05, tabular): Proof numbers in the case outcomes tile. Work rows carry the same voice at 30px.
- **Lede** (400, `clamp(1.125rem, 1.5vw, 1.3125rem)`, 1.5, Reading Grey): Hero intro, section intros, contact lede.
- **Body** (400, 17px, 1.55; 16px under 560px): Default text. Tabular figures on everywhere.
- **Body Long** (400, 18px, 1.65, Soft Ink, max 64ch): Case-study reading paragraphs; 17px on phones.
- **Label** (400 to 600, 13 to 15px, Reading Grey): Years, roles, fact terms, captions, footer. Sentence case, never uppercase, never letter-spaced.

### Named Rules
**The Heavy-Head Rule.** Every heading is Geist 600 with negative tracking (-0.02em to -0.045em, tighter as it grows). Light display weights belong to the retired world.

**The No-Kicker Rule.** Nothing sits above a heading: no eyebrows, kickers, slash labels or chapter tags. The case pages' chapter labels exist in markup and are hidden.

## Layout

A centred 1200px measure with a fluid gutter (`clamp(20px, 5vw, 64px)`), sections separated by space alone (`clamp(88px, 10vw, 144px)`). A sticky 64px header (60px under 900px) of frosted white sits over everything.

- **Hero:** a full-bleed photograph (`hero-hills`, mirrored) filling the first viewport (`max(560px, min(100svh, 1040px))`), the header floating transparent over its sky until the page scrolls. Copy sits bottom-left on the page measure, over the hills, with a low dark scrim (bottom 70% of the height) behind it; the person stands on the right. On phones the photo is positioned on the person (`74% 30%`) and the copy sits over the lower half. A row of five grey company logos (50% opacity, full on hover) sits below, each linking to its case.
- **Quotes:** three in a row on desktop; at 760px and under they become a one-at-a-time carousel with arrows and dots, rotating every 7s until a person picks one.
- **Work list:** five grid rows (years, name and role, story, proof figure, view-case control) at 28px gaps. Under 1080px the control drops under the story; under 900px each row becomes a standing grey tile; under 560px the figure stacks.
- **AI section:** a segmented tab track over a two-column panel (copy left, numbered stages right); one column under 900px.
- **Principles:** three columns, one column under 1080px.
- **Case pages:** hero (back link, logo, deck sentence, outcomes tile), a full-width media tile, a facts row (four columns, two under 1050px), then the long read: an indented reading column (200px empty lead column, 150px under 1050px, none under 760px) with a 64ch measure.
- **Breakpoints:** 1080, 900, 760, 560px (case pages also break at 1050px).

### Named Rules
**The Space-Is-The-Divider Rule.** Sections and groups are separated by the section rhythm and gaps alone. No rules, no hairlines, no alternating stripes beyond the single grey Subskim band.

## Elevation & Depth

Flat and tonal. Depth is white against light grey; shadows are rare, soft and only where something genuinely floats above the page: the frosted header once the page scrolls, the open mobile menu sheet, the selected tab lifting out of its track, and the play button over a film. No glows and no hard offset shadows.

### Shadow Vocabulary
- **Header lift** (`box-shadow: 0 8px 24px -20px rgba(0, 0, 0, 0.35)`): appears on the sticky header after 8px of scroll, over a `rgba(255,255,255,0.8)` backdrop with `saturate(180%) blur(20px)`.
- **Menu sheet** (`box-shadow: 0 24px 48px -16px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.06)`): the phone menu.
- **Selected segment** (`box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.04)`): the selected tab in a segmented control.
- **Play button** (`box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.45)`): the black play disc over a film poster.

### Named Rules
**The Float-Only Rule.** A shadow means the thing floats over content (header, menu, selected segment, play control). Cards and tiles never carry shadows.

## Shapes

Soft, continuous, Apple-like rounding; everything interactive is a full pill or circle.

- **Pill** (999px): every button, nav link, tab, tab track, carousel arrow (circle), stage numeral (circle), social and copy buttons (circles).
- **Frame** (28px): the grey media tiles that hold screens and films, the next-case tile and the Fundraise Up form tile.
- **Tile** (24px): work rows, the outcomes tile, the audience table, Mechanism product images.
- **Media** (20px): the Subskim screenshot (top corners only, sitting on the band's bottom edge), the value-shift strip, the mobile menu sheet.
- **Screen** (16px): screenshots and films inside a media tile. Inner radius is always smaller than its tile so the corners nest.
- **Borders:** none. Focus is a 2px ink outline with a 3px offset.
- **Phones (560px and under):** case screenshots and films drop their tile and radius and run edge to edge; captions keep the gutter.

## Components

### Buttons
Quiet and certain: a black pill says "this", a grey pill says "also".
- **Shape:** full pill (999px), 48px tall (36px compact in the header, 52px large for hero, Subskim, contact and next-case).
- **Primary:** Graphite Ink on white text, 500 weight, `0 22px` padding. One per view.
- **Hover / Active:** Pressed Graphite on hover (pointer devices only); `scale(0.98)` on press; 200ms on the system ease `cubic-bezier(0.22, 1, 0.36, 1)`.
- **Secondary:** Product Tile with ink text, Pressed Tile on hover (the Download CV pill).
- **Icon buttons:** 52px circles (44px for carousel arrows) in Product Tile that turn black with white icon on hover: copy-email, LinkedIn, Instagram, Threads. The copy button swaps its icon for a check for 2s and announces the result.
- **Email pill:** the address itself is the large black pill, with the copy circle beside it.

### Text Links
- **Style:** ink, 500, underlined 1px at 5px offset with the underline at 30% ink; underline goes full ink on hover.
- **External:** a 16px ↗ arrow follows the label and nudges up-right on hover; internal links carry no icon. The case-page back link is grey with a ← mask and no underline until hover.

### Navigation
- **Desktop:** wordmark (name 600 plus role in Reading Grey) left; pill nav links in Soft Ink at 14px/500 that get a Product Tile pill on hover; a compact black Contact pill right.
- **Phones (900px and under):** a grey "Menu" pill that turns black and reads "Close" when open, dropping a white 20px sheet of 17px links with the menu-sheet shadow; Escape or an outside tap closes it.

### Segmented Tabs
- **Track:** Product Tile pill with 4px padding, horizontally scrollable without a scrollbar.
- **Tab:** 40px pill, Reading Grey 15px/500; selected tab is white with ink text and the selected-segment shadow. Panels fade-rise in over 500ms.

### Cards / Containers
- **Corner Style:** 24px for content tiles, 28px for media tiles.
- **Background:** Product Tile on white; never white-on-white with a border.
- **Shadow Strategy:** none (see Elevation).
- **Internal Padding:** `clamp(24px, 3vw, 36px)` for content tiles; `clamp(10px, 1.6vw, 20px)` for media tiles so the screen fills the tile.
- **Outcomes tile:** a grid of 2 to 5 proof figures (Figure type) with term and detail below each.

### Work Row (signature)
Five rows that read as a ledger of proof, not five links.
- **At rest:** white, transparent rows in a grid with a 24px radius.
- **Hover:** the whole row washes Product Tile; the view-case control's 40px grey circle grows into a white pill labelled "View case", and turns black with white text when the control itself is hovered.
- **Only the control navigates.** The row is not a link; the "View case" control is the only way in, with a visually hidden case name for screen readers.
- **Phones (900px and under):** every row is a standing grey tile and the control is always a labelled white pill.

### Hero Photograph (signature)
Pavel on a green hillside in mountain fog, mirrored, served as WebP at 800/1280/2000w with a JPEG fallback. The header (ink on the light sky) floats over it; the promise is white Geist 600 with a soft text shadow; the primary action is a white pill with ink text and the secondary a white underlined link. It settles in once on load (fade with a 1.04 to 1 scale over 1.6s) and stays still under reduced motion.

### AI Stages
Ordered steps in a list with 32px grey circle numerals (14px/600). The only numbered device on the site, used because the order of the steps is the information.

## Do's and Don'ts

### Do:
- **Do** set every heading in Geist 600 with negative tracking, and every supporting line in Reading Grey.
- **Do** give each view exactly one black pill as the primary action; make every other action a grey pill or an underlined text link.
- **Do** put product screens and films inside a Product Tile (28px) with a nested 16px screen radius, and let them run edge to edge on phones.
- **Do** show testimonials three in a row on desktop and as a carousel on phones.
- **Do** keep work rows non-linking; only the "View case" control navigates (arrow at rest, labelled pill on hover or focus, always labelled on phones).
- **Do** use numbers beside items only where order is information, as in the AI stages.
- **Do** keep state changes at 200ms on `cubic-bezier(0.22, 1, 0.36, 1)` and wrap hover styles in `(hover: hover)`.

### Don't:
- **Don't** draw divider lines, borders or hairlines anywhere; separate with space or tone.
- **Don't** add glows, glass panels, gradients or coloured light; the retired departures-board world is gone. The frosted sticky header is the one translucent surface.
- **Don't** introduce an accent hue; the palette is ink, one grey and light-grey tiles.
- **Don't** put eyebrows, kickers, slash labels or chapter tags above headings.
- **Don't** add a ↗ icon to internal links; it marks leaving the site.
- **Don't** put shadows on cards or tiles; shadows only mark things that float.
- **Don't** use light display weights, uppercase tracked labels or a second typeface.
