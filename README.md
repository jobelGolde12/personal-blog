# Personal Blog - Jobel V. Golde

A modern, production-ready personal blog application showcasing the work, skills, and journey of **Jobel V. Golde** — an IT Graduate, Web Developer, and Problem Solver from Sorsogon, Philippines.

## Overview

This personal blog is built with a premium design featuring smooth animations, dynamic content loading, and a fully responsive layout. The site serves as a professional portfolio to present academic projects, technical expertise, internship experience, and career aspirations in Information Technology.

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19 |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS 4 |
| **Routing** | React Router DOM 7 |
| **Animations** | Framer Motion 12, GSAP 3 |
| **Content** | React Markdown with syntax highlighting |
| **Icons** | Lucide React |
| **Utilities** | clsx, tailwind-merge |
| **Smooth Scroll** | Lenis |

## Features

### Pages

- **Home** — Full-screen hero section with animated gradient backgrounds, profile image, and call-to-action buttons
- **About** — Personal journey, technical skills grid with categorized expertise, strengths, and career goals
- **Projects** — Featured project showcase with technology tags and hover animations
- **Blog** — Article listing with categories, reading time estimates, and publication dates
- **Contact** — Contact form with validation, social media links, and contact information
- **404** — Animated not-found page with navigation back to home

### Key Capabilities

- **Dynamic Content** — Personal information loaded from `public/info.txt` and parsed into sections via the `useInfo()` hook
- **Lazy Loading** — All pages are code-split with React.lazy() and Suspense boundaries for optimal performance
- **Scroll Restoration** — Route changes restore scroll position automatically
- **Mobile Navigation** — Responsive hamburger menu for screens under 768px
- **Active Route Highlighting** — Animated underline indicator on the current navigation item

### Animations

- Staggered page transitions and element reveals
- Floating hero image animation
- Gradient text animations
- Card hover effects with scale and shadow transforms
- Scroll-triggered animations using Framer Motion's `whileInView`
- GPU-accelerated CSS transforms targeting 60 FPS

## Project Structure

```
personal-blog/
├── src/
│   ├── components/          # Shared UI components (Navbar, Footer)
│   ├── features/            # Feature-based folders (hero, about, blog, projects, contact)
│   ├── layouts/             # Layout wrapper with navbar and footer
│   ├── pages/               # Page components (Home, About, Blog, Projects, Contact, NotFound)
│   ├── routes/              # Route definitions with lazy loading
│   ├── services/            # Data fetching (infoService.js)
│   ├── hooks/               # Custom hooks (useInfo.js)
│   ├── utils/               # Utility functions (cn.js)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   ├── images/me.jpg        # Profile image
│   └── info.txt             # Dynamic content file (markdown format)
├── docs/                    # Comprehensive documentation
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/jobelGolde12/personal-blog.git

# Navigate to the project directory
cd personal-blog

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173/`.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with HMR |
| `npm run build` | Build for production (output in `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## Configuration

### Tailwind CSS

The project uses Tailwind CSS 4 with the Vite plugin. Custom colors, animations, and keyframes are defined in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0066FF',
      secondary: '#A020F0',
    },
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in-out',
    },
  },
}
```

### Vite

The `vite.config.js` includes the Tailwind CSS Vite plugin and React plugin for fast refresh:

```javascript
plugins: [
  tailwindcss(),
  react(),
]
```

### Dynamic Content

Edit `public/info.txt` to update personal information. The file uses markdown format with sections for journey, skills, projects, internship, strengths, hobbies, goals, and philosophy.

## Services & Hooks

### useInfo Hook

```jsx
const { info, loading, error } = useInfo();

// info contains: intro, journey, technicalSkills, academicProjects,
// internship, strengths, hobbies, goals, philosophy, fullText
```

### infoService

```javascript
import { fetchInfo, getProfileName, getProfileTitle } from '@/services/infoService';

const info = await fetchInfo();
const name = getProfileName();    // "Jobel V. Golde"
const title = getProfileTitle();  // "IT Graduate | Web Developer"
```

### cn Utility

```jsx
import { cn } from '@/utils/cn';

<div className={cn('p-4', isActive && 'bg-blue-600')} />
```

## Responsive Design

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 768px | Single column, stacked layout |
| Tablet | 768px - 1024px | Adaptive grid |
| Desktop | > 1024px | Full multi-column layout |

## Accessibility

- Semantic HTML structure with proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support with visible focus indicators
- Color contrast compliance
- Respects `prefers-reduced-motion` for users who request reduced animations

## Performance Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.0s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Time to Interactive | < 3.0s |
| Lighthouse Score | > 90 |

## Deployment

### Build for Production

```bash
npm run build
```

The optimized output will be in the `dist/` folder.

### Hosting Options

- **Vercel** (recommended for Vite projects)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

Configure your hosting service to rewrite all routes to `index.html` for SPA routing support.

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Documentation

Comprehensive documentation is available in the `docs/` folder:

- [docs/README.md](docs/README.md) — Detailed project overview
- [docs/SETUP.md](docs/SETUP.md) — Installation and configuration guide
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — Project structure and design patterns
- [docs/COMPONENT_API.md](docs/COMPONENT_API.md) — Component reference and usage
- [docs/CSS_STYLING.md](docs/CSS_STYLING.md) — Tailwind CSS guide and styling patterns

## License

© 2026 Jobel V. Golde. All rights reserved.
