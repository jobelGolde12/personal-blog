# Personal Blog - Documentation

## Overview

This is a premium, production-ready personal blog application built for Jobel V. Golde using React 19, Vite, Tailwind CSS 4, and Framer Motion. The site features a scalable component-based architecture with dynamic content loading from `public/info.txt` and smooth animations throughout.

## Tech Stack

- **Framework**: React 19+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4+
- **Routing**: React Router DOM
- **Animations**: Framer Motion, GSAP
- **Content**: React Markdown with syntax highlighting
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge
- **Performance**: Code splitting, lazy loading, scroll restoration

## Project Structure

```
personal-blog/
├── src/
│   ├── components/              # Shared UI components
│   │   ├── Navbar.jsx          # Fixed navigation with mobile menu
│   │   └── Footer.jsx          # Footer with social links
│   ├── features/                # Feature-based folders
│   │   ├── hero/               # Landing page hero section
│   │   ├── about/              # About page
│   │   ├── blog/               # Blog feature
│   │   ├── projects/           # Projects showcase
│   │   └── contact/            # Contact page
│   ├── layouts/                 # Layout wrappers
│   │   └── Layout.jsx          # Main layout with navbar/footer
│   ├── pages/                   # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── routes/                  # Routing configuration
│   │   └── AppRoutes.jsx       # Route definitions with lazy loading
│   ├── services/                # API and data services
│   │   └── infoService.js      # Fetches and parses info.txt
│   ├── hooks/                   # Custom React hooks
│   │   └── useInfo.js          # Hook for loading info.txt
│   ├── utils/                   # Utility functions
│   │   └── cn.js               # Class name merging utility
│   ├── styles/                  # Global styles
│   ├── App.jsx                 # App component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global Tailwind styles
├── public/                      # Static assets
│   ├── images/
│   │   └── me.jpg              # Profile image
│   └── info.txt                # Dynamic content file
├── docs/                        # Documentation
├── tailwind.config.js           # Tailwind configuration
├── vite.config.js              # Vite configuration
└── package.json                # Dependencies
```

## Key Features

### 1. Dynamic Content Loading
- The site dynamically loads personal information from `public/info.txt`
- `useInfo()` hook provides easy access to parsed content
- Supports markdown formatting with syntax highlighting

### 2. Routing & Navigation
- React Router with lazy-loaded pages using Suspense
- Scroll restoration on route changes
- Active navigation highlighting with animated underline
- Mobile-responsive navigation menu

### 3. Components

#### Navbar (`src/components/Navbar.jsx`)
- Fixed position with backdrop blur
- Active state indicators
- Mobile hamburger menu
- Smooth animations on navigation items

#### Footer (`src/components/Footer.jsx`)
- Links to GitHub, LinkedIn, and Email
- Quick navigation links
- Responsive grid layout
- Animated on scroll

#### Layout (`src/layouts/Layout.jsx`)
- Wraps all pages
- Persistent navbar and footer
- Proper spacing for main content

### 4. Pages

#### Home Page (`src/pages/Home.jsx`)
- Hero section with profile image
- Animated background gradients
- Call-to-action buttons
- Smooth scroll indicator

#### About Page (`src/pages/About.jsx`)
- Personal journey section
- Technical skills grid with categorized skills
- Strengths section
- Markdown rendering from info.txt

#### Projects Page (`src/pages/Projects.jsx`)
- Featured project highlight
- Project grid layout
- Technology tags
- View and code buttons

#### Blog Page (`src/pages/Blog.jsx`)
- Article listing with metadata
- Categories and reading time
- Publication dates
- Author information

#### Contact Page (`src/pages/Contact.jsx`)
- Contact form with validation
- Social media links
- Contact information
- Email submission

#### 404 Page (`src/pages/NotFound.jsx`)
- Beautiful not-found page
- Animated elements
- Navigation back to home

## Animations & Interactions

### Framer Motion Usage
- **Page transitions**: Smooth fade and slide animations
- **Hero animations**: Floating elements, gradient text animations
- **Card animations**: Hover effects with scale and shadow
- **Text reveals**: Staggered animations
- **Button interactions**: Click feedback with scale animations

### CSS Features
- Gradient backgrounds with multiple layers
- Smooth transitions and transforms
- Glassmorphism effects (blur, transparency)
- Responsive typography
- Mobile-first design

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast compliance
- Reduced motion support (respects prefers-reduced-motion)

## Performance Optimizations

1. **Code Splitting**: Routes are lazy-loaded with Suspense
2. **Image Optimization**: Profile image loads on demand
3. **CSS Minification**: Tailwind purges unused styles
4. **Memoization Ready**: Components structured for React.memo
5. **Smooth Scrolling**: 60 FPS animations with GPU acceleration
6. **Efficient Re-renders**: Proper prop drilling avoided

## Configuration

### Tailwind CSS (`tailwind.config.js`)
- Extended theme with custom colors and animations
- Content paths configured for proper purging
- Custom keyframes for animations
- Design tokens for consistency

### Vite (`vite.config.js`)
- Tailwind CSS Vite plugin integrated
- React plugin for fast refresh
- Optimized build configuration

## Development

### Starting Development Server
```bash
npm run dev
```
Server runs on `http://localhost:5173/`

### Building for Production
```bash
npm run build
```
Optimized build output in `dist/` folder

### Preview Production Build
```bash
npm run preview
```

## Services & Hooks

### infoService.js
Provides functions to fetch and parse the info.txt file:
- `fetchInfo()`: Fetches and caches info.txt
- `getProfileName()`: Returns "Jobel V. Golde"
- `getProfileAge()`: Returns 22
- `getProfileTitle()`: Returns profile title
- `getProfileImage()`: Returns image path

### useInfo Hook
React hook for loading personal information:
```jsx
const { info, loading, error } = useInfo();
```

## Utilities

### cn() Function
Safe class name merging using clsx and tailwind-merge:
```jsx
import { cn } from '@/utils/cn'

<div className={cn('text-blue-600', isActive && 'font-bold')} />
```

## Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

All components adapt gracefully to screen size changes.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

1. Add Lenis smooth scrolling implementation
2. Implement GSAP timeline animations for scroll effects
3. Add blog article pages with full content
4. Connect contact form to email service
5. Add dark mode toggle
6. Implement analytics tracking
7. Add search functionality
8. Deploy to production

## Troubleshooting

### CSS Not Applied
- Ensure `tailwind.config.js` exists and `vite.config.js` imports `@tailwindcss/vite`
- Check that `src/index.css` is imported in `src/main.jsx`
- Run `npm install` to ensure all dependencies are installed

### Build Errors
- Clear `node_modules` and `dist` folders: `rm -rf node_modules dist`
- Reinstall dependencies: `npm install`
- Check for TypeScript errors if using `.ts` files

### Dev Server Not Starting
- Ensure port 5173 is not in use
- Try: `npm run dev -- --host 0.0.0.0`

## Contributing

When making changes:
1. Follow the existing component structure
2. Use Framer Motion for animations
3. Leverage Tailwind for styling
4. Keep components under 250 lines
5. Use custom hooks for reusable logic

## License

© 2026 Jobel V. Golde. All rights reserved.
