Update the **About Page → Academic Projects** section to make each project title interactive by linking it to its corresponding GitHub repository. The implementation should feel polished, modern, and consistent with the overall design of the portfolio.

### Project Links

Use the following URLs:

* **Bulan Lost and Found System**

  * https://github.com/jobelGolde12/bulan_lost_and_found3

* **DUGTONG (Dugo Ko, Tulong Ko)**

  * https://github.com/jobelGolde12/dugtong_app

* **Personal Portfolio and Web Applications**

  * Instead of linking to a single project, direct users to my complete GitHub repositories:
  * https://github.com/jobelGolde12?tab=repositories

### UI & UX Requirements

Create an engaging and professional interaction for each project title.

#### Link Styling

* Keep the project titles visually consistent with the current typography.
* Add a subtle underline animation on hover.
* Change the text color to the portfolio's primary accent color when hovered.
* Display a small external-link icon that smoothly fades in beside the title on hover.
* Use a pointer cursor.
* Ensure smooth transitions (200–300ms) for all hover effects.

#### Hover Tooltip / Popup Banner

When a user hovers over a project title:

* Display a floating popup banner directly above the hovered link.
* Animate the popup with a subtle fade + slide-up effect.
* Include:

  * GitHub icon
  * Repository name
  * Short description
  * "Click to view source code" message
* Add a small arrow pointing toward the hovered link.
* The popup should have:

  * Rounded corners
  * Soft shadow
  * Glassmorphism or modern card appearance
  * Backdrop blur
  * High z-index so it always appears above surrounding content
* The popup must intelligently reposition itself if it would overflow the viewport.

Example content:

**Bulan Lost and Found**

> Web-based Lost & Found Management System built with Laravel, Vue.js, Inertia.js, and MySQL.
>
> **Click to view the source code on GitHub.**

**DUGTONG**

> Blood Donor Profiling & Management System designed for efficient donor information management.
>
> **Click to view the source code on GitHub.**

**Personal Portfolio & Web Applications**

> Explore my complete collection of web development, software engineering, and academic projects.
>
> **Browse all GitHub repositories.**

### Click Behavior

* Open every GitHub link in a new browser tab (`target="_blank"`).
* Include `rel="noopener noreferrer"` for security.
* Preserve the current portfolio session when opening external links.

### Additional Micro-Interactions

Implement premium-quality interactions:

* Slight scale effect (≈1.02–1.05) on hover.
* Soft glowing shadow around the text while hovered.
* Smooth tooltip entrance and exit animations.
* Fade out the external-link icon when the cursor leaves.
* Tooltip should disappear gracefully when the pointer exits.
* Support both mouse and keyboard navigation (`:focus-visible`).
* Display the same popup when the link receives keyboard focus.
* Add subtle touch feedback for mobile devices.
* Respect `prefers-reduced-motion` by reducing or disabling animations.

### Accessibility

* Add descriptive `aria-label` attributes for every project link.
* Ensure sufficient color contrast in both light and dark themes.
* Make every project title fully keyboard accessible.
* Maintain proper semantic HTML (`<a>` elements).

### Responsive Design

* Tooltip should reposition automatically on tablets and mobile devices.
* On smaller screens, display the popup below the link if there isn't enough space above.
* Prevent clipping or overflow near the viewport edges.
* Keep interactions smooth and usable on touch devices.

### Code Quality

* Build this as a reusable React component (e.g., `ProjectLink`) that accepts:

  * Project title
  * Repository URL
  * Description
  * Tooltip content
* Keep the component modular and reusable for future projects.
* Use Tailwind CSS utilities where possible, minimizing custom CSS.
* Ensure animations are performant using CSS transforms and opacity instead of layout-changing properties.

The final result should feel like a polished, premium portfolio experience that encourages visitors and recruiters to explore my GitHub projects while maintaining excellent usability, responsiveness, accessibility, and visual consistency throughout the site.
