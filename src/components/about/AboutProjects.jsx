import { motion } from 'framer-motion';
import ProjectLink from './ProjectLink';

const projects = [
  {
    title: 'Bulan Lost and Found System',
    href: 'https://github.com/jobelGolde12/bulan_lost_and_found3',
    description:
      'Web-based Lost & Found Management System built with Laravel, Vue.js, Inertia.js, and MySQL.',
    body: (
      <p>
        A web-based platform designed to help manage lost-and-found items within
        the community. The system focused on efficient record management, user
        interaction, and secure information handling.
      </p>
    ),
  },
  {
    title: 'DUGTONG (Dugo Ko, Tulong Ko)',
    href: 'https://github.com/jobelGolde12/dugtong_app',
    description:
      'Blood Donor Profiling & Management System designed for efficient donor information management.',
    body: (
      <>
        <p>
          A Blood Donor Profiling and Management System developed to help organize
          donor information and streamline blood donation management for the
          Province of Sorsogon.
        </p>
        <p>
          This project emphasized <span className="linkable-text">database management</span>, user accessibility, and efficient record keeping.
        </p>
      </>
    ),
  },
  {
    title: 'Personal Portfolio and Web Applications',
    href: 'https://github.com/jobelGolde12?tab=repositories',
    description:
      'Explore my complete collection of web development, software engineering, and academic projects.',
    body: (
      <>
        <p>
          I have also developed personal and academic web applications to
          strengthen my experience with modern web technologies, responsive
          design, API integration, and frontend development using{' '}
          <span className="linkable-text">React.js</span> and{' '}
          <span className="linkable-text">Laravel</span>.
        </p>
        <p>
          These projects allowed me to apply best practices in software
          architecture, database integration, debugging, testing, and user
          experience design.
        </p>
      </>
    ),
  },
];

export default function AboutProjects({ itemVariants }) {
  return (
    <motion.div variants={itemVariants} className="mb-20">
      <h2 className="editorial-section-title">Academic Projects</h2>
      <div className="space-y-10">
        {projects.map((project) => (
          <div key={project.title} className="border-t border-border pt-8 first:border-t-0 first:pt-0">
            <h3 className="mb-4 font-display text-2xl font-medium text-text">
              <ProjectLink
                title={project.title}
                href={project.href}
                description={project.description}
                tooltip={{
                  repoName: project.title,
                  description: project.description,
                  cta:
                    project.title === 'Personal Portfolio and Web Applications'
                      ? 'Browse all GitHub repositories.'
                      : 'Click to view the source code on GitHub.',
                }}
              />
            </h3>
            <div className="editorial-content space-y-4">{project.body}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
