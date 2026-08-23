import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock3, User, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../content/blogPosts';
import SEO from '../components/SEO';

export default function Blog() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const featuredPost = blogPosts[0];
  const additionalPosts = blogPosts.slice(1);

  const formatDate = (dateStr) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  return (
    <div className="editorial-page">
      <SEO
        title="Blog & Articles"
        description="Practical notes on React, Tailwind CSS, code quality, and full-stack development, written to be useful in real projects."
        canonical="https://jobelgolde.com/blog"
      />

      <motion.section
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="editorial-container py-16 text-center md:py-20"
      >
        <div className="editorial-eyebrow mx-auto mb-6">
          Blog & Articles
        </div>
        <h1 className="editorial-title mx-auto max-w-4xl text-5xl md:text-6xl">
          Insights for building better web apps
        </h1>
        <p className="editorial-lead mx-auto mt-6">
          Practical notes on React, Tailwind CSS, code quality, and full-stack
          development, written to be useful in real projects.
        </p>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="editorial-container pb-20"
      >
        <motion.article
          variants={itemVariants}
          className="editorial-card mb-8 overflow-hidden"
        >
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex items-center justify-center border-b border-border bg-bg-secondary/80 p-10 text-left lg:border-b-0 lg:border-r">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-accent">
                  Featured Article
                </div>
                <h2 className="font-display text-3xl font-medium leading-tight text-text md:text-4xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-text-secondary md:text-base">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredPost.technologies.map((tech) => (
                    <span key={tech} className="editorial-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                <span className="editorial-chip text-accent">{featuredPost.category}</span>
                <span className="flex items-center gap-1.5">
                  <Clock3 size={15} strokeWidth={1.5} /> {featuredPost.readTime}
                </span>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                <div className="flex items-center gap-2">
                  <User size={16} strokeWidth={1.5} /> {featuredPost.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} strokeWidth={1.5} /> {formatDate(featuredPost.date)}
                </div>
              </div>
              <p className="mt-6 text-base leading-8 text-text-secondary">{featuredPost.intro}</p>
              <Link
                to={`/blog/${featuredPost.slug}`}
                className="editorial-btn editorial-btn-primary mt-8 cursor-pointer"
              >
                Read More <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </motion.article>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {additionalPosts.map((post) => (
            <motion.article
              key={post.slug}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="editorial-card group p-6 sm:p-8 cursor-pointer"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                <span className="editorial-chip text-accent">{post.category}</span>
                <span className="flex items-center gap-1.5">
                  <Clock3 size={15} strokeWidth={1.5} /> {post.readTime}
                </span>
              </div>

              <h2 className="mt-5 font-display text-2xl font-medium text-text transition-colors duration-300 group-hover:text-accent">
                {post.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-text-secondary">
                {post.excerpt}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <User size={16} strokeWidth={1.5} /> {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} strokeWidth={1.5} /> {formatDate(post.date)}
                </div>
              </div>

              <Link
                to={`/blog/${post.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-accent transition-all duration-200 hover:gap-3 hover:text-[#e6c98a] cursor-pointer"
              >
                Read More <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
