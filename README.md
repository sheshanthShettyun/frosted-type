# Frosted Type

Virtual Keyboard Interface — Complete Design Analysis

Overview

This is a virtual on-screen keyboard interface presented within a dark, semi-transparent rounded rectangular container. The design follows a frosted glass / glassmorphism aesthetic with a clean, modern, and functional layout optimized for text input.

Container / Frame

The entire keyboard is housed within a single large rounded rectangle with generous corner radius (approximately 20-24px). The container has:

Dark background with partial transparency

Frosted glass effect — content behind the keyboard is partially visible but blurred

Subtle depth created through layered transparency

The container spans nearly the full width of the viewport, leaving minimal margins on left and right edges

No visible border or stroke — depth is created purely through the dark fill and surrounding context

Section 1: Text Input Field (Top)

At the very top of the keyboard container sits a text input display area:

Centered text reading "The bed" followed by a vertical blinking cursor (pipe character |)

Text is rendered in white, clean sans-serif font (appears to be a system font like Inter, SF Pro, or similar)

Font weight is regular/normal (not bold)

The input area has no visible border — it integrates seamlessly into the dark container

The text is horizontally centered within the container

The cursor indicates active input state — the user is currently typing

Section 2: Predictive Text Bar

Below the input field sits a predictive text / autocomplete suggestion bar containing three large pill-shaped buttons:

Layout

Three equally-sized pills arranged horizontally

Each pill is a wide, rounded rectangle (pill shape with full-radius corners on left/right ends)

They span the width of the keyboard with small gaps between them

The pills have generous internal padding

Content

Left pill: "I"

Center pill: "The"

Right pill: "I'm"

Styling

Pills have a semi-transparent, frosted glass appearance

Background is lighter than the main container — appears as a soft gray-white with transparency

Text is white or very light gray

The frosted effect creates a layered depth — suggestions sit visually above the keyboard

No visible borders on the pills

The pills appear to be interactive elements — tapping one inserts that word/phrase into the input

Typography

Text within pills is medium weight, slightly bolder than the input text

Font size is larger than the keyboard key labels but smaller than the input text

Center-aligned within each pill

Section 3: Keyboard Layout

The keyboard follows a standard QWERTY layout with 7 distinct rows. Each row is analyzed below:

Row 1: Function Keys (Top Row)

Keys (left to right): esc | F1 | F2 | F3 | F4 | F5 | F6 | F7 | F8 | F9 | F10 | F11 | F12 | prt sc | scr lk | pause

Design Characteristics:

16 keys in this row

All keys are uniform in size (square/rectangular with small corner radius)

Keys are smaller than the main letter keys below

Dark background (slightly lighter than the main container)

Light gray/white text labels

Text is lowercase for "esc", "prt sc", "scr lk", "pause" — casual styling

Function keys (F1-F12) use uppercase + number formatting

No visible gap between the container edge and the first key — row extends to edges

Keys have subtle rounded corners (approximately 4-6px)

Minimal spacing between keys — tight grid

Row 2: Number Row

Keys (left to right): ` | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0 | - | = | backspace | insert | home | pg up

Design Characteristics:

17 keys in this row

Standard number row with symbols on the left portion (backtick, numbers, minus, equals)

Backspace key is noticeably wider than regular keys (approximately 1.5-2x width)

"backspace" label is lowercase, casual styling

Right side has navigation/editing keys: insert, home, pg up

These navigation keys are smaller than the backspace key

Key sizing varies: number keys are uniform, backspace is wider, navigation keys are standard small size

Row 3: QWERTY Row

Keys (left to right): tab | q | w | e | r | t | y | u | i | o | p | [ | ] | \ | delete | end | pg dn

Design Characteristics:

17 keys in this row

Tab key is wider than letter keys (approximately 1.5x width)

Standard QWERTY letter placement

Square brackets [ and ] and backslash \ follow the letters

Delete key is wider, similar to tab width

Navigation keys (end, pg dn) on far right

All letter labels are lowercase

"tab" and "delete" labels are lowercase

Row 4: Home Row (ASDF Row)

Keys (left to right): caps | a | s | d | f | g | h | j | k | l | ; | ' | enter

Design Characteristics:

13 keys in this row

Caps lock key is wider than letter keys (approximately 1.5x width)

Enter key is significantly wider (approximately 2-2.5x width) — the widest key on the keyboard

Standard home row positioning with ASDF JKL; layout

Semicolon ; and apostrophe ' keys are standard width

All labels are lowercase

Cursor/pointer visible — a white hand cursor is positioned over the g key, indicating hover state or active interaction

The g key appears to have a slightly different visual state — possibly highlighted or pressed

Row 5: Bottom Letter Row (ZXCV Row)

Keys (left to right): shift | z | x | c | v | b | n | m | , | . | / | shift | ↑

Design Characteristics:

13 keys in this row

Two shift keys (left and right) — both are wider than letter keys (approximately 1.5-2x width)

Standard bottom row letter placement

Comma, period, and slash follow the letters

Up arrow key on the far right (right of the right shift)

Arrow key is standard small size

All letter labels are lowercase

"shift" labels are lowercase

Row 6: Bottom Control Row

Keys (left to right): ctrl | win | alt | space | alt | fn | menu | ctrl | ← | ↓ | →

Design Characteristics:

11 keys in this row

Spacebar is the longest key on the entire keyboard — spans approximately 5-6x the width of a standard key

Modifier keys (ctrl, win, alt) are standard small size

Right side mirrors left: alt, fn, menu, ctrl

Arrow keys (left, down, right) are on the far right

Arrow keys are small, uniform size

"space" label is lowercase, centered on the wide key

"win" key present (Windows key equivalent)

"fn" key for function layer access

"menu" key for context menu access

Key Design System (All Rows)

Key Styling

Each key across all rows shares consistent visual properties:

Shape: Rounded rectangle with small corner radius (approximately 4-6px)

Background: Dark gray — slightly lighter than the main container background

Text color: White or very light gray

Text alignment: Center-aligned both horizontally and vertically

Font: Clean sans-serif, consistent with the input text font

Font size: Smaller than the predictive text pills, larger than might be expected for on-screen keyboards — optimized for touch targets

No visible border on keys

No visible shadow on individual keys

Slight translucency — keys have a subtle frosted glass quality

Key Sizing

Standard letter keys: Uniform square/rectangular shape

Modifier keys (shift, caps, tab, delete, backspace, enter): Extended width, approximately 1.5-2.5x standard key width

Spacebar: Maximum width, approximately 5-6x standard key

Function keys (F1-F12): Slightly smaller than letter keys

Navigation keys (insert, home, pg up, etc.): Same size as function keys

Arrow keys: Small, uniform square size

Spacing & Grid

Horizontal spacing between keys: Consistent, tight (approximately 4-6px)

Vertical spacing between rows: Consistent (approximately 4-6px)

Row alignment: Rows are left-aligned within the container

Outer padding: Minimal padding between the outermost keys and the container edge

No stagger — keys align in a clean grid (unlike physical keyboards which have staggered rows)

Visual Effects & Interactions

Frosted Glass / Glassmorphism

The entire keyboard interface uses a frosted glass aesthetic:

Background blur effect on the container

Partial transparency allowing background to show through

Layered depth — predictive text bar sits above the keyboard, which sits above the background

No hard shadows — depth is created through transparency and blur

Hover/Active State

The white hand cursor positioned over the g key indicates:

This is a touch/click interface (not a physical keyboard)

The g key may be in a hover or pressed state

The cursor is a standard pointer/hand icon (white fill, black outline)

Color Accent

At the very bottom of the keyboard container, there is a subtle teal/cyan glow or gradient

This creates a soft accent line along the bottom edge

The glow is diffuse and atmospheric — not a hard line

It adds a touch of color to an otherwise monochromatic design

The teal color appears to be approximately #00CED1 or similar cyan tone

Typography Analysis

Font Characteristics

Typeface: Clean, modern sans-serif (likely Inter, SF Pro, or system font)

Weight variations:

Input text: Regular weight

Predictive text pills: Medium weight

Key labels: Regular/light weight

Case convention: All key labels are lowercase — a deliberate design choice for casual, friendly appearance

Text rendering: Crisp, anti-aliased, optimized for screen display

Text Hierarchy

Input text ("The bed") — Largest, most prominent

Predictive text ("I", "The", "I'm") — Medium size, medium weight

Key labels — Smallest, lightest weight

Layout & Spatial Organization

Vertical Layout (Top to Bottom)

Text input area (top, centered text)

Predictive text bar (three pill buttons)

Function keys row (F1-F12 + system keys)

Number row (numbers + symbols + backspace + navigation)

QWERTY row (letters + brackets + navigation)

Home row (letters + punctuation + enter)

Bottom letter row (letters + punctuation + shift + up arrow)

Control row (modifiers + spacebar + arrows)

Horizontal Layout

Left-aligned rows — keys start from the left edge

Right-extending modifier keys — shift, enter, backspace, spacebar extend toward the right

Navigation cluster on far right of rows 2-4 (insert, home, pg up, delete, end, pg dn)

Arrow keys clustered on far right of rows 5-6

Centered spacebar in the bottom row (between modifier keys)

Color Palette

ElementColor DescriptionContainer backgroundDark charcoal/near-black with transparencyKey backgroundsSlightly lighter dark grayKey textWhite or very light grayPredictive text pillsSemi-transparent light gray/white with frosted effectPredictive textWhiteInput textWhiteCursorWhite vertical barBottom accentTeal/cyan glowHover cursorWhite hand icon

Interaction Model

This keyboard is clearly designed for touch or pointer interaction (not physical typing):

The presence of a hand cursor confirms pointer-based input

Predictive text suggestions are tappable buttons

Large key targets suggest touch optimization

The keyboard could be part of:

A tablet/phone input method

A smart TV interface

An accessibility input tool

A virtual keyboard overlay application

Design Philosophy

The keyboard embodies several design principles:

Minimalism — Clean lines, no unnecessary decoration, restrained color palette

Glassmorphism — Frosted glass aesthetic with transparency and blur

Accessibility — Large touch targets, clear labels, high contrast text

Friendliness — Lowercase labels create casual, approachable feel

Functionality — Complete keyboard layout with all standard keys

Modernity — Contemporary design language consistent with current UI trends

Summary

This is a complete, functional virtual keyboard rendered in a dark, frosted-glass style with a predictive text system. The design prioritizes clarity, touch-friendliness, and visual elegance through consistent spacing, unified key styling, and a restrained color palette accented only by a subtle teal glow at the bottom. The entire interface sits within a single rounded container that floats above whatever content lies behind it, creating a layered, depth-rich experience.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/88783968-44d3-4f2c-8b96-a82f008e3e19).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
