export const blogPosts = [
  {
    slug: 'building-a-modern-web-application-with-react-19',
    title: 'Building a Modern Web Application with React 19',
    excerpt:
      'Explore React 19 through a practical lens: component composition, server-driven workflows, and the patterns that keep a UI fast as it grows.',
    author: 'Jobel V. Golde',
    date: '2024-12-15',
    category: 'React',
    readTime: '8 min read',
    featured: true,
    intro:
      'React 19 continues the push toward simpler data handling, cleaner component boundaries, and better user experience. The real value is not just in new APIs, but in the way it encourages you to structure UI around predictable state and smaller interactions.',
    sections: [
      {
        heading: '1. Start with component boundaries',
        paragraphs: [
          'A modern React app becomes easier to maintain when each component has one clear job. Keep presentational pieces focused on layout and interaction, and move data access or orchestration into dedicated containers or hooks.',
          'That separation makes it easier to test, reuse, and refactor without dragging side effects into every screen.',
        ],
      },
      {
        heading: '2. Keep state close to where it is used',
        paragraphs: [
          'Avoid pushing every piece of state into a top-level store. Local state often produces simpler code and fewer unnecessary rerenders.',
          'When state needs to travel across the app, promote it intentionally and document why it is shared.',
        ],
      },
      {
        heading: '3. Use a fast feedback loop',
        paragraphs: [
          'A strong React workflow depends on quick feedback from the browser. Split large screens into smaller units, avoid expensive work during render, and use loading states that make transitions feel intentional.',
          'A smooth interface often comes from small decisions: optimistic UI updates, stable props, and sensible fallback content.',
        ],
      },
    ],
    takeaways: [
      'Prefer small components with a single responsibility.',
      'Keep state local unless it must be shared.',
      'Design loading states as part of the experience, not as an afterthought.',
    ],
    technologies: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    slug: 'mastering-tailwind-css-from-basics-to-advanced',
    title: 'Mastering Tailwind CSS: From Basics to Advanced',
    excerpt:
      'A practical guide to Tailwind CSS that goes beyond utility classes and focuses on composition, consistency, and building a scalable design system.',
    author: 'Jobel V. Golde',
    date: '2024-12-10',
    category: 'CSS',
    readTime: '6 min read',
    intro:
      'Tailwind works best when it is treated as a system for consistency, not just a shortcut for styling. Once your project starts growing, the difference between a tidy utility layout and a messy one is usually discipline around spacing, tokens, and repeatable patterns.',
    sections: [
      {
        heading: '1. Build around design tokens',
        paragraphs: [
          'Use a small, meaningful set of colors, shadows, spacing, and typography choices. That keeps the interface coherent and avoids the temptation to invent a new style for every component.',
          'If a pattern appears more than twice, consider extracting it into a shared component or a reusable class strategy.',
        ],
      },
      {
        heading: '2. Compose utilities intentionally',
        paragraphs: [
          'Tailwind is powerful because it lets you compose directly in the markup, but that flexibility still needs structure. Group related utilities by function, not by visual preference, so the next person can understand what a block does quickly.',
          'Spacing, layout, and interaction should read like a system rather than a pile of classes.',
        ],
      },
      {
        heading: '3. Make responsive behavior explicit',
        paragraphs: [
          'Responsive design should be visible in the component itself. Tailwind makes it easy to define breakpoints inline, but the real goal is to think through how the layout behaves on small screens before the desktop polish is added.',
          'That habit reduces brittle overrides and keeps your CSS predictable.',
        ],
      },
    ],
    takeaways: [
      'Limit your design tokens to preserve consistency.',
      'Extract repeated patterns when utilities start repeating.',
      'Design mobile behavior first, then expand outward.',
    ],
    technologies: ['Tailwind CSS', 'Responsive Design', 'Design Systems'],
  },
  {
    slug: 'the-art-of-writing-clean-maintainable-code',
    title: 'The Art of Writing Clean, Maintainable Code',
    excerpt:
      'Writing maintainable code is about reducing confusion for the next engineer, the future you, and anyone else who has to extend the system later.',
    author: 'Jobel V. Golde',
    date: '2024-12-05',
    category: 'Best Practices',
    readTime: '10 min read',
    intro:
      'Clean code is not about making every line short. It is about making intent obvious. When a codebase grows, clarity becomes a performance feature because it reduces mistakes, speeds up onboarding, and makes refactors less risky.',
    sections: [
      {
        heading: '1. Name things for intent',
        paragraphs: [
          'Good names remove the need for extra explanation. A variable or function should tell the reader what problem it solves, not just what type it stores.',
          'If you need to annotate every line with comments, the naming may need to improve first.',
        ],
      },
      {
        heading: '2. Keep functions small and focused',
        paragraphs: [
          'A function that does one thing well is easier to reuse and easier to debug. Once a function starts handling validation, formatting, persistence, and rendering all at once, it becomes fragile.',
          'Smaller units also make it easier to write meaningful tests with clear expectations.',
        ],
      },
      {
        heading: '3. Prefer predictable structure',
        paragraphs: [
          'Consistent folder structure, naming conventions, and patterns matter because they lower the mental cost of exploring the codebase. Predictability is especially valuable on teams where multiple people touch the same files.',
          'The best code feels boring to navigate because everything is where you expect it to be.',
        ],
      },
    ],
    takeaways: [
      'Name code for intent, not implementation details.',
      'Keep functions small enough to reason about quickly.',
      'Consistency is a form of documentation.',
    ],
    technologies: ['Clean Code', 'Architecture', 'Testing'],
  },
  {
    slug: 'full-stack-development-with-laravel-and-vuejs',
    title: 'Full-Stack Development with Laravel and Vue.js',
    excerpt:
      'Learn how Laravel and Vue.js work together to build practical full-stack apps with clean backends, responsive interfaces, and maintainable API boundaries.',
    author: 'Jobel V. Golde',
    date: '2024-11-30',
    category: 'Full Stack',
    readTime: '12 min read',
    intro:
      'Laravel and Vue.js remain a strong combination when you want fast iteration on both sides of the stack. Laravel gives structure to the backend, while Vue provides a responsive interface that can be delivered in small, focused pieces.',
    sections: [
      {
        heading: '1. Keep backend responsibilities clear',
        paragraphs: [
          'Laravel should own validation, persistence, and business rules. Controllers should stay thin and delegate most work to services or form request classes where needed.',
          'That makes the backend easier to read and keeps your API responses consistent.',
        ],
      },
      {
        heading: '2. Let Vue handle the user flow',
        paragraphs: [
          'Vue works well for forms, dashboards, and interactive tables because it makes UI state easy to manage. Keep the component tree simple and split out reusable pieces like filters, tables, and modal actions.',
          'That approach keeps the frontend responsive without turning it into a single oversized component.',
        ],
      },
      {
        heading: '3. Connect the layers with stable contracts',
        paragraphs: [
          'A good full-stack workflow depends on predictable API shapes. Keep request and response formats stable, document them clearly, and avoid leaking implementation details from the database into the UI.',
          'Once the contract is stable, you can change internals without breaking the interface.',
        ],
      },
    ],
    takeaways: [
      'Use Laravel for business logic and persistence.',
      'Use Vue for interactive, component-based screens.',
      'Design the API contract before wiring the UI.',
    ],
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Bootstrap'],
  },
];

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
