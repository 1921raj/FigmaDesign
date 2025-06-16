import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Works from './components/Works';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import './App.css';

function App() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;

      const sectionMap = {
        home: 'expertise',
        about: 'blog',
        projects: 'works',
        contact: 'testimonials'
      };

      const targetId = sectionMap[hash] || hash;
      const element = document.getElementById(targetId);
      
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
          });
        }, 50);
      }
    };

    // Initial check
    handleHashChange();
    
    // Add event listener
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <section id="expertise"><Expertise /></section>
      <section id="works"><Works /></section>
      <Experience />
      <section id="blog"><Blog /></section>
      <section id="testimonials"><Testimonials /></section>
    </div>
  );
}

export default App;