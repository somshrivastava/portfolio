'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Home from './sections/Home';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const FullScreenPortfolio = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const pages = [
    { id: 'home', component: Home, title: 'Home' },
    { id: 'experience', component: Experience, title: 'Experience' },
    { id: 'projects', component: Projects, title: 'Projects' },
    { id: 'contact', component: Contact, title: 'Contact' },
  ];

  const goToPage = (pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < pages.length && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentPage(pageIndex);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      goToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      goToPage(currentPage - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        nextPage();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        prevPage();
      } else if (e.key >= '1' && e.key <= '6') {
        e.preventDefault();
        goToPage(parseInt(e.key) - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isTransitioning]);

  useEffect(() => {
    let startY = 0;
    let endY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      endY = e.changedTouches[0].clientY;
      const diff = startY - endY;
      const threshold = 50;

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          nextPage();
        } else {
          prevPage();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentPage, isTransitioning]);

  const CurrentComponent = pages[currentPage].component;

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-primary">
      <Header currentPage={currentPage}/>

      <div className={currentPage === 0 ? "pt-0" : "pt-16"}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <CurrentComponent />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FullScreenPortfolio;
