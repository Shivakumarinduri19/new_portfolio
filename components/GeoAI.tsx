
import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { generateGeoProjectIdea } from '../services/geminiService';
import type { GeoAIResponse } from '../services/geminiService';

const LoadingSpinner = () => (
    <div className="flex justify-center items-center space-x-2">
        <div className="w-4 h-4 bg-green rounded-full animate-bounce [animation-delay:-0.3s]"></div>
	    <div className="w-4 h-4 bg-green rounded-full animate-bounce [animation-delay:-0.15s]"></div>
	    <div className="w-4 h-4 bg-green rounded-full animate-bounce"></div>
    </div>
);

const GeoAI = (): React.ReactNode => {
  const [topic, setTopic] = useState('');
  const [idea, setIdea] = useState<GeoAIResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!topic.trim()) {
        setError('Please enter a topic.');
        return;
    }
    setIsLoading(true);
    setError(null);
    setIdea(null);
    try {
      const result = await generateGeoProjectIdea(topic);
      setIdea(result);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="geo-ai" className="py-24">
      <SectionHeader number="4" title="Geo-AI Idea Generator" />
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-slate mb-8">
          Curious about geoinformatics? Enter a topic below (e.g., "wildfire risk", "coastal erosion", "urban mobility") and let AI brainstorm a project idea for you.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter a geoinformatics topic..."
            className="flex-grow bg-light-navy border border-lightest-navy text-lightest-slate placeholder-slate rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green transition"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="font-mono text-green border border-green rounded-md px-6 py-3 hover:bg-green-tint transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? <LoadingSpinner/> : 'Generate Idea'}
          </button>
        </form>

        {error && <p className="mt-6 text-red-400">{error}</p>}
        
        {idea && (
            <div className="mt-12 p-8 bg-light-navy rounded-lg text-left animate-fade-in">
                <h3 className="text-2xl font-bold text-green mb-4">{idea.projectName}</h3>
                <p className="text-light-slate mb-6">{idea.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-lightest-slate mb-3">Potential Datasets</h4>
                        <ul className="list-disc list-inside space-y-2 text-slate font-mono text-sm">
                            {idea.potentialDatasets.map((dataset, i) => <li key={i}>{dataset}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lightest-slate mb-3">Analysis Methods</h4>
                        <ul className="list-disc list-inside space-y-2 text-slate font-mono text-sm">
                            {idea.analysisMethods.map((method, i) => <li key={i}>{method}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        )}
      </div>
    </section>
  );
};

export default GeoAI;
