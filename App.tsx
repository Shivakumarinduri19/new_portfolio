
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GeoAI from './components/GeoAI';
import Contact from './components/Contact';

function App(): React.ReactNode {
  return (
    <div className="bg-navy font-sans text-slate leading-relaxed antialiased">
      <Header />
      <main className="container mx-auto px-6 md:px-12 lg:px-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GeoAI />
        <Contact />
      </main>
    </div>
  );
}

export default App;
