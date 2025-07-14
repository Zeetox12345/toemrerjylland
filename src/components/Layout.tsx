
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import ScrollToTop from './ScrollToTop';
import Footer from './Footer';
import MobileCallButton from './MobileCallButton';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileCallButton />
    </div>
  );
};

export default Layout;
