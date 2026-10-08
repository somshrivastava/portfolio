'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, Code, Mail, Download, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: number;
}

const Header = ({ currentPage }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pages = [
    { id: 'home', title: 'Home', icon: Home, href: '#home' },
    { id: 'experience', title: 'Experience', icon: Briefcase, href: '#experience' },
    { id: 'projects', title: 'Projects', icon: Code, href: '#projects' },
    { id: 'contact', title: 'Contact', icon: Mail, href: '#contact' },
  ];

  const handleHashLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href || !href.startsWith('#')) return;
    // Allow modifier keys to work (open in new tab, etc.)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      const header = document.querySelector('header');
      const headerHeight = header ? (header as HTMLElement).offsetHeight : 0;
      const rect = el.getBoundingClientRect();
      const targetY = window.scrollY + rect.top - headerHeight - 8; // small gap
      window.scrollTo({ top: targetY, behavior: 'smooth' });
      // update the hash without jumping
      history.replaceState(null, '', href);
    } else {
      // fallback: set the hash so browser can try to navigate
      window.location.hash = href;
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#ece4e1] bg-[#f7f5f3]/90 backdrop-blur-sm"
    >
      <div className="section-shell py-3">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/profile-pic.jpg"
              alt="Som Shrivastava"
              className="h-9 w-9 rounded-full object-cover border border-[#ebe2df]"
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1d2a2a]">
              Som
            </span>
          </a>

          <nav className="hidden items-center gap-6 md:flex lg:gap-8">
            {pages.map((page, index) => (
              <a key={page.id} href={page.href} onClick={(e) => handleHashLink(e, page.href)}>
                <motion.div
                  whileHover={{ y: -1 }}
                  className={`flex items-center gap-2 px-1 py-2 text-xs font-medium sm:text-sm ${
                    currentPage === index ? 'text-[#1d2a2a]' : 'text-[#5f6767] hover:text-[#1d2a2a]'
                  }`}
                >
                  <page.icon className="h-3.5 w-3.5" />
                  <span>{page.title}</span>
                </motion.div>
              </a>
            ))}

            <motion.a
              href="/resume.pdf"
              download="Som_Shrivastava_Resume.pdf"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 rounded-full border border-[#e7e0dd] bg-white px-4 py-2 text-xs font-semibold text-[#1d2a2a]"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </motion.a>
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-[#e8e1df] bg-white p-2 text-slate-700 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="border-t border-[#eee7e4] bg-white md:hidden"
          >
            <div className="section-shell space-y-2 py-4">
              {pages.map((page, index) => (
                <a
                  key={page.id}
                  href={page.href}
                  onClick={(e) => {
                    handleHashLink(e, page.href);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <motion.div
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium ${
                      currentPage === index ? 'bg-[#eff6ff] text-[#1d4ed8]' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <page.icon className="h-4 w-4" />
                    <span>{page.title}</span>
                  </motion.div>
                </a>
              ))}

              <motion.a
                href="/resume.pdf"
                download="Som_Shrivastava_Resume.pdf"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#f3f8f7] px-4 py-3 text-sm font-semibold text-[#1d2a2a]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Download className="h-4 w-4" />
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
