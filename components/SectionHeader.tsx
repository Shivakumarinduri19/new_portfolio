
import React from 'react';

interface SectionHeaderProps {
  number: string;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title }) => {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-lightest-slate flex items-center mb-12 w-full">
      <span className="text-green font-mono mr-4 text-xl md:text-2xl">0{number}.</span>
      {title}
      <span className="flex-grow h-px bg-lightest-navy ml-6"></span>
    </h2>
  );
};

export default SectionHeader;
