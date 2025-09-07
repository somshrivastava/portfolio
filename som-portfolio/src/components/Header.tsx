'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, Code, Mail, Download, Menu, X } from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  currentPage: number;
}

const Header = ({ currentPage }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pages = [
    { id: 'hero', title: 'Home', icon: Home, href: '/' },
    { id: 'experience', title: 'Experience', icon: Briefcase, href: '/experience' },
    { id: 'projects', title: 'Projects', icon: Code, href: '/projects' },
    { id: 'contact', title: 'Contact', icon: Mail, href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-600/30 bg-primary"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center cursor-pointer"
            >
              <span className="text-slate-200 font-semibold font-mono hidden sm:block">Som Shrivastava</span>
              <span className="text-slate-200 font-semibold font-mono sm:hidden">Som</span>
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {pages.map((page, index) => (
              <Link key={page.id} href={page.href}>
                <motion.div
                  whileHover={{ y: -1 }}
                  className={`flex items-center gap-1 lg:gap-2 px-1 py-2 transition-smooth font-mono text-xs lg:text-sm cursor-pointer ${
                    currentPage === index
                      ? 'text-blue-400'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <page.icon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  <span>{page.title}</span>
                </motion.div>
              </Link>
            ))}
            
            <motion.a
              href="/resume.pdf"
              download="Som_Shrivastava_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 lg:gap-2 px-2 lg:px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded transition-smooth font-mono text-xs lg:text-sm border border-blue-500"
            >
              <Download className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
              <span>Resume</span>
            </motion.a>
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 transition-smooth"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </motion.button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-700/50">
        <motion.div
          className="h-full bg-blue-400"
          initial={{ width: '0%' }}
          animate={{ width: `${((currentPage + 1) / pages.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden border-t border-slate-600/30 bg-primary"
          >
            <div className="px-4 py-4 space-y-2">
              {pages.map((page, index) => (
                <Link key={page.id} href={page.href} onClick={() => setIsMobileMenuOpen(false)}>
                  <motion.div
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-smooth font-mono text-sm ${
                      currentPage === index
                        ? 'text-blue-400 bg-blue-600/20'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
                    }`}
                  >
                    <page.icon className="w-5 h-5" />
                    <span>{page.title}</span>
                  </motion.div>
                </Link>
              ))}
              
              <motion.a
                href="/resume.pdf"
                download="Som_Shrivastava_Resume.pdf"
                className="w-full flex items-center gap-3 px-3 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-smooth font-mono text-sm border border-blue-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Download className="w-5 h-5" />
                <span>Resume</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
