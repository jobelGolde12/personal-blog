import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Code2, Loader2, Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    value: '09930543293',
    href: 'tel:+639930543293',
    note: 'Best for urgent inquiries',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'jobelgolde43@gmail.com',
    href: 'mailto:jobelgolde43@gmail.com',
    note: 'For projects, collaboration, and proposals',
  },
  {
    icon: Code2,
    title: 'GitHub',
    value: 'github.com/jobelGolde12',
    href: 'https://github.com/jobelGolde12',
    note: 'Source code and project history',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    try {
      const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

      if (!formEndpoint) {
        setError(
          'Form service is not configured yet. Please email me directly at jobelgolde43@gmail.com.',
        );
        setSending(false);
        return;
      }

      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || `Server responded with ${response.status}`);
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error('Form error:', err);
      setError(
        'Failed to send message. Please try again or email me directly at jobelgolde43@gmail.com.',
      );
    } finally {
      setSending(false);
    }
  };

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

  return (
    <div id="contact" className="editorial-page relative overflow-hidden">
      <SEO
        title="Contact"
        description="Get in touch with Jobel V. Golde for projects, collaboration, and proposals. Reach out via phone, email, or GitHub."
        canonical="https://jobelgolde.com/contact"
      />

      <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-accent/8 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-16 h-80 w-80 rounded-full bg-muted/15 blur-3xl" />

      <motion.section
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="editorial-container relative py-16 text-center md:py-20"
      >
        <div className="editorial-eyebrow mx-auto mb-6">
          <Send size={14} strokeWidth={1.5} /> Contact Details
        </div>
        <h1 className="editorial-title text-5xl md:text-6xl">
          Get In Touch
        </h1>
        <p className="editorial-lead mx-auto mt-6">
          Reach out through the contact options below. These details match the
          footer and point to the same live channels.
        </p>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="editorial-container relative grid gap-8 pb-20 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="editorial-card p-8">
            <h2 className="font-display text-2xl font-medium text-text">Contact Information</h2>
            <p className="mt-2 text-text-secondary">
              Choose the channel that fits your message best.
            </p>

            <div className="mt-8 space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                const isExternal = method.href.startsWith('http');

                return (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className="group flex items-start gap-4 rounded-sm border border-border bg-bg/40 p-4 transition-all duration-300 hover:border-accent/35 hover:bg-card"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-border text-accent transition-transform duration-300 group-hover:scale-105">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-medium text-text">
                          {method.title}
                        </h3>
                        {isExternal && (
                          <ArrowUpRight
                            size={16}
                            strokeWidth={1.5}
                            className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                          />
                        )}
                      </div>
                      <p className="mt-1 break-all text-base font-medium text-text-secondary">
                        {method.value}
                      </p>
                      <p className="mt-1 text-sm text-muted">{method.note}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ['Phone', 'Direct call link'],
              ['Email', 'Mail client opens'],
              ['GitHub', 'External profile link'],
            ].map(([label, value]) => (
              <div key={label} className="editorial-card p-5">
                <div className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
                  {label}
                </div>
                <div className="mt-2 text-sm font-medium text-text-secondary">{value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="editorial-card p-8">
          <h2 className="font-display text-2xl font-medium text-text">Send a Message</h2>
          <p className="mt-2 text-text-secondary">
            This form stays available if you want to leave a quick note.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 rounded-sm border border-accent/30 bg-accent/10 p-6 text-center"
            >
              <CheckCircle2 className="mx-auto h-8 w-8 text-accent" strokeWidth={1.5} />
              <p className="mt-2 text-lg font-medium text-text">
                Message sent successfully!
              </p>
              <p className="mt-1 text-text-secondary">
                I'll get back to you as soon as possible.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Subject' },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="mb-2 block text-sm font-medium text-text-secondary">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    required
                    className="editorial-input"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-secondary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="editorial-input resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-sm border border-red-900/50 bg-red-950/40 px-4 py-3 text-sm text-red-200"
                >
                  {error}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={sending ? {} : { y: -1 }}
                whileTap={sending ? {} : { scale: 0.98 }}
                className="editorial-btn editorial-btn-primary group w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? (
                  <>
                    <Loader2 size={18} className="animate-spin" strokeWidth={1.5} />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send
                      size={16}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </motion.section>
    </div>
  );
}
