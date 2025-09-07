'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  
  const getCurrentPage = () => {
    switch (pathname) {
      case '/':
        return 0;
      case '/experience':
        return 1;
      case '/projects':
        return 2;
      case '/contact':
        return 3;
      default:
        return 0;
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-primary">
      <Header currentPage={getCurrentPage()} />
      <div className={pathname === '/' ? "pt-0" : "pt-16"}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
