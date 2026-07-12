# Setup & Configuration Guide

## Initial Setup

### Prerequisites
- Node.js 18+ and npm

### Installation Steps

1. **Navigate to project directory**
```bash
cd personal-blog
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

## Configuration Files

### tailwind.config.js
Configures Tailwind CSS 4+

**Key Settings**:
- Content paths for template files
- Extended theme colors (primary, secondary)
- Custom animations (fade-in, slide-in)
- Keyframe definitions

**To modify**:
```javascript
theme: {
  extend: {
    colors: {
      // Add custom colors
      primary: '#0066FF',
      secondary: '#A020F0',
    },
    animation: {
      // Add custom animations
      'fade-in': 'fadeIn 0.5s ease-in-out',
    },
  },
}
```

### vite.config.js
Configures Vite build tool

**Plugins**:
1. `@tailwindcss/vite` - Tailwind CSS processing
2. `@vitejs/plugin-react` - React Fast Refresh

**Important**: Both plugins must be present for proper CSS processing

### index.css
Global styles and Tailwind directives

**Includes**:
- `@tailwind base` - Base styles
- `@tailwind components` - Component styles
- `@tailwind utilities` - Utility styles
- Prose styling for markdown

### package.json
Project metadata and dependencies

**Scripts**:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Environment Setup

### Public Assets
Place assets in `public/` directory:

**Profile Image**:
```
public/images/me.jpg
```
Used in Hero section. Supports JPG, PNG, WebP.

**Content File**:
```
public/info.txt
```
Markdown-formatted personal information.

### Dynamic Content

The site loads `public/info.txt` dynamically. The file should contain:

```markdown
# Meet Jobel V. Golde: ...

## My Journey into Information Technology
...

## Technical Skills
...

## Academic and Personal Projects
...

## Internship Experience
...

## Strengths
...

## My Hobbies
...

## My Career Goals
...

## My Personal Philosophy
...
```

The content is parsed into sections accessible via `useInfo()` hook.

## Customization

### Adding a New Route

1. Create page component in `src/pages/`
```jsx
// src/pages/MyPage.jsx
export default function MyPage() {
  return <div>My page content</div>
}
```

2. Add route in `src/routes/AppRoutes.jsx`
```jsx
{
  path: '/mypage',
  element: (
    <Suspense fallback={<LoadingFallback />}>
      <MyPage />
    </Suspense>
  ),
}
```

### Adding a New Feature

1. Create feature folder
```
src/features/myfeature/
├── MyFeature.jsx
├── MyFeature.css (optional)
└── hooks/ (optional)
```

2. Import and use in pages
```jsx
import MyFeature from '@/features/myfeature/MyFeature'

function MyPage() {
  return <MyFeature />
}
```

### Adding a New Component

1. Create in `src/components/`
```jsx
// src/components/MyComponent.jsx
export default function MyComponent({ prop1, prop2 }) {
  return <div>{prop1} {prop2}</div>
}
```

2. Use in other components
```jsx
import MyComponent from '@/components/MyComponent'

<MyComponent prop1="value" prop2="value" />
```

### Customizing Colors

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#YOUR_COLOR',
      secondary: '#YOUR_COLOR',
    },
  },
}
```

Then use in components:
```jsx
<div className="bg-primary text-secondary">
```

### Customizing Fonts

In `tailwind.config.js`:
```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Your Font', 'system-ui', 'sans-serif'],
      mono: ['Your Mono Font', 'monospace'],
    },
  },
}
```

## Build & Deployment

### Development Build
```bash
npm run dev
```
- Hot module replacement (HMR)
- Source maps enabled
- Unminified code

### Production Build
```bash
npm run build
```
- Output in `dist/` folder
- Minified and optimized
- Code splitting applied

### Preview Production Build
```bash
npm run preview
```
- Serves `dist/` folder locally
- Tests production build

### Deployment Steps

1. Build the project
```bash
npm run build
```

2. Upload `dist/` folder to hosting service

3. Configure server for SPA routing (rewrite all routes to index.html)

### Hosting Options
- Vercel (recommended for Vite)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Heroku

## Performance Optimization

### Code Splitting
Routes are automatically lazy-loaded. Suspense boundaries provide loading states.

### Image Optimization
- Use WebP format where possible
- Compress images before upload
- Use responsive image techniques

### CSS Optimization
Tailwind automatically purges unused CSS. Remove the `content` config if experiencing missing styles.

### Font Optimization
Use system fonts or self-host. Avoid loading too many font variants.

## Troubleshooting

### CSS Not Applying

**Problem**: Tailwind classes don't show up
**Solution**:
1. Verify `tailwind.config.js` exists
2. Check `vite.config.js` has `tailwindcss()` plugin
3. Restart dev server after config changes

### Build Errors

**Problem**: Build fails with CSS errors
**Solution**:
1. Check `index.css` syntax
2. Verify no typos in Tailwind directives
3. Clear cache: `rm -rf node_modules dist && npm install`

### Dev Server Not Starting

**Problem**: Port 5173 already in use
**Solution**:
```bash
npm run dev -- --port 3000
```

### Images Not Loading

**Problem**: Profile image not showing
**Solution**:
1. Place image in `public/images/me.jpg`
2. Check file name matches
3. Verify file format is supported

## Performance Metrics Target

- **First Contentful Paint**: < 1.0s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3s
- **Lighthouse Score**: > 90

## Security Considerations

- No hardcoded API keys or secrets
- Markdown sanitization via React Markdown
- CORS handled by same-origin policy
- XSS protection via React escaping
- Form inputs validated client-side

## Browser Compatibility

- Chrome/Edge: ✅ Latest 2 versions
- Firefox: ✅ Latest 2 versions
- Safari: ✅ Latest 2 versions
- Mobile browsers: ✅ Supported
- IE 11: ❌ Not supported

## Maintenance

### Regular Updates
```bash
npm update
```

### Checking for Vulnerabilities
```bash
npm audit
```

### Fixing Security Issues
```bash
npm audit fix
```

## Documentation

- **Main README**: [README.md](README.md)
- **Architecture Guide**: [ARCHITECTURE.md](ARCHITECTURE.md)
- **Component API**: [COMPONENT_API.md](COMPONENT_API.md)
- **Setup Guide**: [SETUP.md](SETUP.md) (this file)

## Support & Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [React Router Documentation](https://reactrouter.com)
