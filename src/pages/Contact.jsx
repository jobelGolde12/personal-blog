import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'jobel@example.com',
      href: 'mailto:jobel@example.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+63 (123) 456-7890',
      href: 'tel:+63123456789',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bulan, Sorsogon, Philippines',
      href: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have a project in mind or just want to chat? Feel free to reach out!
        </p>
      </motion.section>

      {/* Contact Content */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Contact Information
            </h2>

            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={idx}
                  href={method.href}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors group"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {method.title}
                    </h3>
                    <p className="text-gray-600">{method.value}</p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Follow Me
              </h3>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Mail size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Mail size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
              >
                <p className="text-green-700 font-semibold text-lg">
                  Thank you! Your message has been sent successfully.
                </p>
                <p className="text-green-600 mt-2">
                  I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="your@email.com"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="Subject"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
                >
                  <Send size={18} /> Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
