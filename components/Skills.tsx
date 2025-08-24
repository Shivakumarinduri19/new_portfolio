
import React from 'react';
import SectionHeader from './SectionHeader';
import { SKILLS } from '../constants';

const Skills = (): React.ReactNode => {
  return (
    <section id="skills" className="py-24">
      <SectionHeader number="2" title="My Skills" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((category) => (
          <div key={category.name} className="bg-light-navy p-6 rounded-lg shadow-lg hover:shadow-green-tint transition-shadow duration-300">
            <h3 className="font-bold text-green mb-4 text-lg">{category.name}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center text-light-slate font-mono text-sm">
                  <svg className="w-4 h-4 mr-3 text-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
