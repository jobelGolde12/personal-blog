import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Code2, Loader2, Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';

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
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.10),_transparent_35%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_48%,_#eff6ff_100%)]'>
      <div className='pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl' />
      <div className='pointer-events-none absolute right-0 bottom-16 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl' />

      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className='relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:px-8'
      >
        <div className='mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur'>
          <Send size={16} /> Contact Details
        </div>
        <h1 className='text-5xl font-bold tracking-tight text-slate-900 md:text-6xl'>
          Get In Touch
        </h1>
        <p className='mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl'>
          Reach out through the contact options below. These details match the
          footer and point to the same live channels.
        </p>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='relative mx-auto grid max-w-6xl gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8'
      >
        <motion.div variants={itemVariants} className='space-y-6'>
          <div className='rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur'>
            <h2 className='text-2xl font-bold text-slate-900'>Contact Information</h2>
            <p className='mt-2 text-slate-600'>
              Choose the channel that fits your message best.
            </p>

            <div className='mt-8 space-y-4'>
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
                    whileHover={{ x: 8 }}
                    className='group flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50/70 hover:shadow-md'
                  >
                    <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white transition-transform duration-200 group-hover:scale-105'>
                      <Icon size={22} />
                    </div>
                    <div className='min-w-0 flex-1'>
                      <div className='flex items-center gap-2'>
                        <h3 className='text-lg font-semibold text-slate-900'>
                          {method.title}
                        </h3>
                        {isExternal && (
                          <ArrowUpRight size={16} className='text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
                        )}
                      </div>
                      <p className='mt-1 break-all text-base font-medium text-slate-700'>
                        {method.value}
                      </p>
                      <p className='mt-1 text-sm text-slate-500'>{method.note}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className='grid gap-4 sm:grid-cols-3'>
            {[
              ['Phone', 'Direct call link'],
              ['Email', 'Mail client opens'],
              ['GitHub', 'External profile link'],
            ].map(([label, value]) => (
              <div key={label} className='rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur'>
                <div className='text-sm font-semibold uppercase tracking-[0.18em] text-slate-500'>
                  {label}
                </div>
                <div className='mt-2 text-sm font-medium text-slate-900'>{value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className='rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur'>
          <h2 className='text-2xl font-bold text-slate-900'>Send a Message</h2>
          <p className='mt-2 text-slate-600'>
            This form stays available if you want to leave a quick note.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className='mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center'
            >
              <CheckCircle2 className='mx-auto h-8 w-8 text-emerald-500' />
              <p className='mt-2 text-lg font-semibold text-emerald-700'>
                Message sent successfully!
              </p>
              <p className='mt-1 text-emerald-600'>
                I’ll get back to you as soon as possible.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className='mt-8 space-y-4'>
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Subject' },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className='mb-2 block text-sm font-medium text-slate-700'>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    required
                    className='w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100'
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div>
                <label htmlFor='message' className='mb-2 block text-sm font-medium text-slate-700'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows='6'
                  className='w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100'
                  placeholder='Write your message here...'
                />
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700'
                >
                  {error}
                </motion.div>
              )}

              <motion.button
                type='submit'
                disabled={sending}
                whileHover={sending ? {} : { scale: 1.01 }}
                whileTap={sending ? {} : { scale: 0.98 }}
                className='group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition-all duration-200 hover:bg-slate-800 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60'
              >
                {sending ? (
                  <>
                    <Loader2 size={18} className='animate-spin' />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className='transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
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
