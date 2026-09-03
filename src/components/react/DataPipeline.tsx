import React from 'react';

const pipelineSteps = [
  {
    id: 1,
    title: "RAW SAR IMAGE",
    subtitle: "Sentinel-1 radar acquisition",
    image: "/images/satellite_hero.png"
  },
  {
    id: 2,
    title: "INTERFEROGRAM",
    subtitle: "Phase difference between images",
    image: "/images/insar_interferogram.png"
  },
  {
    id: 3,
    title: "UNWRAPPED PHASE",
    subtitle: "Corrected phase (unwrapped)",
    image: "/images/3d_deformation.png"
  },
  {
    id: 4,
    title: "TIME-SERIES DEFORMATION",
    subtitle: "Millimeter-level deformation over time",
    image: "/images/time_series.png"
  },
  {
    id: 5,
    title: "RISK & INSIGHT",
    subtitle: "Identify unstable zones and enable action",
    image: "/images/real_world_impact.png"
  }
];

export default function DataPipeline() {
  return (
    <div className="w-full max-w-[90vw] mx-auto px-6 py-24">
      <div className="mb-20 md:pl-12 border-l-2 border-[#1d4ed8]">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight text-gray-900">
          From Raw Data to Real-World Impact
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
        {pipelineSteps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center group w-full lg:w-1/5">
              
              {/* Image Container */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-xl overflow-hidden mb-6 group-hover:scale-105 group-hover:shadow-2xl transition-all duration-500 z-10 bg-white">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gray-900/10 transition-colors duration-500"></div>
                
                {/* Step Number Badge */}
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#1d4ed8] text-white flex items-center justify-center font-bold shadow-lg">
                  {step.id}
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center px-4">
                <h4 className="text-sm md:text-base font-bold text-gray-900 tracking-wide mb-2">
                  {step.title}
                </h4>
                <p className="text-xs md:text-sm text-gray-600 font-normal leading-relaxed">
                  {step.subtitle}
                </p>
              </div>
            </div>

            {/* Connector Arrow (Hidden on mobile) */}
            {index < pipelineSteps.length - 1 && (
              <div className="hidden lg:flex flex-col items-center justify-center flex-grow opacity-50">
                <div className="w-full h-[2px] bg-gray-300 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-gray-300 rotate-45 transform translate-x-1/2"></div>
                </div>
              </div>
            )}
            
            {/* Mobile Connector Arrow */}
            {index < pipelineSteps.length - 1 && (
              <div className="lg:hidden text-[#1d4ed8]/30 my-4">
                <i className="bx bx-chevron-down text-3xl"></i>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
