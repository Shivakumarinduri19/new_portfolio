
import React, { useState, useEffect } from 'react';

const Header = (): React.ReactNode => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Geo-AI', href: '#geo-ai' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-light-navy/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center">
        <a href="#" className="text-green text-2xl font-mono font-bold hover:text-green/80 transition-colors">JS.</a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <a key={link.name} href={link.href} className="text-lightest-slate hover:text-green transition-colors duration-300">
              <span className="text-green font-mono text-sm mr-1">0{index + 1}.</span>{link.name}
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="font-mono text-green border border-green rounded px-4 py-2 hover:bg-green-tint transition-colors duration-300">
            Resume
          </a>
        </div>

        {/* Mobile Nav Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-green focus:outline-none z-50 relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-3/4 bg-light-navy p-10 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lightest-slate hover:text-green transition-colors duration-300 text-lg">
                    <span className="block text-green font-mono text-sm">0{index + 1}.</span>{link.name}
                </a>
              </li>
            ))}
            <li>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-8 font-mono text-green border border-green rounded px-6 py-3 hover:bg-green-tint transition-colors duration-300">
                    Resume
                </a>
            </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
