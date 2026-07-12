# Component API Reference

## Navbar Component

**Location**: `src/components/Navbar.jsx`

### Features
- Fixed header with 16px top positioning
- Mobile hamburger menu for screens < 768px
- Active route highlighting
- Smooth animations on navigation

### Props
None - uses React Router's `useLocation` hook

### Usage
```jsx
import Navbar from '@/components/Navbar'

<Navbar />
```

### Navigation Items
- Home `/`
- About `/about`
- Blog `/blog`
- Projects `/projects`
- Contact `/contact`

---

## Footer Component

**Location**: `src/components/Footer.jsx`

### Features
- Dark theme (gray-900 background)
- Company information section
- Quick links navigation
- Social media links
- Copyright info with dynamic year

### Props
None

### Usage
```jsx
import Footer from '@/components/Footer'

<Footer />
```

---

## Layout Component

**Location**: `src/layouts/Layout.jsx`

### Features
- Wrapper for all pages
- Persistent Navbar and Footer
- Flex layout for proper spacing
- Min-height screen coverage

### Props
None - uses Outlet for nested routes

### Usage
```jsx
import Layout from '@/layouts/Layout'

// Routes configuration
{
  element: <Layout />,
  children: [
    // page routes
  ]
}
```

---

## Hero Component

**Location**: `src/features/hero/Hero.jsx`

### Features
- Full-screen landing section
- Animated gradient backgrounds
- Profile image with fallback
- CTA buttons (View Work, Get In Touch)
- Scroll indicator animation
- Responsive grid layout

### Props
None - hardcoded content

### Usage
```jsx
import Hero from '@/features/hero/Hero'

<Hero />
```

### Animation Details
- Staggered container animations
- Floating image animation
- Gradient text animation
- Smooth button interactions

---

## useInfo Hook

**Location**: `src/hooks/useInfo.js`

### Features
- Fetches `public/info.txt` on mount
- Parses content into sections
- Caches results
- Provides loading and error states

### Return Value
```javascript
{
  info: {
    intro: string,
    journey: string,
    technicalSkills: string,
    academicProjects: string,
    internship: string,
    strengths: string,
    hobbies: string,
    goals: string,
    philosophy: string,
    fullText: string
  },
  loading: boolean,
  error: Error | null
}
```

### Usage
```jsx
import { useInfo } from '@/hooks/useInfo'

function MyComponent() {
  const { info, loading, error } = useInfo()
  
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading info</div>
  
  return <div>{info.intro}</div>
}
```

---

## infoService

**Location**: `src/services/infoService.js`

### Functions

#### `fetchInfo()`
Fetches and parses `public/info.txt`

```javascript
const info = await fetchInfo()
```

**Returns**: Parsed info object with sections

#### `getProfileName()`
```javascript
const name = getProfileName() // "Jobel V. Golde"
```

#### `getProfileAge()`
```javascript
const age = getProfileAge() // 22
```

#### `getProfileTitle()`
```javascript
const title = getProfileTitle() // "IT Graduate | Web Developer"
```

#### `getProfileImage()`
```javascript
const imgPath = getProfileImage() // "/images/me.jpg"
```

---

## cn() Utility

**Location**: `src/utils/cn.js`

### Purpose
Safely merge Tailwind CSS classes with conflict resolution

### Usage
```jsx
import { cn } from '@/utils/cn'

// Conditional classes
<div className={cn('p-4', isActive && 'bg-blue-600')} />

// Multiple conditions
<button className={cn(
  'px-4 py-2 rounded',
  isActive && 'bg-blue-600 text-white',
  isDisabled && 'opacity-50 cursor-not-allowed'
)} />
```

### Implementation
Uses `clsx` for conditional logic and `tailwind-merge` for conflict resolution.

---

## Page Components

### Home Page
**Location**: `src/pages/Home.jsx`

Renders the Hero component at full screen height.

### About Page
**Location**: `src/pages/About.jsx`

**Features**:
- Loads info via `useInfo()` hook
- Renders markdown with React Markdown
- Skill categories with icons
- Sections for journey, skills, strengths

### Projects Page
**Location**: `src/pages/Projects.jsx`

**Features**:
- Featured project showcase
- Project grid (2-3 columns on desktop)
- Technology tags
- View and Code buttons
- Hover animations

### Blog Page
**Location**: `src/pages/Blog.jsx`

**Features**:
- Article listing
- Category badges
- Reading time estimates
- Publication dates
- Author information
- Load more button

### Contact Page
**Location**: `src/pages/Contact.jsx`

**Features**:
- Contact form with inputs
- Phone, email, location display
- Social media links
- Form validation

### NotFound Page
**Location**: `src/pages/NotFound.jsx`

**Features**:
- 404 large display
- Animated background
- Navigation links
- Floating emoji animations

---

## Animation Patterns

### Container with Staggered Children
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  <motion.div variants={itemVariants}>Item 1</motion.div>
  <motion.div variants={itemVariants}>Item 2</motion.div>
</motion.div>
```

### Hover Effects
```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

### Scroll Triggered Animations
```jsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={itemVariants}
>
  Content
</motion.div>
```

---

## Routing Configuration

**Location**: `src/routes/AppRoutes.jsx`

```
/ → Home (Hero)
/about → About page
/blog → Blog articles
/projects → Projects showcase
/contact → Contact form
* → NotFound (404)
```

All pages support lazy loading with Suspense boundaries.

---

## CSS Classes Reference

### Common Tailwind Patterns

#### Gradient Text
```jsx
className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
```

#### Glassmorphism
```jsx
className="bg-white/80 backdrop-blur-md border border-gray-200"
```

#### Smooth Animations
```jsx
className="transition-all duration-300 ease-out"
```

#### Responsive Padding
```jsx
className="px-4 sm:px-6 lg:px-8"
```

#### Responsive Grid
```jsx
className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
```
