'use client';

import { useEffect } from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      const header = document.querySelector('header');
      const headerHeight = header ? (header as HTMLElement).offsetHeight : 0;
      const rect = el.getBoundingClientRect();
      const targetY = window.scrollY + rect.top - headerHeight - 8;
      window.scrollTo({ top: targetY });
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-primary">
      <Header currentPage={0} />
      <div className="pt-16">
        {children}
      </div>
    </div>
  );
};

export default Layout;
