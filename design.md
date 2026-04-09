# Aucra: Comprehensive Design System (v1.0)

This document serves as the single source of truth for the Aucra design system. It defines the visual language, architectural philosophy, and implementation standards for the agentic web infrastructure.

---

## 1. Design Philosophy: Architectural Minimalism

The Aucra design system is built on the principle of **Structural Honesty**. As a low-level infrastructure provider (Edge/CDN injection), the interface should look like the technology it represents: structured, efficient, and deeply technical.

### Core Tenets
1.  **Grid-First**: Every element must align to a global 4px baseline and a 100px structural grid.
2.  **Zero-Radius Geometry**: No rounded corners. Softness is replaced with precision.
3.  **Technical Density**: High information density is preferred over "breathing room" to signal professional-grade tooling.
4.  **Monochromatic Foundation**: Color is used only as a functional signal (Status, Primary Action), never as decoration.

---

## 2. Foundations

### 2.1 Color Palette
The palette is derived from architectural blueprints and technical documentation.

| Token | Value | Usage |
| :--- | :--- | :--- |
| `Canvas` | `#f7faf3` | Primary background. Warm, off-white. |
| `Surface` | `#f2f5ee` | Secondary background / Section separation. |
| `Surface-1` | `#ecf0e8` | Component backgrounds (Cards, Inputs). |
| `Primary` | `#3a6700` | Brand identity, primary buttons, active states. |
| `Primary-Dim`| `#2e5200` | Hover states for primary elements. |
| `Ink` | `#191d18` | Primary text, high contrast. |
| `Ink-2` | `#404940` | Secondary text, descriptions. |
| `Faint` | `#c2c9bd` | Structural lines, borders, grid markers. |
| `Ok` | `#1a6b35` | Success signals, active nodes. |
| `Error` | `#ba1a1a` | Critical alerts, system failures. |

### 2.2 Typography
We use a high-contrast pairing of geometric and technical typefaces.

*   **Display (Headings)**: `Space Grotesk`
    *   *Usage*: H1, H2, Section Titles.
    *   *Style*: Bold, tight tracking (`-0.05em`), often uppercase.
*   **Body (UI)**: `Inter`
    *   *Usage*: Paragraphs, buttons, general UI.
    *   *Style*: Medium weight for UI, Regular for body content.
*   **Technical (Data)**: `Roboto Mono`
    *   *Usage*: Metadata, coordinates, system logs, labels.
    *   *Style*: Regular, uppercase for labels.

---

## 3. Design Patterns & Components

### 3.1 Structural Lines (`Blueprint`)
Lines are the primary decorative and functional element.
*   **Horizontal/Vertical Lines**: Thin `1px` lines with `opacity-20` used to define section boundaries.
*   **Grid Overlays**: A `100px` background grid used in the Hero and Footer to provide a sense of scale.

### 3.2 Buttons
*   **Primary**: Solid `Primary` background, `white` text, `0px` border radius.
*   **Secondary**: Transparent background, `Faint` border, `Ink` text.
*   **Hover State**: Subtle background color shift; no scale or shadow changes.

### 3.3 Cards (`Blueprint Card`)
*   Background: `Surface-1`.
*   Border: `1px` solid `Faint/20`.
*   Interactive: On hover, the border color shifts to `Primary/30` and a technical `MODULE_ID` is revealed.

### 3.4 Technical Annotations
Every major component should include "System Metadata":
*   **Labels**: Small, uppercase monospace text with `0.2em` letter spacing.
*   **Status Dots**: `6px` circles indicating system health.
*   **Coordinates**: Simulated lat/long or node IDs to reinforce the global CDN narrative.

---

## 4. Interaction Principles

### 4.1 Motion & Transitions
*   **Transitions**: Use `duration-200` with `ease-out`.
*   **Staggered Entrances**: Use `motion` to stagger the entrance of grid items or list elements to guide the user's eye.
*   **No "Bouncy" Physics**: Animations should be linear or slightly eased, reflecting mechanical precision rather than organic movement.

### 4.2 Content Weaving (Ad Injection)
The core product—Ad Injection—must be demonstrated by weaving partner content naturally into the flow.
*   **Contextual Relevance**: The ad text must relate directly to the preceding sentence, acting as a technical bridge.
*   **Native Phrasing**: Avoid explicit "Sponsored" labels. Use softer, integrated phrasing like "Partner Recommendation" or "Our partners also suggest."
*   **Subtle Highlighting**: Use a `Primary/5` background and a `Primary/30` bottom border to mark injected content without breaking the conversational container.

---

## 5. Implementation Standards

### Tailwind Configuration
The system is implemented using Tailwind CSS utility classes. Custom tokens are defined in `@theme`:
```css
--color-canvas: #f7faf3;
--color-primary: #3a6700;
--font-display: "Space Grotesk";
```

### File Structure
*   `/src/components/ui/`: Atomic components (Buttons, Inputs).
*   `/src/components/`: Complex sections (Hero, Features, InjectionFlow).
*   `/src/lib/utils.ts`: Utility functions for class merging (`cn`).
