import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Works from './components/Works';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Expertise />
      <Works />
      <Experience />
      <Blog />
      <Testimonials />
    </div>
  );
}

export default App;