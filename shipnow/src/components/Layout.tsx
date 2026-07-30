import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function Layout({ children, title }: LayoutProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 375);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 375);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('drawer-open', drawerOpen);
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div className="shell">
      <Sidebar isOpen={drawerOpen} onClose={closeDrawer} />
      <main className="main">
        {isMobile && (
          <div className="app-bar">
            <button className="hamburger" type="button" onClick={() => setDrawerOpen(true)} aria-label="Open navigation" />
            <div className="app-bar-title">{title}</div>
            <div style={{ width: 38 }} />
          </div>
        )}
        {children}
        <footer className="page-footer">
          <div>Copyright © 2026 Peterdraw. All rights reserved.</div>
          <div className="ghost-row">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
