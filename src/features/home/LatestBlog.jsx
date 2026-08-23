import { motion } from 'framer-motion';
import { ArrowRight, Clock3, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../content/blogPosts';

export default function LatestBlog() {
  const latestPosts = blogPosts.slice(0, 3);

  const formatDate = (dateStr) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  return (
    <section className="py-16 md:py-20 border-t border-border">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
        >
          <div>
            <div className="editorial-eyebrow mb-4">Latest Insights</div>
            <h2 className="editorial-section-title">From the Blog</h2>
            <p className="editorial-lead">
              Practical notes on React, Tailwind CSS, and full-stack development
            </p>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-accent transition-all duration-200 hover:gap-3 hover:text-[#e6c98a] cursor-pointer"
          >
            View All Posts <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {latestPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="editorial-card group p-6 cursor-pointer"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted mb-4">
                <span className="editorial-chip text-accent">{post.category}</span>
                <span className="flex items-center gap-1.5">
                  <Clock3 size={14} strokeWidth={1.5} /> {post.readTime}
                </span>
              </div>

              <h3 className="font-display text-xl font-medium text-text group-hover:text-accent transition-colors duration-200 mb-3">
                {post.title}
              </h3>

              <p className="text-sm leading-7 text-text-secondary mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 text-xs text-muted">
                <Calendar size={14} strokeWidth={1.5} />
                {formatDate(post.date)}
              </div>

              <Link
                to={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-accent transition-all duration-200 hover:gap-3 hover:text-[#e6c98a] cursor-pointer"
              >
                Read More <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
