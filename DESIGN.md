---
name: rysych.com
description: Portfolio of Pavel Rysych, Product Design Leader. A quiet white product page where images of the work and its numbers do the talking.
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
    fontSize: "clamp(2.75rem, 5vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  section-title:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 2.6vw, 2.25rem)"
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
  bento-figure:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.045em"
  item-title:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  quote:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1.5vw, 1.3125rem)"
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: "-0.015em"
  lede:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 1.3vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.55
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
  bento-gap: "16px"
  bento-gap-narrow: "12px"
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
  button-on-photo:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "52px"
  button-secondary:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "52px"
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
    typography: "{typography.label}"
    padding: "8px 0"
  nav-link-hover:
    textColor: "{colors.ink}"
  bento-tile:
    backgroundColor: "{colors.tile}"
    rounded: "{rounded.tile}"
    padding: "20px 22px"
  bento-tile-hover:
    backgroundColor: "{colors.tile-pressed}"
  bento-tile-title:
    textColor: "{colors.ink}"
    typography: "{typography.item-title}"
  bento-tile-sub:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
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

A white page written like a Californian product launch, by a designer. Images of the work carry the page, the way Apple and Airbnb let a product picture say what a paragraph would; the numbers sit quietly beside them, and the system steps back so both can. Everything is ink on white, with one light-grey tile colour that holds product images, and a single primary pill that tells the reader what to do next. References the user named: Stripe and Airbnb, Apple product pages, and designer personal sites (rauno.me, emilkowal.ski, paco.me).

Density is generous and calm: wide sections (88 to 144px apart), a 1200px measure, one quiet section-title size, and almost no copy under headings. Headings are set tight and heavy in Geist; supporting lines are grey. Depth comes from tone (white against light grey), never from lines, glows or glass. Motion is a single quiet entrance on the first screen, a slow film scale on tile hover, and small 200ms state changes everywhere else.

The first viewport is a photograph of Pavel, set as one large rounded card inset from the window, on a misty hillside, with the landscape mirrored so he stands on the right and the person kept in his real orientation. The three-line promise, one grey-white line of subtitle and one white "Get in touch" pill sit over the hills; the header floats transparent over the sky. This system replaced the retired "Glass Departures Board" world entirely (graphite, smoke, oxide LED, Urbanist, glass panels).

**Key Characteristics:**
- Pure white ground, near-black ink, one reading grey, one light-grey tile; no accent hue.
- Images instead of words: each project is its own small bento of its film and its own proof, not rows of text.
- Geist variable at 600 with tight negative tracking for every heading; 400 body at 17px with tabular figures.
- Pills for actions: one primary pill per view, light grey for secondary; header links are plain text.
- Underlined text links; a ↗ arrow appears only when the link leaves the site.
- No divider lines, no glows, no glass panels, no eyebrows.

## Colors

A monochrome Apple-light palette: ink, a softened ink, one grey, and two steps of light-grey tile on white.

### Primary
- **Graphite Ink** (`ink`): All headings, tile names and proof figures, the black email and next-case pills, the selected carousel dot, the focus ring and text selection. It is the only "colour" that asks for action.
- **Pressed Graphite** (`ink-hover`): The black pill's hover state only.

### Neutral
- **Soft Ink** (`ink-soft`): Long-read paragraphs, table cells and header nav links; text that should read as text, not as headline.
- **Reading Grey** (`muted`): The one grey. Section ledes, tile roles and years, proof labels, the resting tile arrow, How I work sentences, quote attributions, captions, footer.
- **Dot Grey** (`dot`): Inactive carousel dots and the scrollbar thumb. Never used as a line.
- **Product Tile** (`tile`): The light-grey surface for product moments: every bento tile, case media tiles, the outcomes tile, the next-case tile, secondary pills, the Menu pill, carousel arrows and contact icon buttons.
- **Pressed Tile** (`tile-pressed`): Hover on secondary pills, the video placeholder, and the oversized 404 numeral.
- **Paper** (`paper`): The page, the text on black pills, the white hero pill, and the mobile menu sheet.

### Named Rules
**The No-Accent Rule.** There is no brand hue. Emphasis comes from weight, size and the primary pill. A coloured link, badge or highlight is off-system. Colour on the page belongs to the photographs and product images, never to the interface.

**The Tone-Not-Line Rule.** Surfaces are separated by tone (white against `tile`), never by a border, hairline or divider. If two things need separating, add space or put one in a tile.

## Typography

**Display Font:** Geist variable, self-hosted (`/assets/fonts/geist-variable.woff2`, weights 100 to 900, OFL), with `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif`
**Body Font:** Geist (same file)

**Character:** One neutral grotesk doing everything, Apple-style: heavy, tightly tracked headlines over light, slightly loose body. Geist is a sanctioned exception to the overused-font detector, recorded in `.impeccable/config.json`.

### Hierarchy
- **Display** (400, `clamp(2.75rem, 5vw, 4.5rem)`, 1.04, −0.035em): The hero promise only, white on the photograph with a soft text shadow, max 11em so it always sets in three lines ("and the design teams" never breaks; under 900px the size follows the viewport width).
- **Headline** (600, `clamp(2rem, 4.2vw, 3.5rem)`, 1.1): The case-page deck sentence, max 24ch.
- **Section Title** (600, `clamp(1.75rem, 2.6vw, 2.25rem)`, -0.035em): Every homepage section head, the contact sign-off included. One quiet size; no section head is louder than another.
- **Title** (600, `clamp(1.625rem, 2.6vw, 2.25rem)`, 1.15): Case chapter headings and the case quotes title.
- **Figure** (600, `clamp(2rem, 3.2vw, 2.75rem)`, 1.05, tabular): Proof numbers in the case outcomes tile.
- **Item Title** (600, 19 to 20px, 1.3, -0.025em): Bento tile names (19px) and How I work item titles (20px).
- **Bento Figure** (400, `clamp(2.5rem, 5vw, 4.25rem)`, 1, -0.045em, no wrap): the proof number in a figure tile, set at the hero promise's weight; `clamp(1.75rem, 9vw, 2.5rem)` on phones, where figures always sit in pairs.
- **Quote** (500, `clamp(1.125rem, 1.5vw, 1.3125rem)`, 1.45): Testimonial text; 21px in the phone carousel.
- **Lede** (400, `clamp(1.0625rem, 1.3vw, 1.1875rem)`, Reading Grey): The single grey line under How I work (max 52ch) and Contact (max 56ch). Nowhere else on the homepage.
- **Body** (400, 17px, 1.55; 16px under 560px): Default text. Tabular figures on everywhere.
- **Body Long** (400, 18px, 1.65, Soft Ink, max 64ch): Case-study reading paragraphs; 17px on phones.
- **Label** (400 to 600, 13 to 15px, Reading Grey): Roles and years, proof labels, fact terms, captions, footer. Sentence case, never uppercase, never letter-spaced.

### Named Rules
**The Heavy-Head Rule.** Every heading is Geist 600 with negative tracking (-0.02em to -0.04em, tighter as it grows). Light display weights belong to the retired world.

**The Bare-Head Rule.** Nothing sits above a heading (no eyebrows, kickers, slash labels or chapter tags), and on the homepage nothing sits under one either, except a single grey lede line in How I work and Contact. The case pages' chapter labels exist in markup and are hidden.

## Layout

A centred 1200px measure with a fluid gutter (`clamp(20px, 5vw, 64px)`), sections separated by space alone (`clamp(88px, 10vw, 144px)`). A sticky 64px header (60px under 900px) sits over everything.

- **Homepage order:** hero, Selected work, quotes, How I work (`#about`), contact with the footer.
- **Hero:** a photograph card (`hero-hills`, landscape mirrored, person unmirrored), inset from the window by `clamp(8px, 1.1vw, 16px)` with a `clamp(20px, 2.2vw, 32px)` radius, filling the rest of the first viewport under the white header (`max(520px, min(100svh - header - inset, 1000px))`). The promise and one pill sit bottom-left on the page measure, over the hills, with a low dark scrim (bottom 70% of the height) behind them; the person stands on the right. Under 900px the photo is positioned on the person (`74% 30%`); under 560px the pill stretches across the measure.
- **Selected work:** five project blocks in reverse-chronological order (Subskim, Admirals, Mechanism Ventures, MetaMap, Fundraise Up, the same chain as the cases' "Next project"), `clamp(40px, 5vw, 64px)` apart, with no heading, line or tone change between them. Each block is a 6-column × 2-row bento with a 16px gap; rows are `minmax(calc(var(--bw) * 0.175 + 33px), auto)`, so a 4-column film's media box stays near 1.9:1 at every desktop width. The film is always first and on the left, so project names form a column down the left edge; the project's own proof sits on the right. Admirals, MetaMap and Fundraise Up: film 4 columns + two stacked 2-column figures. Subskim: film + one tall screen tile (it has no numbers). Mechanism: a narrow 2-column portrait film + two wide 4-column figures. Under 900px each block is two columns (12px gap): the film full width at its own aspect (Subskim 2:1, MetaMap 16:9, the rest 16:10), figures paired below; Mechanism keeps its film in column 1 at 4:5 beside stacked figures; the Subskim screen tile becomes a full-width row with the screen on the right. Under 560px Mechanism's film goes full width at 1:1 with its figures paired below.
- **Quotes:** three in a row on desktop; at 760px and under they become a one-at-a-time carousel with arrows and dots, rotating every 7s until a person picks one. The section title is visually hidden.
- **How I work:** section title, one grey lede, then three items in three columns; one column (max 560px) under 1080px.
- **Contact:** section title, one grey lede, then the email pill, copy button, Download CV pill and social circles in one wrapping row; on phones the email pill and CV pill each take the full width.
- **Case pages:** hero (back link, logo, deck sentence, outcomes tile), a full-width media tile, a facts row (four columns, two under 1050px), then the long read: an indented reading column (200px empty lead column, 150px under 1050px, none under 760px) with a 64ch measure.
- **Breakpoints:** 1080, 900, 760, 560px (case pages also break at 1050px).

### Named Rules
**The Space-Is-The-Divider Rule.** Sections and groups are separated by the section rhythm and gaps alone. No rules, no hairlines, no alternating stripes or bands.

**The Picture-First Rule.** Where the page can show the work, it shows it: a product image does the job a paragraph used to. Text beside an image is limited to a name, a role and years, and one or two proof figures, each in its own tile with at most one grey line of scope.

## Elevation & Depth

Flat and tonal. Depth is white against light grey; shadows are rare, soft and only where something genuinely floats above the page: the frosted header once the page scrolls, the open mobile menu sheet, and the play button over a film. Over the hero photograph, a low dark scrim and a soft text shadow keep white type legible. No glows and no hard offset shadows.

### Shadow Vocabulary
- **Header lift** (`box-shadow: 0 8px 24px -20px rgba(0, 0, 0, 0.35)`): appears on the sticky header after 8px of scroll, over a `rgba(255,255,255,0.8)` backdrop with `saturate(180%) blur(20px)`. On the homepage the header has neither until it scrolls.
- **Menu sheet** (`box-shadow: 0 24px 48px -16px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.06)`): the phone menu.
- **Play button** (`box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.45)`): the black play disc over a film poster.
- **Promise shadow** (`text-shadow: 0 1px 24px rgba(0, 0, 0, 0.18)`): the hero promise over the photograph only.

### Named Rules
**The Float-Only Rule.** A shadow means the thing floats over content (header, menu, play control). Cards and tiles never carry shadows; a project tile lifts by scaling its film, a figure tile by stepping to Pressed Tile.

## Shapes

Soft, continuous, Apple-like rounding; everything interactive is a full pill or circle.

- **Pill** (999px): every button, the Menu pill, carousel arrows (circles), social and copy buttons (circles).
- **Frame** (28px): the grey media tiles that hold case screens and films, the next-case tile and the Fundraise Up form tile; also the focus outline around a bento tile.
- **Tile** (24px): every bento tile, the outcomes tile, the audience table, the Mechanism venture cards.
- **Media** (20px): the value-shift strip and the mobile menu sheet.
- **Screen** (16px): screenshots and films inside a media tile. Inner radius is always smaller than its tile so the corners nest.
- **Borders:** none. Focus is a 2px ink outline with a 3px offset (4px around a bento tile; white over the hero photo).
- **Phones (560px and under):** case screenshots and films drop their tile and radius and run edge to edge; captions keep the gutter. Bento tiles keep their tile and radius.

**The Continuous Corner Rule.** Large rounded blocks (hero card, bento tiles, case tiles, media frames, venture cards, the phone menu) use Apple-style continuous corners: a superellipse (n=4) 9-slice mask inlined in home.css as `--squircle`, applied with `-webkit-mask-box-image` at about 1.8x the radius it replaces (46px for 24px tiles, 30px for screens inside tiles, 36-58px for the hero). Browsers without mask-box-image (Firefox) keep the plain radius. Pills and circles stay true capsules and circles. Edge-to-edge media on phones drop the mask.

## Components

### Buttons
Quiet and certain: the primary pill says "this", a grey pill says "also".
- **Shape:** full pill (999px), 48px tall, 52px large for the hero, contact and next-case actions.
- **Primary:** Graphite Ink with white text, 500 weight, `0 22px` padding (`0 26px` large). One per view.
- **On the photograph:** the hero's primary pill inverts to Paper with ink text (hover `#e8e8ed`); it is the only action in the first viewport.
- **Hover / Active:** Pressed Graphite on hover (pointer devices only); `scale(0.98)` on press; 200ms on the system ease `cubic-bezier(0.22, 1, 0.36, 1)`.
- **Secondary:** Product Tile with ink text, Pressed Tile on hover (the Download CV pill).
- **Icon buttons:** 52px circles (44px for carousel arrows) in Product Tile that turn black with white icon on hover: copy-email, LinkedIn, Instagram, Threads. The copy button swaps its icon for a check for 2s and announces the result.
- **Email pill:** the address itself is the large black pill, with the copy circle beside it.

### Text Links
- **Style:** ink, 500, underlined 1px at 5px offset with the underline at 30% ink; underline goes full ink on hover. In How I work they sit at 15px under each item.
- **External:** a 16px ↗ arrow follows the label and nudges up-right on hover; internal links carry no icon. The case-page back link is grey with a ← mask and no underline until hover.

### Navigation
- **Desktop:** the name alone (16px/600, -0.02em) left; four plain text links right (Work, About, CV, Contact) in Soft Ink at 14px/500, `clamp(20px, 2.4vw, 32px)` apart, turning ink on hover. No pill, no button, no subtitle. The same header on every page.
- **Homepage:** the same white header as every page; the hero card starts below it.
- **Phones (900px and under):** a grey "Menu" pill that turns black and reads "Close" when open, dropping a white 20px sheet of 17px links with the menu-sheet shadow; Escape or an outside tap closes it.

### Bento Tiles (signature)
The work, shown rather than described: every tile in a block belongs to that one project. Three kinds of Product Tile (24px, continuous corners):
- **Project tile:** a head row (`20px 22px 0`) with the name and a small arrow over "role · years" in Reading Grey, and an optional white tag pill on the right (only Subskim: "Live, built solo with AI"); the film fills the rest of the tile edge to edge, 16px below the head, each with its own focal point (`--pos`). The name is the block's h3.
- **Figure tile:** one proof number from the case's Key outcomes (Bento Figure) at the top; at the bottom its label (15px/600) with the arrow kept on the last word, and an optional grey note (14px, 13px on phones) only where the number needs its scope or cause, verbatim from the case. A visually hidden " · Project" keeps the link text meaningful. It links to the case, whose hero holds Key outcomes.
- **Screen tile (Subskim):** the label "Import, then review" and its grey note over the real phone screen (`subskim-mobile-720.webp`, max 340px, 16px screen corners, black placeholder while it loads), inset 22px and running 32px past the tile's bottom edge; it links to `/work/subskim/#import`.
- **No quote tiles:** the testimonials section directly after the work is the only place for colleague voices.
- **Link:** each project and figure tile is one link; there is no separate control.
- **Hover:** a project tile's film scales to 1.03 over 900ms; a figure tile steps to Pressed Tile; the grey arrow turns ink and nudges 3px right over 250ms. Pointer devices only.
- **Focus:** the 2px ink outline sits 4px outside the tile.
- **Phones (560px and under):** head padding 18px, tags hidden, figure padding 18px.

### How I Work Items
Three short items: a 20px title, one or two grey 16px sentences (max 34ch), and an underlined link into the relevant chapter of a case. No icons, no numbers, no tiles.

### Cards / Containers
- **Corner Style:** 24px for content tiles, 28px for media tiles.
- **Background:** Product Tile on white; never white-on-white with a border.
- **Shadow Strategy:** none (see Elevation).
- **Internal Padding:** `clamp(24px, 3vw, 36px)` for content tiles; `clamp(10px, 1.6vw, 20px)` for media tiles so the screen fills the tile.
- **Outcomes tile:** a grid of 2 to 5 proof figures (Figure type) with term and detail below each.

### Company strip
Under the hero card, the five company logos in one row (justified on desktop; at 760px and under a slow 26s marquee with faded edges, which falls back to a centred wrapping row under reduced motion), grey at 50% opacity (Mechanism 80% for its hairline mark), each scaled to one optical size and linking to its case; full opacity on hover.

### Card previews
Every project tile previews as a short silent loop (10–30s, H.264, 0.25–1.1 MB) with a first-frame poster: Admirals the live site, MetaMap the second half of the Mati film, Mechanism a 640x1000 2x2 of the venture films with their white logos (cropped to its narrow tile on desktop, 4:5 on tablets, 1:1 on phones), Fundraise Up the three checkout animations on lavender. They load and play only near the viewport, stay on the poster under reduced motion, and never show controls (`data-quiet`), since the whole tile is a link. Subskim plays a 14s scroll through subskim.com (hero, calendar, trials, Skim, screenshot import, apps).

### Venture Card (Mechanism case)
Each Mechanism venture as mechanism.com shows it: its looping film (lazy, muted, plays in view, poster under reduced motion) filling a 5:4 tile at 24px radius, a 30% black veil, and the venture's white logo centred at about half the width. The homepage Mechanism tile plays a tall 2x2 collage of the same four films (`tile-mechanism.mp4`).

### Hero Photograph (signature)
Pavel on a green hillside in mountain fog: the landscape is mirrored, the person is cut out and flipped back in place so he keeps his real orientation. Served as WebP at 800/1280/2000w with a JPEG fallback, preloaded; while it loads the stage shows the photo's own sky-to-hills tones. The header (ink on the light sky) floats over it; the promise is white Display type; the one action is the white pill. It settles in once on load (fade with a 1.04 to 1 scale over 1.6s, copy rising 14px over 900ms) and stays still under reduced motion.

## Do's and Don'ts

### Do:
- **Do** set every heading in Geist 600 with negative tracking, and every supporting line in Reading Grey.
- **Do** give each view exactly one primary pill (black on white, white on the photograph); make every other action a grey pill or an underlined text link.
- **Do** show each project as its own bento block: its film first with name, role and years, then only its own proof figures; every tile is a single link into that case.
- **Do** use the one section-title size (`clamp(1.75rem, 2.6vw, 2.25rem)`) for every homepage section head.
- **Do** put case screens and films inside a Product Tile (28px) with a nested 16px screen radius, and let them run edge to edge on phones.
- **Do** show testimonials three in a row on desktop and as a carousel on phones.
- **Do** keep state changes at 200ms on `cubic-bezier(0.22, 1, 0.36, 1)` and wrap hover styles in `(hover: hover)`.

### Don't:
- **Don't** draw divider lines, borders or hairlines anywhere; separate with space or tone.
- **Don't** add glows, glass panels, gradients or coloured light; the retired departures-board world is gone. The frosted sticky header is the one translucent surface.
- **Don't** introduce an accent hue; the palette is ink, one grey and light-grey tiles.
- **Don't** put eyebrows, kickers, slash labels or chapter tags above headings, or intro paragraphs under homepage section heads beyond the one-line ledes.
- **Don't** describe in a paragraph what an image of the work can show.
- **Don't** make header links into pills or buttons; they are plain text.
- **Don't** add a ↗ icon to internal links; it marks leaving the site.
- **Don't** put shadows on cards or tiles; shadows only mark things that float.
- **Don't** use light display weights, uppercase tracked labels or a second typeface.
