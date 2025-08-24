
import React from 'react';
import SectionHeader from './SectionHeader';
import { PROJECTS } from '../constants';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="group relative flex flex-col bg-light-navy rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-green-tint">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity"/>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-bold text-xl text-lightest-slate group-hover:text-green transition-colors">{project.title}</h3>
            <p className="mt-2 text-slate text-sm flex-grow">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono bg-lightest-navy text-green px-2 py-1 rounded">{tag}</span>
                ))}
            </div>
            <div className="mt-6 flex items-center space-x-4 text-lightest-slate">
                {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                )}
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                )}
            </div>
        </div>
    </div>
);

const Projects = (): React.ReactNode => {
  return (
    <section id="projects" className="py-24">
      <SectionHeader number="3" title="Things I've Built" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
