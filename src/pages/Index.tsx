
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Portfolio from '../components/sections/Portfolio';
import Blog from '../components/sections/Blog';
import SocialLinks from '../components/sections/SocialLinks';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Blog />
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default Index;
