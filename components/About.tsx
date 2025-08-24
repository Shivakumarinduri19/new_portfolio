
import React from 'react';
import SectionHeader from './SectionHeader';

const About = (): React.ReactNode => {
  return (
    <section id="about" className="py-24">
      <SectionHeader number="1" title="About Me" />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3 text-slate text-lg space-y-4">
          <p>
            Hello! I'm Jane, a geographer and developer with a passion for understanding our world through a spatial lens. My journey into geoinformatics began when I realized the power of combining code with cartography to uncover hidden patterns in environmental data.
          </p>
          <p>
            From analyzing satellite imagery to building interactive web maps, I thrive on turning complex geospatial data into insightful and accessible stories. I'm proficient in the entire GIS pipeline, from data acquisition and processing to analysis and visualization.
          </p>
          <p>
            My goal is to work on projects that have a meaningful impact, whether it's in conservation, climate change adaptation, or sustainable urban planning.
          </p>
        </div>
        <div className="md:col-span-2 relative group w-full max-w-xs mx-auto md:max-w-none">
          <div className="absolute inset-0 bg-green rounded-lg transform transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          <img 
            src="https://picsum.photos/seed/portrait/500/500" 
            alt="Jane Spatiale" 
            className="relative w-full rounded-lg shadow-lg filter grayscale hover:filter-none transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
