import React, { useState, useEffect } from 'react';

const steps = [
  {
    id: 1,
    title: "Satellite Data Acquisition",
    description: "We acquire high-resolution C-band SAR radar data from Sentinel-1 satellites, providing all-weather, day & night imaging with frequent revisit times.",
    icon: "bx-globe",
    image: "/images/satellite_hero.jpg"
  },
  {
    id: 2,
    title: "InSAR Processing",
    description: "Advanced algorithms detect phase changes between multiple radar images over time. We isolate the true deformation signal from atmospheric noise.",
    icon: "bx-layer",
    image: "/images/insar_interferogram.jpg"
  },
  {
    id: 3,
    title: "Deformation Analysis",
    description: "Using advanced MintPy workflows and time-series analysis, we convert phase differences into exact, millimeter-level ground deformation maps.",
    icon: "bx-network-chart",
    image: "/images/deformation.png"
  },
  {
    id: 4,
    title: "Risk Alerts & Reporting",
    description: "Machine learning models identify anomalies and early warning signals. Automated alerts highlight critical areas of subsidence or instability.",
    icon: "bx-radar",
    image: "/images/time_series.jpg"
  },
  {
    id: 5,
    title: "Informed Decisions",
    description: "Turn complex data into decision-ready insights. Our actionable intelligence protects critical assets, ensures safety, and optimizes operations.",
    icon: "bx-check-shield",
    image: "/images/real_world_impact.jpg"
  }
];

export default function TechnologyTimeline() {
  const [activeStep, setActiveStep] = useState(1);
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStep((current) => (current === steps.length ? 1 : current + 1));
          return 0;
        }
        return prev + 1; // 100 steps, running every 50ms = 5 seconds per slide
      });
    }, 50);

    return () => clearInterval(timer);
  }, [activeStep]);

  const handleStepClick = (id: number) => {
    setActiveStep(id);
    setProgress(0);
  };

  return (
    <div className="w-full max-w-[90vw] mx-auto min-h-[750px] lg:min-h-0">
      

      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
        
        {/* Top/Left: Dynamic Image Display (Visible on all sizes) */}
        <div className="col-span-1 lg:col-span-7 relative overflow-hidden bg-white border-l-2 border-[#1d4ed8] h-[300px] lg:h-auto lg:min-h-[400px]">
          {steps.map((step) => (
            <div 
              key={step.id}
              className={`absolute inset-0 transition-opacity duration-700 ${activeStep === step.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <img src={step.image} alt={step.title} className="w-full h-full object-cover opacity-90" />
              
              {/* Technical Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
              
              <div className={`absolute bottom-8 left-8 right-8 transition-transform duration-500 delay-150 ${activeStep === step.id ? 'translate-y-0' : 'translate-y-4'}`}>
                <h4 className="text-3xl font-semibold tracking-wide text-white mb-2 drop-shadow-md">{step.title}</h4>
                <div className="flex items-center gap-4 text-xs font-semibold text-cyan-400 tracking-wider">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                  <span className="drop-shadow-md">ACTIVE PROCESS</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Editorial Timeline */}
        <div className="lg:col-span-5 flex flex-col justify-center h-[500px] md:h-[550px] lg:h-[600px]">
          <div className="space-y-4">
            {steps.map((step) => (
              <div 
                key={step.id} 
                onClick={() => handleStepClick(step.id)}
                className="group cursor-pointer border-b border-gray-200 pb-6 last:border-0 transition-colors"
              >
                <div className="flex items-baseline gap-6 mb-2">
                  <span className={`font-semibold text-sm tracking-widest ${activeStep === step.id ? 'text-[#1d4ed8]' : 'text-gray-400 group-hover:text-gray-500'}`}>
                    [{step.id.toString().padStart(2, '0')}]
                  </span>
                  <div className="flex items-center gap-3">
                    <i className={`bx ${step.icon} text-2xl transition-colors duration-300 ${activeStep === step.id ? 'text-[#1d4ed8]' : 'text-gray-400 group-hover:text-gray-500'}`}></i>
                    <h4 className={`text-xl font-semibold tracking-wide transition-colors duration-300 ${activeStep === step.id ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'}`}>
                      {step.title}
                    </h4>
                  </div>
                </div>
                
                <div 
                  className={`pl-14 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${activeStep === step.id ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}
                >
                  <p className="text-base text-gray-600 font-light leading-relaxed mb-6">
                    {step.description}
                  </p>
                  
                  {/* Progress Line */}
                  {activeStep === step.id && (
                    <div className="h-[1px] w-full bg-gray-200 relative">
                      <div 
                        className="absolute top-0 left-0 h-full bg-[#1d4ed8] transition-all duration-75"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
