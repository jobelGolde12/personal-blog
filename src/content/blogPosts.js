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
    slug: 'building-dugtong-blood-donor-app-react-native',
    title: 'Building DUGTONG: A Blood Donor App with React Native',
    excerpt:
      'How I built a cross-platform blood donor management app for Sorsogon Province, solving real-world challenges with React Native and Turso.',
    author: 'Jobel V. Golde',
    date: '2024-12-12',
    category: 'Mobile Development',
    readTime: '10 min read',
    intro:
      'When the Province of Sorsogon needed a better way to manage blood donor information, I built DUGTONG — a cross-platform mobile app using React Native and Expo. The project taught me more about offline-first design, real-time data, and mobile UX than any tutorial ever could.',
    sections: [
      {
        heading: 'The problem: paper-based donor tracking',
        paragraphs: [
          'Blood donation management in rural Philippine provinces often relies on paper records and spreadsheets. When a blood drive happens, organizers manually collect donor information, making it difficult to search for specific donors, track donation history, or coordinate urgent requests.',
          'The goal was to build a mobile app that field workers could use on their phones — even with poor connectivity — to register donors, search existing records, and manage appointments.',
        ],
      },
      {
        heading: 'Choosing the right stack',
        paragraphs: [
          'I chose React Native with Expo because it allowed me to build for both Android and iOS from a single codebase. For the database, I used Turso — an edge database based on libSQL — which provides excellent read performance and offline capabilities.',
          'TypeScript was non-negotiable. In a mobile app where data integrity matters (we are dealing with medical information), type safety prevents entire categories of bugs.',
        ],
      },
      {
        heading: 'Key challenges and solutions',
        paragraphs: [
          'Challenge 1: Offline-first data. Field workers often operate in areas with poor connectivity. I implemented a local-first strategy where data is cached on-device and synced when connectivity returns.',
          'Challenge 2: Real-time search. Donor lookup needed to be fast even with thousands of records. Turso edge queries combined with debounced search input made this performant.',
          'Challenge 3: Cross-platform consistency. Testing on both Android and iOS revealed subtle differences in gesture handling and safe area calculations that required platform-specific adjustments.',
        ],
      },
      {
        heading: 'Results and lessons',
        paragraphs: [
          'The app reduced donor lookup time by approximately 60% compared to spreadsheet searches. Field workers could register donors in under 30 seconds, and the search functionality worked reliably even on older devices.',
          'The biggest lesson: mobile development is about constraints. Every design decision must account for small screens, slow networks, and touch-first interaction. Building for the worst case first makes the happy case effortless.',
        ],
      },
    ],
    takeaways: [
      'Offline-first design is essential for mobile apps in areas with poor connectivity.',
      'TypeScript prevents data integrity issues in medical/critical applications.',
      'Edge databases like Turso provide excellent performance for read-heavy mobile apps.',
      'Test on real devices early — simulators miss important UX issues.',
    ],
    technologies: ['React Native', 'Expo', 'Turso', 'TypeScript'],
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
    slug: 'debugging-performance-bottlenecks-react-apps',
    title: 'Debugging Performance Bottlenecks in React Applications',
    excerpt:
      'A practical guide to identifying and fixing the most common performance issues in React apps, from unnecessary rerenders to slow data fetching.',
    author: 'Jobel V. Golde',
    date: '2024-12-08',
    category: 'Performance',
    readTime: '9 min read',
    intro:
      'Performance problems in React apps rarely come from a single dramatic cause. They accumulate from small decisions — a component that rerenders too often, a state update that triggers cascading changes, or a network request that blocks the main thread.',
    sections: [
      {
        heading: '1. Identify the real bottleneck first',
        paragraphs: [
          'Before optimizing anything, measure. React DevTools Profiler shows exactly which components rerender and why. Chrome DevTools Performance panel reveals layout thrashing and long tasks.',
          'I once spent hours memoizing components that were not the problem. The actual bottleneck was a single useEffect that re-fetched data on every render because of an unstable dependency.',
        ],
      },
      {
        heading: '2. Fix unnecessary rerenders',
        paragraphs: [
          'The most common performance issue in React is components rerendering when their props have not meaningfully changed. Use React.memo for expensive components, useMemo for costly calculations, and useCallback for stable function references.',
          'But do not memoize everything — the overhead of memoization can exceed the cost of occasional rerenders. Profile first, optimize second.',
        ],
      },
      {
        heading: '3. Manage state placement carefully',
        paragraphs: [
          'Lifting state too high causes entire subtrees to rerender. Keeping state too local causes prop drilling. The sweet spot is colocating state as close to where it is used as possible, and only lifting it when multiple components need the same data.',
          'For global state, consider whether you truly need a state management library or whether React context with proper splitting would suffice.',
        ],
      },
      {
        heading: '4. Optimize data fetching',
        paragraphs: [
          'Waterfall requests — where one fetch triggers another — are a common cause of slow page loads. Where possible, fetch data in parallel or use server-side data loading.',
          'For client-side fetching, implement proper caching, deduplication, and stale-while-revalidate patterns. Libraries like TanStack Query handle this well.',
        ],
      },
    ],
    takeaways: [
      'Always measure before optimizing — do not guess at bottlenecks.',
      'Use React DevTools Profiler to identify expensive rerenders.',
      'Memoize selectively — not everything needs to be memoized.',
      'Avoid waterfall data fetching by parallelizing independent requests.',
    ],
    technologies: ['React', 'Performance', 'DevTools', 'Profiling'],
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
    slug: 'building-real-time-inventory-system-nextjs',
    title: 'Building a Real-Time Inventory System with Next.js and Turso',
    excerpt:
      'How I built a school inventory management system with real-time updates, Server Actions, and edge database performance using Next.js and Turso.',
    author: 'Jobel V. Golde',
    date: '2024-12-01',
    category: 'Next.js',
    readTime: '11 min read',
    intro:
      'School inventory management is a problem that sounds simple until you try to build it. Multiple users need to update stock levels simultaneously, reports need to reflect real-time data, and the system must work reliably on school networks that are not always stable.',
    sections: [
      {
        heading: 'Why Next.js and Turso?',
        paragraphs: [
          'Next.js App Router provides excellent developer experience with Server Components and Server Actions. Turso, an edge database built on libSQL, offers low-latency reads that make real-time features feel instant.',
          'The combination meant I could build a full-stack application without managing separate frontend and backend deployments.',
        ],
      },
      {
        heading: 'Implementing real-time updates',
        paragraphs: [
          'True real-time requires WebSockets or Server-Sent Events, but for an inventory system, a polling strategy with smart caching was sufficient and much simpler to implement.',
          'I used Next.js revalidation to refresh data at regular intervals, combined with optimistic updates for user actions. This gave the perception of real-time updates without the complexity of WebSocket management.',
        ],
      },
      {
        heading: 'Server Actions for form handling',
        paragraphs: [
          'Next.js Server Actions simplified form handling dramatically. Instead of creating API endpoints and wiring up fetch calls, I could define server functions directly and call them from client components.',
          'The key insight: Server Actions work best for mutations (create, update, delete) while Server Components handle reads. This separation kept the code clean and the data flow predictable.',
        ],
      },
      {
        heading: 'Challenges with multi-user editing',
        paragraphs: [
          'The hardest problem was handling concurrent edits. When two staff members try to update the same inventory item simultaneously, you need conflict resolution. I implemented a simple versioning strategy where the last write wins, with a visual indicator when data has been refreshed.',
          'For a school inventory system, this pragmatic approach worked well. Enterprise solutions would use operational transformation, but that level of complexity was not justified here.',
        ],
      },
    ],
    takeaways: [
      'Server Actions simplify form handling in Next.js dramatically.',
      'Polling with smart caching can provide "real-time" feel without WebSocket complexity.',
      'Edge databases like Turso excel at read-heavy applications.',
      'Choose conflict resolution strategies that match your use case — not every app needs Google Docs-level collaboration.',
    ],
    technologies: ['Next.js', 'Turso', 'Server Actions', 'TypeScript'],
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
  {
    slug: 'from-student-to-developer-lessons-from-internship',
    title: 'From Student to Developer: Lessons from My Internship',
    excerpt:
      'What I learned during my IT internship — from building real systems to understanding how professional development differs from academic projects.',
    author: 'Jobel V. Golde',
    date: '2024-11-25',
    category: 'Career',
    readTime: '7 min read',
    intro:
      'My internship at a school in Sorsogon was where classroom knowledge met real-world constraints. Building an Account Code System for the accounting office taught me more about software development than any course project ever did.',
    sections: [
      {
        heading: 'The gap between academic and professional development',
        paragraphs: [
          'In school, you build projects for grades. In a professional setting, you build systems for people who depend on them daily. The stakes are different, the requirements are messier, and the users have opinions.',
          'The biggest adjustment was learning that "it works" is not the same as "it is ready." Testing, documentation, edge cases, and user feedback all matter in ways that academic projects rarely require.',
        ],
      },
      {
        heading: 'Building the Account Code System',
        paragraphs: [
          'The school needed a way to manage accounting categories for various transactions. I built this using Next.js, Tailwind CSS, and Turso — a stack I chose for its speed and developer experience.',
          'The system needed to handle CRUD operations for account codes, support search and filtering, and generate reports for the accounting office. Simple requirements, but implementing them in a way that non-technical staff could use required careful UI design.',
        ],
      },
      {
        heading: 'Working with non-technical stakeholders',
        paragraphs: [
          'The hardest part was not the code — it was understanding what the accounting staff actually needed. Their initial requests were vague, and translating "we need a better system" into specific features required patient conversation and prototyping.',
          'I learned to show, not tell. Instead of asking "what features do you want?", I built quick prototypes and asked "does this help?". The feedback was always more useful than the original requirements.',
        ],
      },
      {
        heading: 'Lessons that stuck',
        paragraphs: [
          'Professional development is 40% coding and 60% communication. Understanding the problem, managing expectations, and documenting your work are just as important as writing clean code.',
          'I also learned that simplicity is a feature. The accounting staff did not need a fancy dashboard — they needed a reliable tool that worked every time and did exactly what they expected.',
        ],
      },
    ],
    takeaways: [
      'Show prototypes to stakeholders instead of asking abstract questions.',
      'Simplicity is a feature — users need reliability over complexity.',
      'Documentation and communication are professional development skills, not afterthoughts.',
      'The gap between "it works" and "it is ready" is where professionalism lives.',
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Turso', 'TypeScript'],
  },
];

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
