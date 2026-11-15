# OWASP VulnerableApp Website

Landing page for [OWASP VulnerableApp](https://github.com/SasanLabs/VulnerableApp), a platform of intentionally vulnerable labs for testing and benchmarking SAST and DAST security scanners.

Repository: https://github.com/SasanLabs/Owasp-VulnerableApp-Website

## Features

- Dark and light themes, with a toggle that remembers your choice and follows the system theme on first visit
- Responsive layouts for desktop, tablet and mobile
- Sections: hero, architecture, key features, vulnerability categories, get started, use cases and footer
- Hover animations on buttons and cards, a swipeable category list and copy-to-clipboard command boxes
- Decorative background glows matching the Figma design

## Tech stack

HTML5, CSS3 (custom properties, grid, flexbox) and vanilla JavaScript. No framework, dependencies or build step. The Inter font loads from Google Fonts.

## Getting started

**Requirements:** a modern browser (Chrome, Edge, Firefox or Safari). Python 3 or Node.js is optional, only for a local server.

```bash
# 1. Clone the repository
git clone https://github.com/SasanLabs/Owasp-VulnerableApp-Website.git
cd Owasp-VulnerableApp-Website

# 2. Run a local server (or simply open index.html in your browser)
python3 -m http.server 8000
# or: npx serve .
```

Open http://localhost:8000. In VS Code you can also use the Live Server extension.

## Project structure

```
├── index.html      # Page markup and inline SVG icons
├── styles.css      # Styling, theme variables and responsive rules
├── script.js       # Interactivity
└── assets/
    └── owasp.png   # OWASP logo (black, inverted to white in dark mode)
```

Keep this structure, because files are loaded by relative path.

## How it works

### Themes

Colors are CSS variables at the top of `styles.css`. `:root` holds the dark theme and `[data-theme=light]` overrides it, so components use one set of rules for both. A small script in the `<head>` of `index.html` sets the theme before the page paints, to avoid a flash of the wrong theme.

| Variable | Purpose |
| --- | --- |
| `--bg`, `--nav`, `--foot` | Page, nav and footer backgrounds |
| `--g1`, `--g2` | Orange gradient for headings and brand text |
| `--head`, `--txt`, `--body`, `--sub`, `--muted` | Text colors, strongest to softest |
| `--gh`, `--gv`, `--gr`, `--gb` | Background glow colors |

### Responsive layout

| Screen width | Changes |
| --- | --- |
| Above 1180px | Desktop layout from the Figma frames |
| 1180px and below | Nav collapses into a hamburger menu, footer stacks |
| 900px and below | Get started and use cases become one column |
| 640px and below | Compact mobile layout with full-width buttons and swipeable cards |

### JavaScript (`script.js`)

- **Theme toggle** and **mobile menu**
- **Architecture arrow:** scrolls the lab cards sideways
- **Category cards:** rendered from the `D` array into `#cat`
- **Copy buttons:** any element with `data-copy` copies its text and shows "Copied!"

## Customizing

- **Add a category card:** add an entry to `D` in `script.js`, then add its index to the `[0,0,1,2,2]` list that sets the card order.
- **Add an icon:** add a `<symbol id="...">` to the SVG sprite at the top of `index.html` and use it with `<use href="#id">`.
- **Change colors:** edit the variables in both `:root` and `[data-theme=light]`.
- **Edit content:** change the text and links directly in `index.html`.

## Design

Figma file: *VulnerableApp - wireframes*. file_link*.

## Known gaps

- The Java, JSP, PHP and LLM logos are placeholder tiles, and some icons are simplified. Replace them with the original Figma exports.
- The OWASP logo comes from the VulnerableApp repository, so its proportions differ slightly from Figma.
- Navigation and footer links are `#` placeholders.
- The category cards repeat the design's sample cards.

## Contributing

Issues and pull requests are welcome. Please open an issue first to discuss larger changes.
