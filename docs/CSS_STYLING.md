# CSS & Styling Guide

## Tailwind CSS Setup

The project uses **Tailwind CSS 4** with the Vite plugin for optimal performance.

### Configuration

**File**: `tailwind.config.js`

```javascript
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        secondary: '#A020F0',
      },
      // ... other extensions
    },
  },
  plugins: [],
}
```

### Integration with Vite

**File**: `vite.config.js`

```javascript
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
})
```

The `@tailwindcss/vite` plugin handles:
- Automatic CSS generation
- Purging unused styles
- Development hot updates
- Production minification

### Global Styles

**File**: `src/index.css`

```css
@tailwind base;      /* Resets and defaults */
@tailwind components; /* Component classes */
@tailwind utilities;  /* Utility classes */

/* Custom global styles */
:root { ... }
body { ... }
.prose { ... }
```

**Important**: Do NOT use `@layer` in `index.css`. Use Tailwind directives only.

## Color Palette

### Primary Colors
```
primary: #0066FF (Blue)
secondary: #A020F0 (Purple)
```

### Grayscale
```
gray-50:   #f9fafb
gray-100:  #f3f4f6
gray-200:  #e5e7eb
gray-300:  #d1d5db
gray-400:  #9ca3af
gray-500:  #6b7280
gray-600:  #4b5563
gray-700:  #374151
gray-800:  #1f2937
gray-900:  #111827
```

### Semantic Colors
```
red:      #ef4444
orange:   #f97316
yellow:   #eab308
green:    #22c55e
blue:     #3b82f6
purple:   #a855f7
pink:     #ec4899
```

## Usage Patterns

### Responsive Design

```jsx
// Mobile first
<div className="px-4 sm:px-6 lg:px-8">
  {/* 
    px-4 on mobile
    px-6 on tablet (sm: 640px)
    px-8 on desktop (lg: 1024px)
  */}
</div>
```

### Flexbox & Grid

```jsx
// Flexbox
<div className="flex items-center justify-between gap-4">
  <div>Left</div>
  <div>Right</div>
</div>

// Grid
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card />
  <Card />
  <Card />
</div>
```

### Spacing

```jsx
// Padding
<div className="p-4">         {/* padding: 1rem */}
<div className="px-6 py-4">   {/* horizontal 1.5rem, vertical 1rem */}

// Margin
<div className="mb-8">        {/* margin-bottom: 2rem */}
<div className="mt-4 mb-4">   {/* vertical margins */}

// Gap (flex/grid)
<div className="flex gap-4">  {/* gap: 1rem */}
```

### Typography

```jsx
// Font sizes
<h1 className="text-5xl font-bold">Heading</h1>      {/* 3rem, bold */}
<h2 className="text-3xl font-semibold">Subheading</h2> {/* 1.875rem, 600 */}
<p className="text-lg">Body text</p>                    {/* 1.125rem */}

// Font weights
<span className="font-light">Light</span>      {/* 300 */}
<span className="font-normal">Normal</span>    {/* 400 */}
<span className="font-semibold">Semibold</span> {/* 600 */}
<span className="font-bold">Bold</span>        {/* 700 */}

// Line height
<p className="leading-relaxed">Text with more space</p> {/* 1.625 */}
<p className="leading-tight">Condensed text</p>         {/* 1.25 */}
```

### Colors & Backgrounds

```jsx
// Text colors
<p className="text-gray-700">Dark gray text</p>
<p className="text-blue-600">Primary blue</p>

// Background colors
<div className="bg-gray-50">Light background</div>
<div className="bg-gradient-to-r from-blue-600 to-purple-600">
  Gradient background
</div>

// Opacity
<div className="bg-white/80">Transparent white</div>
<div className="opacity-50">50% opacity</div>
```

### Borders & Shadows

```jsx
// Borders
<div className="border border-gray-300">
<div className="border-l-4 border-blue-600">
<div className="rounded-lg">              {/* border-radius: 0.5rem */}
<div className="rounded-full">            {/* border-radius: 9999px */}

// Shadows
<div className="shadow">                  {/* light shadow */}
<div className="shadow-lg">               {/* large shadow */}
<div className="shadow-xl">               {/* extra-large shadow */}

// Hover shadows
<div className="shadow-md hover:shadow-lg transition-shadow">
```

### Transitions & Animations

```jsx
// Transitions
<div className="transition-all duration-300">          {/* smooth transitions */}
<button className="transition-colors duration-200">   {/* color change */}

// Hover states
<button className="hover:bg-blue-700 transition-colors">
  Hover me
</button>

// Custom animations (from tailwind.config.js)
<div className="animate-fade-in">
<div className="animate-pulse-slow">
```

### Display & Visibility

```jsx
// Display
<div className="hidden md:block">Shown on desktop</div> {/* hidden on mobile */}
<div className="md:hidden">Shown on mobile</div>         {/* hidden on desktop */}

// Flex direction
<div className="flex flex-col md:flex-row">
  {/* column on mobile, row on desktop */}
</div>

// Absolute positioning
<div className="relative">
  <div className="absolute top-0 right-0">
    {/* positioned relative to parent */}
  </div>
</div>
```

## Common Component Patterns

### Button

```jsx
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
  Click me
</button>
```

### Card

```jsx
<div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
  <h3 className="text-xl font-bold text-gray-900 mb-3">Card Title</h3>
  <p className="text-gray-600">Card content</p>
</div>
```

### Input

```jsx
<input
  type="text"
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-colors"
  placeholder="Enter text..."
/>
```

### Badge

```jsx
<span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
  Badge
</span>
```

### Glassmorphism

```jsx
<div className="bg-white/80 backdrop-blur-md border border-white/20 rounded-xl p-6">
  {/* Frosted glass effect */}
</div>
```

## Dark Mode (Ready for Implementation)

To add dark mode support, update `tailwind.config.js`:

```javascript
export default {
  darkMode: 'class', // or 'media'
  // ... rest of config
}
```

Then use in components:

```jsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Content
</div>
```

## Performance Tips

### 1. Use Tailwind Utilities
Prefer Tailwind classes over custom CSS:

```jsx
// ✅ Good
<div className="flex items-center justify-between gap-4">

// ❌ Avoid
<div style={{display: 'flex', alignItems: 'center', ...}}>
```

### 2. Avoid Arbitrary Values
Use predefined values when possible:

```jsx
// ✅ Good
<div className="w-64 h-48">

// ⚠️ Use sparingly
<div className="w-[300px] h-[200px]">
```

### 3. Keep Class Names Clean
Extract complex patterns into components:

```jsx
// ❌ Long, complex
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">

// ✅ Better
<PrimaryButton>Click me</PrimaryButton>
```

### 4. Use Responsive Prefixes
```jsx
// ✅ Good - scales responsively
<div className="text-sm md:text-base lg:text-lg">

// ❌ Avoid - fixed sizes
<div style={{fontSize: '16px'}}>
```

## Customization Guide

### Add Custom Color

**tailwind.config.js**:
```javascript
theme: {
  extend: {
    colors: {
      brand: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        500: '#0284c7',
        900: '#0c2d6b',
      }
    }
  }
}
```

**Usage**:
```jsx
<div className="bg-brand-500 text-brand-50">
```

### Add Custom Font

**tailwind.config.js**:
```javascript
theme: {
  extend: {
    fontFamily: {
      display: ['Playfair Display', 'serif'],
      body: ['Inter', 'sans-serif'],
    }
  }
}
```

### Add Custom Animation

**tailwind.config.js**:
```javascript
theme: {
  extend: {
    animation: {
      'bounce-slow': 'bounce 2s infinite',
      'shimmer': 'shimmer 2s infinite',
    },
    keyframes: {
      shimmer: {
        '0%': { backgroundPosition: '-1000px 0' },
        '100%': { backgroundPosition: '1000px 0' },
      }
    }
  }
}
```

## CSS Utilities Reference

### Sizing
```
w-4, w-8, w-16, w-full, w-screen
h-4, h-8, h-16, h-full, h-screen
min-w, max-w, min-h, max-h
```

### Spacing
```
p-4 (padding), m-4 (margin), gap-4
px-4, py-4 (horizontal/vertical)
mt-4, mb-4, ml-4, mr-4 (sides)
```

### Typography
```
text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl, text-6xl
font-light, font-normal, font-semibold, font-bold
leading-tight, leading-normal, leading-relaxed, leading-loose
```

### Flexbox
```
flex, flex-col, flex-row
items-start, items-center, items-end
justify-start, justify-center, justify-between, justify-around
gap-2, gap-4, gap-6
```

### Grid
```
grid, grid-cols-2, grid-cols-3, grid-cols-4
grid-rows-2, grid-rows-3
gap-4, gap-6
```

### Positioning
```
relative, absolute, fixed, sticky
top-0, bottom-0, left-0, right-0
z-10, z-20, z-50
```

## Browser DevTools Tips

### Inspecting Tailwind Classes
- Right-click element → Inspect
- Look for computed styles to verify Tailwind classes applied
- Check Sources tab for `index.css` with processed Tailwind

### Testing Responsive Breakpoints
- Press F12 → Ctrl+Shift+M (Windows) or Cmd+Shift+M (Mac)
- Toggle between device sizes
- Verify Tailwind responsive classes work

### Debugging Performance
- Lighthouse → Performance tab
- Check CSS file size in Network tab
- Verify unused CSS is purged
