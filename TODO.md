# Development Environment

The project has **already been initialized** in the current directory.

The following are already installed and configured:

* React 19+
* Vite
* Tailwind CSS 4+

**DO NOT create a new React project.**

**DO NOT run `npm create vite`, `create-react-app`, or reinstall React or Tailwind CSS.**

Instead, continue development using the existing project structure in the current directory.

Only install additional packages if they are actually required for the implementation.

---

# Technology Stack

Use the following technologies to build a premium, production-ready personal blog application.

## Core Framework

* React 19+
* Vite
* React Router DOM

The application must use a component-based architecture.

Every UI section should be a reusable React component.

Avoid large components.

Prefer composition over duplication.

---

## Styling

Use:

* Tailwind CSS 4+
* CSS Variables
* Modern CSS
* CSS Grid
* Flexbox

Use Tailwind as the primary styling system.

Create reusable design tokens.

Create custom utility classes using Tailwind's `@layer`.

Do not write unnecessarily long utility class strings repeatedly.

Instead create reusable UI components.

The website should maintain a consistent design system.

---

## Utility Libraries

Use these libraries whenever appropriate.

* clsx
* tailwind-merge
* react-use

Use `clsx` and `tailwind-merge` for conditional class composition.

Never concatenate class strings manually.

---

## Animation Libraries

Use multiple animation libraries where each one performs best.

### Framer Motion

Use for:

* Page transitions
* Hero animations
* Card animations
* Hover animations
* Button interactions
* Text reveal
* Section reveal
* Floating elements
* Image animation
* Navigation animation

---

### GSAP

Use only for advanced animations.

Examples:

* Timeline animation
* SVG drawing
* Complex sequences
* Scroll animations
* Advanced hero entrance

Do not use GSAP for everything.

Only use it where Framer Motion becomes limiting.

---

### Lenis

Use Lenis for premium smooth scrolling.

Scrolling should feel modern and buttery smooth.

---

## Content Rendering

Use:

* React Markdown
* Remark GFM
* Rehype Highlight
* Highlight.js

If `info.txt` contains markdown formatting, render it correctly.

Support:

* headings
* lists
* bold
* italic
* code blocks
* tables
* links
* blockquotes

---

## Icons

Use

* Lucide React
* React Icons

Choose icons that match each section.

Avoid inconsistent icon styles.

---

## State Management

For this project use:

* React Context API

There is no need for Redux.

Use Context only for:

* Theme
* Navigation state
* Reading progress
* Global UI state

---

## Browser APIs

Utilize modern browser APIs.

Examples:

Intersection Observer

Resize Observer

Canvas API

Local Storage

requestAnimationFrame

matchMedia

History API

---

# Routing

Use React Router DOM.

Create a scalable routing architecture.

The routes should include:

```text
/

Home

/about

About Me

/blog

Complete Blog Article

/projects

Projects

/contact

Contact

*

404 Page
```

Create a dedicated routing folder.

Example:

```text
src/routes/AppRoutes.jsx
```

Requirements:

* BrowserRouter
* Nested routes
* Lazy loading
* Suspense
* Scroll Restoration
* Animated route transitions
* Persistent Navbar
* Persistent Footer
* Active navigation highlighting

Every page transition should smoothly animate using Framer Motion.

---

# Component Architecture

Follow a scalable feature-first architecture.

Every section should live inside its own feature folder.

Example:

```text
src/
│
├── components/
│
├── features/
│   ├── hero/
│   ├── about/
│   ├── journey/
│   ├── skills/
│   ├── projects/
│   ├── experience/
│   ├── hobbies/
│   ├── goals/
│   ├── philosophy/
│   ├── quotes/
│   ├── contact/
│   └── blog/
│
├── hooks/
├── context/
├── layouts/
├── routes/
├── pages/
├── services/
├── utils/
├── styles/
```

Each feature folder should contain:

* Components
* Styles (if necessary)
* Hooks
* Animation helpers

Keep files small.

Avoid components larger than roughly 250 lines.

---

# Data Loading

The personal information is stored inside

```text
public/info.txt
```

The application should fetch this file dynamically.

Do not hardcode the content.

Parse it into sections and distribute it throughout the application.

The Hero profile image is located at

```text
public/images/me.jpg
```

Use this image throughout the website where appropriate.

---

# Performance

The application should feel like a premium website.

Optimize for:

* 60 FPS animations
* Lazy loaded pages
* Lazy loaded images
* Route code splitting
* Memoized components
* Optimized re-rendering
* GPU accelerated animations
* Efficient scrolling

Avoid unnecessary re-renders.

Avoid animation jank.

---

# Accessibility

The website must follow accessibility best practices.

Implement:

* Semantic HTML
* Keyboard navigation
* Focus indicators
* ARIA labels
* Accessible color contrast
* Responsive typography
* Reduced motion support

---

# Code Quality

Write production-quality React code.

Requirements:

* Functional Components
* React Hooks
* Custom Hooks
* Reusable Components
* Clean Folder Structure
* Consistent Naming
* Separation of Concerns
* No Duplicate Code
* No Inline Styles
* No Hardcoded Colors
* Meaningful Comments only when necessary

Every component should be easy to maintain and reusable.

---

# Final Goal

The finished website should feel like a premium interactive personal website built by a senior React developer.

It should feature elegant animations, reusable architecture, responsive layouts, clean routing, modern UI/UX, excellent performance, and a scalable codebase. Every section should seamlessly present the information from `public/info.txt`, while using `public/images/me.jpg` as the primary profile image in the Hero section. The overall experience should be immersive, polished, and suitable for deployment as a professional personal blog and portfolio.
