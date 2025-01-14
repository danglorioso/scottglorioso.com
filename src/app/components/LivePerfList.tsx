// components/LivePerformanceList.tsx
import React from 'react';
import { LivePerformance } from '../types/livePerf';

interface LivePerformanceListProps {
  performances: LivePerformance[];
}

const LivePerformanceList: React.FC<LivePerformanceListProps> = ({ performances }) => {
  return (
    <div className="bg-black text-white px-8 py-12 max-w-screen-xl mx-auto min-h-screen">
      <h1 className="text-4xl font-bold text-red-500 mb-8 text-center">Live Performances</h1>
      <div className="space-y-8">
        {[...performances]
          .reverse() // Print in reverse order
          .map((performance, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-neutral-900 rounded-xl shadow-lg"
            >
              {/* Text Information Section */}
              <div className="flex-1 mx-6">
                <h3 className="text-3xl font-bold text-red-500 mb-3">{performance.title}</h3>
                <p className="text-lg text-gray-400 mb-4">{performance.description}</p>
                <p className="text-sm text-neutral-500 mb-4">Performed {performance.performanceDate}.</p>
              </div>

              {/* YouTube Video Section */}
              <div className="flex-shrink-0 w-full md:w-2/3">
                {/* Responsive Aspect Ratio Container */}
                <div className="relative w-full aspect-video bg-black rounded-lg">
                  <iframe
                    src={performance.youtubeLink}
                    title={`YouTube video for ${performance.title}`}
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

            </div>
          ))}
      </div>
    </div>
  );
};

export default LivePerformanceList;
