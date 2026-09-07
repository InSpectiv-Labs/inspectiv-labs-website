import React from 'react';

const monitoringDomains = [
  {
    id: 1,
    title: "SLOPES & HIGHWALLS",
    description: "Detect slope instability and potential failures.",
    icon: "bx-target-lock",
    image: "/images/industry_mining.png",
    className: "md:col-span-1 lg:col-span-3"
  },
  {
    id: 2,
    title: "TAILINGS STORAGE FACILITIES",
    description: "Monitor tailings dam movement, seepage and structural integrity.",
    icon: "bx-water",
    image: "/images/industry_energy.png",
    className: "md:col-span-1 lg:col-span-3"
  },
  {
    id: 3,
    title: "WASTE DUMPS & STOCKPILES",
    description: "Track movement and settlement over time.",
    icon: "bx-cart",
    image: "/images/hero_bg.png",
    className: "md:col-span-1 lg:col-span-2"
  },
  {
    id: 4,
    title: "INFRASTRUCTURE & ASSETS",
    description: "Monitor critical infrastructure and linear assets.",
    icon: "bx-buildings",
    image: "/images/infrastructure_monitoring.png",
    className: "md:col-span-1 lg:col-span-2"
  },
  {
    id: 5,
    title: "LARGE AREA SURVEILLANCE",
    description: "Wide area monitoring for regional risk assessment.",
    icon: "bx-cloud-drizzle",
    image: "/images/world_map.png",
    className: "md:col-span-2 lg:col-span-2"
  }
];

export default function MonitoringGrid() {
  return (
    <div className="w-full max-w-[90vw] mx-auto px-6 py-24">
      <div className="mb-16 md:pl-12 border-l-2 border-[#1d4ed8]">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight text-gray-900">What We Monitor</h2>
        <p className="text-xl text-gray-600 font-normal max-w-3xl leading-relaxed">
          Our technology adapts to diverse environments, providing critical intelligence where it matters most.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 auto-rows-[250px]">
        {monitoringDomains.map((domain) => (
          <div 
            key={domain.id} 
            className={`group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm ${domain.className}`}
          >
            {/* Background Image */}
            <img 
              src={domain.image} 
              alt={domain.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-100" 
            />
            
            {/* Flat Neutral Overlay instead of gradient */}
            <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/60 transition-colors duration-500"></div>

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
              <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30">
                    <i className={`bx ${domain.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-wider">{domain.title}</h3>
                </div>
                <p className="text-gray-100 font-normal text-sm md:text-base leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 overflow-hidden transition-all duration-500 delay-100">
                  {domain.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
