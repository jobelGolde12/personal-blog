import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock3, User } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getBlogPostBySlug } from '../content/blogPosts';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <Navigate to='/blog' replace />;
  }

  const formatDate = (dateStr) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  return (
    <div className='min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.10),_transparent_32%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_45%,_#eff6ff_100%)]'>
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className='mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8'
      >
        <Link
          to='/blog'
          className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition-all duration-200 hover:border-blue-200 hover:text-blue-700'
        >
          <ArrowLeft size={16} /> Back to blog
        </Link>

        <div className='mt-8 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700'>
          {post.category}
        </div>

        <h1 className='mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl'>
          {post.title}
        </h1>

        <div className='mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-600'>
          <div className='flex items-center gap-2'><User size={16} /> {post.author}</div>
          <div className='flex items-center gap-2'><Calendar size={16} /> {formatDate(post.date)}</div>
          <div className='flex items-center gap-2'><Clock3 size={16} /> {post.readTime}</div>
        </div>

        <div className='mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-sm backdrop-blur'>
          <div className='border-b border-slate-100 bg-gradient-to-r from-slate-900 to-blue-900 p-8 text-white md:p-10'>
            <p className='max-w-3xl text-base leading-8 text-slate-200 md:text-lg'>
              {post.excerpt}
            </p>
          </div>

          <div className='space-y-8 p-8 md:p-10'>
            <p className='text-base leading-8 text-slate-700 md:text-lg'>
              {post.intro}
            </p>

            {post.sections.map((section) => (
              <section key={section.heading} className='space-y-3'>
                <h2 className='text-2xl font-bold text-slate-900'>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className='text-base leading-8 text-slate-700'>
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <section className='rounded-2xl border border-blue-100 bg-blue-50/70 p-6'>
              <h2 className='text-xl font-bold text-slate-900'>Key Takeaways</h2>
              <ul className='mt-4 space-y-3 text-slate-700'>
                {post.takeaways.map((takeaway) => (
                  <li key={takeaway} className='flex gap-3'>
                    <span className='mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600' />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className='text-xl font-bold text-slate-900'>Topics Covered</h2>
              <div className='mt-4 flex flex-wrap gap-2'>
                {post.technologies.map((item) => (
                  <span key={item} className='rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700'>
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
