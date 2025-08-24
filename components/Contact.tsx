
import React from 'react';
import SectionHeader from './SectionHeader';

const Contact = (): React.ReactNode => {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-green font-mono mb-2">05. What's Next?</h2>
      <h3 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-4">Get In Touch</h3>
      <p className="text-slate max-w-xl mx-auto mb-10">
        I'm currently seeking new opportunities and challenges in the geospatial industry. Whether you have a question, a project idea, or just want to connect, my inbox is always open.
      </p>
      <a
        href="mailto:jane.spatiale@email.com"
        className="inline-block font-mono text-green border border-green rounded px-8 py-4 hover:bg-green-tint transition-colors duration-300 text-lg"
      >
        Say Hello
      </a>
      
      <div className="flex justify-center space-x-6 mt-16 text-slate">
        {/* Social links can be added here */}
        <a href="#" className="hover:text-green transition-colors">GitHub</a>
        <a href="#" className="hover:text-green transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-green transition-colors">Twitter</a>
      </div>

      <footer className="mt-24 text-xs text-slate font-mono">
        <div>Designed & Built by Jane Spatiale</div>
      </footer>
    </section>
  );
};

export default Contact;
