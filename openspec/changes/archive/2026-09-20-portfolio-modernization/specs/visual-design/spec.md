## ADDED Requirements

### Requirement: Color palette preserved

The visual system SHALL maintain the current color palette:

- Background: `#00001c` (very dark navy — current value in Theme.ts)
- Primary text: `#80dbd9` (teal)
- Secondary text: `#D7E5EC` (light blue-gray)
- Accent gradient: `linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%)`

#### Scenario: Colors match after redesign

- **WHEN** the app renders after visual changes
- **THEN** background is `#00001c`, primary text is `#80dbd9`, secondary text is `#D7E5EC`

### Requirement: Card backgrounds use borders instead of gradients

Skill cards and Project cards SHALL use `background: transparent` with `border: 1px solid rgba(128, 219, 217, 0.15)`. The accent gradient SHALL be reserved for technology chips and interactive CTA buttons only.

#### Scenario: Skill card renders without gradient background

- **WHEN** the Skills section renders
- **THEN** each skill card has transparent background with subtle teal border, no gradient fill

#### Scenario: Project card renders without gradient background

- **WHEN** the Projects section renders
- **THEN** each project card has transparent background with subtle teal border; technology chips retain the accent gradient

### Requirement: Skill cards have no star rating

The Skill component SHALL display only: icon (40×40) and skill name text. The `rating` prop, `Rating` styled component, and all star indicators SHALL be removed.

#### Scenario: Skill card shows icon and name only

- **WHEN** the Skills section renders
- **THEN** each card shows only the technology icon and name, no star indicators

### Requirement: Project card information hierarchy

Project cards SHALL display in this order:

1. Project title with external link icon
2. Project description text
3. Technology chips row

#### Scenario: Project card order

- **WHEN** a Project card renders
- **THEN** description text appears above the technology chips row

### Requirement: Unified typography

All text elements SHALL use `Montserrat` as the sole font family. `Tinos` SHALL be removed entirely. Hierarchy via weight and size only:

- Section titles / name: Montserrat 700, ~2rem+
- Subtitles / card titles: Montserrat 600, 1.125rem
- Body text: Montserrat 400, 1rem
- Muted labels (office, nickname): Montserrat 400, 1.1rem or smaller

#### Scenario: No Tinos font renders

- **WHEN** the page loads
- **THEN** no element uses font-family Tinos; all text uses Montserrat

### Requirement: Presentation section information hierarchy

The Presentation section SHALL display in this visual priority order:

1. Full name — Montserrat 700, ~2.5rem, highest visual weight
2. Job title (office) — Montserrat 400, 1.1rem, color `#D7E5EC`
3. Bio/description — body text
4. Nickname — smallest, color `#D7E5EC`, prefixed with `@`

#### Scenario: Name is most prominent element

- **WHEN** the Presentation section renders
- **THEN** the full name has the largest font size and weight of all personal info elements

### Requirement: Dividers are subtle

Section dividers SHALL use `background: rgba(128, 219, 217, 0.3)` replacing the full-opacity gradient. Height remains `0.15rem`.

#### Scenario: Dividers render with reduced visual weight

- **WHEN** any section divider renders
- **THEN** it uses a 30%-opacity teal color, not a full-saturation green-to-cyan gradient

### Requirement: Experiences section consistent with About

The Experiences section SHALL use the same visual structure as About: vertical divider accent + description text per item. Multiple experience items SHALL have consistent spacing between them.

#### Scenario: Experiences renders multiple items

- **WHEN** the Experiences section renders
- **THEN** each experience item shows a vertical teal divider on the left and description text on the right, with equal spacing between items

#### Scenario: Experiences key prop

- **WHEN** the experiences list maps over items
- **THEN** each rendered item has a unique `key` prop (no React warnings in console)
