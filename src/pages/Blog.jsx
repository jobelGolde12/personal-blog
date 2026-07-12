import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock3, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../content/blogPosts';

export default function Blog() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const featuredPost = blogPosts[0];
  const additionalPosts = blogPosts.slice(1);

  const formatDate = (dateStr) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  return (
    <div className='min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.10),_transparent_32%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_45%,_#eff6ff_100%)]'>
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className='mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:px-8'
      >
        <div className='mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur'>
          Blog & Articles
        </div>
        <h1 className='text-5xl font-bold tracking-tight text-slate-900 md:text-6xl'>
          Insights for building better web apps
        </h1>
        <p className='mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl'>
          Practical notes on React, Tailwind CSS, code quality, and full-stack
          development, written to be useful in real projects.
        </p>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8'
      >
        <motion.article
          variants={itemVariants}
          className='mb-8 overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-sm backdrop-blur'
        >
          <div className='grid gap-0 lg:grid-cols-[0.9fr_1.1fr]'>
            <div className='flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-10 text-left text-white'>
              <div>
                <div className='mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100'>
                  Featured Article
                </div>
                <h2 className='text-3xl font-bold leading-tight md:text-4xl'>
                  {featuredPost.title}
                </h2>
                <p className='mt-4 max-w-xl text-sm leading-7 text-slate-200 md:text-base'>
                  {featuredPost.excerpt}
                </p>
                <div className='mt-6 flex flex-wrap gap-2'>
                  {featuredPost.technologies.map((tech) => (
                    <span key={tech} className='rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className='p-8 sm:p-10'>
              <div className='flex flex-wrap items-center gap-3 text-sm text-slate-500'>
                <span className='rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700'>{featuredPost.category}</span>
                <span className='flex items-center gap-1'><Clock3 size={15} /> {featuredPost.readTime}</span>
              </div>
              <div className='mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-600'>
                <div className='flex items-center gap-2'><User size={16} /> {featuredPost.author}</div>
                <div className='flex items-center gap-2'><Calendar size={16} /> {formatDate(featuredPost.date)}</div>
              </div>
              <p className='mt-6 text-base leading-7 text-slate-600'>{featuredPost.intro}</p>
              <Link
                to={`/blog/${featuredPost.slug}`}
                className='mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800'
              >
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.article>

        <div className='grid gap-6 md:grid-cols-2'>
          {additionalPosts.map((post) => (
            <motion.article
              key={post.slug}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className='group rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-[0_18px_50px_rgba(15,23,42,0.10)]'
            >
              <div className='flex flex-wrap items-center gap-3 text-sm text-slate-500'>
                <span className='rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700'>{post.category}</span>
                <span className='flex items-center gap-1'><Clock3 size={15} /> {post.readTime}</span>
              </div>

              <h2 className='mt-4 text-2xl font-bold text-slate-900 transition-colors group-hover:text-blue-700'>
                {post.title}
              </h2>

              <p className='mt-3 text-sm leading-7 text-slate-600'>
                {post.excerpt}
              </p>

              <div className='mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-600'>
                <div className='flex items-center gap-2'><User size={16} /> {post.author}</div>
                <div className='flex items-center gap-2'><Calendar size={16} /> {formatDate(post.date)}</div>
              </div>

              <Link
                to={`/blog/${post.slug}`}
                className='mt-6 inline-flex items-center gap-2 font-semibold text-blue-700 transition-all duration-200 hover:gap-3 hover:text-blue-800'
              >
                Read More <ArrowRight size={18} />
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
