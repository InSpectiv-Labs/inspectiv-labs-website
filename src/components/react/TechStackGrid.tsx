import React from 'react';

const technologies = [
  {
    id: 1,
    title: "Sentinel-1 SAR Data",
    subtitle: "C-BAND SAR IMAGING",
    description: "All-weather, day & night imaging with 6–12 day repeat cycle.",
    icon: "bx-radar"
  },
  {
    id: 2,
    title: "InSAR Processing",
    subtitle: "PHASE INTERFEROMETRY",
    description: "Detect phase changes between radar images to measure deformation.",
    icon: "bx-layer"
  },
  {
    id: 3,
    title: "MintPy Workflow",
    subtitle: "TIME-SERIES ANALYSIS",
    description: "Advanced time-series analysis to isolate and quantify deformation.",
    icon: "bx-cube-alt"
  },
  {
    id: 4,
    title: "AI/ML Analytics",
    subtitle: "PATTERN RECOGNITION",
    description: "Machine learning models identify risks, anomalies and early warning signals.",
    icon: "bx-brain"
  },
  {
    id: 5,
    title: "Actionable Intelligence",
    subtitle: "DECISION READY INSIGHTS",
    description: "Clear dashboards, alerts and reports for smarter, faster decisions.",
    icon: "bx-line-chart"
  }
];

export default function TechStackGrid() {
  return (
    <div className="w-full max-w-[90vw] mx-auto px-6 py-32">
      <div className="mb-20 md:pl-12 border-l-2 border-[#1d4ed8]">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight text-gray-900">Technology Stack</h2>
        <p className="text-xl text-gray-600 font-normal max-w-3xl leading-relaxed">
          We combine advanced satellite radar, InSAR processing, and AI-driven analytics to deliver millimeter-level ground deformation intelligence at scale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border-t border-b border-gray-200">
        {technologies.map((tech, index) => (
          <div 
            key={tech.id} 
            className={`group relative p-8 md:p-10 bg-white transition-colors duration-300 hover:bg-gray-50 ${index !== technologies.length - 1 ? 'border-b md:border-b-0 md:border-r border-gray-200' : ''}`}
          >
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-sm font-semibold text-[#1d4ed8]">0{tech.id}</span>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">{tech.subtitle}</h3>
            </div>
            
            <i className={`bx ${tech.icon} text-4xl text-blue-600 mb-6 opacity-80 group-hover:opacity-100 transition-opacity`}></i>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">{tech.title}</h4>
            <p className="text-sm text-gray-600 font-normal leading-relaxed">
              {tech.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
