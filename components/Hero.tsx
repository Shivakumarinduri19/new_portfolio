
import React from 'react';

const Hero = (): React.ReactNode => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl">
        <p className="text-green font-mono mb-4 text-md md:text-lg">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lightest-slate">Jane Spatiale.</h1>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate">I build things with maps and data.</h2>
        <p className="mt-6 max-w-xl text-slate text-base md:text-lg">
          I'm a geoinformatics specialist passionate about leveraging spatial data and technology to solve real-world environmental and urban challenges. Currently, I'm focused on developing innovative solutions using remote sensing and web GIS.
        </p>
        <a
          href="#contact"
          className="inline-block mt-8 font-mono text-green border border-green rounded px-8 py-4 hover:bg-green-tint transition-colors duration-300 text-lg"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
