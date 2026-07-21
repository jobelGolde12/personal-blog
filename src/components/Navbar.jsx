import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '../utils/cn';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/#about', label: 'About' },
  { path: '/blog', label: 'Blog' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [activePath, setActivePath] = useState(
    location.pathname === '/' && location.hash === '#about' ? '/#about' : location.pathname
  );
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path) => activePath === path;

  useEffect(() => {
    if (location.pathname === '/about' || (location.pathname === '/' && location.hash === '#about')) {
      setActivePath('/#about');
    } else {
      setActivePath(location.pathname);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

    const handleScroll = () => {
      const aboutSection = document.querySelector('#about');
      if (!aboutSection) {
        setActivePath('/');
        return;
      }

      const rect = aboutSection.getBoundingClientRect();
      const threshold = 120;

      if (rect.top <= threshold && rect.bottom > threshold) {
        setActivePath('/#about');
      } else {
        setActivePath('/');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -12 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500',
        scrolled
          ? 'border-border bg-bg/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]'
          : 'border-transparent bg-bg/40 backdrop-blur-md'
      )}
    >
      <div className="editorial-container">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex-shrink-0 group" aria-label="Home">
            <motion.img
              src="/jobel_logo.png"
              alt="Jobel logo"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="h-9 w-9 object-contain opacity-95 transition-opacity duration-300 group-hover:opacity-100"
            />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item, i) => (
              <motion.div
                key={item.path}
                custom={i}
                variants={navVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  to={item.path}
                  className={cn(
                    'relative px-3.5 py-2 text-[0.8rem] font-medium tracking-[0.16em] uppercase transition-colors duration-300',
                    isActive(item.path)
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-text'
                  )}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute bottom-0 left-3 right-3 h-px bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 40 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-sm p-2 text-text-secondary transition-colors duration-300 hover:text-accent md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-border bg-bg-secondary/90 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-1 px-1 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'block rounded-sm px-4 py-3 text-sm font-medium tracking-[0.14em] uppercase transition-colors duration-300',
                    isActive(item.path)
                      ? 'bg-card text-accent'
                      : 'text-text-secondary hover:bg-card/60 hover:text-text'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
