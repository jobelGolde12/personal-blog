import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock3, User } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getBlogPostBySlug } from '../content/blogPosts';
import SEO from '../components/SEO';
import { ArticleJsonLd } from '../components/JsonLd';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateStr) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  return (
    <div className="editorial-page">
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={`https://jobelgolde.com/blog/${post.slug}`}
        ogType="article"
        article={{
          publishedTime: post.date,
          author: post.author,
          tags: post.technologies,
        }}
      />
      <ArticleJsonLd post={post} />

      <motion.section
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 rounded-sm border border-border bg-card/60 px-4 py-2 text-sm font-medium text-text-secondary backdrop-blur transition-all duration-300 hover:border-accent/40 hover:text-accent"
        >
          <ArrowLeft size={16} strokeWidth={1.5} /> Back to blog
        </Link>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-accent">
          {post.category}
        </div>

        <h1 className="editorial-title mt-5 text-4xl md:text-5xl">
          {post.title}
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted">
          <div className="flex items-center gap-2">
            <User size={16} strokeWidth={1.5} /> {post.author}
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} strokeWidth={1.5} /> {formatDate(post.date)}
          </div>
          <div className="flex items-center gap-2">
            <Clock3 size={16} strokeWidth={1.5} /> {post.readTime}
          </div>
        </div>

        <div className="editorial-card mt-10 overflow-hidden">
          <div className="border-b border-border bg-bg-secondary/80 p-8 md:p-10">
            <p className="max-w-3xl text-base leading-8 text-text-secondary md:text-lg">
              {post.excerpt}
            </p>
          </div>

          <div className="space-y-8 p-8 md:p-10">
            <p className="text-base leading-8 text-text-secondary md:text-lg">
              {post.intro}
            </p>

            {post.sections.map((section) => (
              <section key={section.heading} className="space-y-3">
                <h2 className="font-display text-2xl font-medium text-text">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-text-secondary">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <section className="rounded-sm border border-border bg-bg/50 p-6">
              <h2 className="font-display text-xl font-medium text-text">Key Takeaways</h2>
              <ul className="mt-4 space-y-3 text-text-secondary">
                {post.takeaways.map((takeaway) => (
                  <li key={takeaway} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-medium text-text">Topics Covered</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.technologies.map((item) => (
                  <span key={item} className="editorial-chip">
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
