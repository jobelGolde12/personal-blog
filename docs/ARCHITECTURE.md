# Architecture Guide

## Design Principles

### 1. Feature-First Architecture
Each major section of the site lives in its own feature folder under `src/features/`:
- Self-contained and modular
- Easy to locate and maintain
- Can be developed independently
- Encourages code reuse

### 2. Component Organization
```
src/
├── components/       # Shared, reusable UI components
├── features/         # Feature-specific implementations
├── pages/            # Full page components
├── layouts/          # Layout wrappers
├── hooks/            # Custom React hooks
├── services/         # Data fetching and utilities
└── utils/            # Helper functions
```

### 3. File Naming Conventions
- Components: PascalCase (e.g., `Hero.jsx`, `Navbar.jsx`)
- Utilities: camelCase (e.g., `infoService.js`, `useInfo.js`)
- Folders: lowercase (e.g., `hero/`, `services/`)

## Component Types

### Shared Components (`src/components/`)
Used across multiple pages:
- **Navbar**: Navigation header
- **Footer**: Site footer
- UI utilities (buttons, cards, etc.)

### Feature Components (`src/features/*/`)
Specific to a feature:
- Hero
- About
- Blog
- Projects
- Contact

### Page Components (`src/pages/`)
Full page layouts:
- Combine multiple components
- Handle page-level logic
- Route-level components

### Layout Components (`src/layouts/`)
Page structure wrappers:
- Navbar and Footer wrapper
- Nested outlet for pages

## Data Flow

### Dynamic Content
```
public/info.txt
    ↓
infoService.js (fetches & parses)
    ↓
useInfo() hook (consumed by components)
    ↓
Components render with parsed content
```

### Routing Flow
```
App.jsx
    ↓
AppRoutes.jsx (Router setup)
    ↓
Layout.jsx (Navbar + main + Footer)
    ↓
Pages (Home, About, Blog, etc.)
    ↓
Components (Hero, Cards, etc.)
```

## Performance Considerations

### Code Splitting
- Routes are lazy-loaded with React.lazy()
- Suspense boundaries provide loading states
- Only needed code loads per route

### Image Loading
- Profile image uses fallback SVG
- Images load on demand
- Optimized for web delivery

### CSS Optimization
- Tailwind purges unused styles
- @tailwindcss/vite handles processing
- Only needed CSS included in bundle

### Component Memoization
- Components structured for React.memo
- Avoid unnecessary re-renders
- Props are properly isolated

## Animation Strategy

### Framer Motion
Used for interactive animations:
- Page transitions
- Element reveals
- Hover effects
- Button interactions
- Text animations

### CSS Animations
Used for performant, continuous effects:
- Pulse animations
- Background gradients
- Smooth transitions
- Transform effects

### GPU Acceleration
- 3D transforms used where possible
- `will-change` CSS for hints
- Animations target transform/opacity
- 60 FPS target maintained

## State Management

### Context API (Ready)
Prepared folders for:
- Theme context
- Navigation state
- Reading progress
- UI state

### Local Component State
- useState for form data
- useState for UI toggles
- useCallback for event handlers

### Custom Hooks
- `useInfo()` for data fetching
- Reusable logic encapsulation
- Clean component APIs

## Accessibility Architecture

### Semantic HTML
- Proper heading hierarchy
- `<button>` for interactions
- `<nav>` for navigation
- `<main>` for content
- `<footer>` for footer

### ARIA Attributes
- Labels for icon-only buttons
- `role` attributes where needed
- Landmark roles for navigation

### Keyboard Navigation
- Tab order follows visual flow
- Focus styles visible
- Keyboard shortcuts supported

### Motion Preferences
- `prefers-reduced-motion` respected
- Animations disabled for users who request
- Content still accessible without animations

## Styling Architecture

### Tailwind CSS Strategy
1. **Utility First**: Primary styling approach
2. **Components**: Reusable Tailwind combinations
3. **Custom Classes**: @layer for complex patterns
4. **Design Tokens**: Extended theme config

### Color Palette
```
Primary: Blue (#0066FF)
Secondary: Purple (#A020F0)
Backgrounds: Gray scale
Accents: Blue/Purple gradients
```

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Error Handling

### Route Errors
- 404 NotFound page for invalid routes
- Error boundary ready for integration

### Data Fetching Errors
- Graceful fallbacks for missing info.txt
- Error state in useInfo hook
- User-friendly error messages

### Build Errors
- CSS validation via tailwind
- Component prop validation ready
- TypeScript support ready

## Deployment Considerations

### Build Output
- Minified CSS and JavaScript
- Tree-shaken imports
- Optimized chunks
- Source maps optional

### Environment Setup
- No environment variables required for basic setup
- Ready for API integration
- Can add CDN for images
- Analytics ready for integration

### Performance Targets
- First Contentful Paint: < 1s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3s

## Testing Readiness

### Unit Testing
- Components structured for testing
- Hooks testable with @testing-library/react-hooks
- Pure functions in services

### E2E Testing
- Routes easily navigable
- Form interactions testable
- Navigation flow clear

### Visual Testing
- Consistent component structure
- Animation keyframes documented
- Color tokens centralized
