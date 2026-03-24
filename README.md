# LogiFlow — Next-Gen Logistics Platform

A modern, dark-themed logistics website featuring a cinematic landing page and an interactive data dashboard. Built with plain HTML/CSS/JS and Tailwind CSS.

![Dark Dashboard](https://img.shields.io/badge/theme-dark_mode-0a0f1e) ![Tailwind CSS](https://img.shields.io/badge/tailwind-v4-06b6d4) ![Static Site](https://img.shields.io/badge/build-none_required-4ade80)

## Pages

### Landing Page (`index.html`)
- Glassmorphic navigation bar with mobile hamburger menu
- Cinematic hero section with gradient text, CTA buttons, and shipment tracking search bar
- Bento grid features section (6 cards with Lucide icons)
- Animated stat counters (triggered on scroll)
- 4-step "How It Works" flow with connecting line
- Testimonials with star ratings
- CTA section and full footer

### Dashboard (`dashboard.html`)
- Collapsible sidebar navigation
- 4 KPI cards with trend indicators
- Animated SVG world map with glowing shipping routes and city nodes
- Shipment Volume line chart (12-month data)
- Delivery Status doughnut chart
- Revenue by Region bar chart
- Recent Shipments table with status badges (Delivered, In Transit, Pending, Delayed)
- Activity feed with timestamped events

## Tech Stack

| Layer      | Technology                  |
|------------|-----------------------------|
| Markup     | HTML5                       |
| Styling    | Tailwind CSS v4 (Play CDN)  |
| Custom CSS | Glassmorphism, animations   |
| JS         | Vanilla JavaScript (ES6+)   |
| Charts     | Chart.js 4.x               |
| Icons      | Lucide Icons                |
| Fonts      | Inter (Google Fonts)        |

## Project Structure

```
logistic-app/
├── index.html            Landing page
├── dashboard.html        Dashboard page
├── css/
│   └── styles.css        Custom styles (glassmorphism, animations, badges)
├── js/
│   ├── main.js           Landing page interactivity
│   └── dashboard.js      Charts, sidebar toggle
└── assets/
    └── world-map.svg     Animated shipping routes map
```

## Getting Started

No build step required. Open `index.html` in any modern browser:

```bash
# Clone the repo
git clone https://github.com/alfredang/losgistics-app.git
cd losgistics-app

# Open in browser (macOS)
open index.html

# Open in browser (Windows)
start index.html

# Or use a local server
npx serve .
```

## Design

- **Color Palette:** Navy (#0a0f1e), Slate Grey, Cyan (#22d3ee / #06b6d4) accents
- **Style:** Glassmorphism cards, backdrop blur, neon glow effects
- **Typography:** Inter (geometric sans-serif)
- **Layout:** Bento grid, responsive breakpoints at 640px / 1024px
- **Animations:** Scroll reveal, animated counters, SVG shipping route dash animation, floating glow orbs

## License

MIT
