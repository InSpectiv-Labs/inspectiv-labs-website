import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: '/images/insar_satellite_scan.png',
    title: 'Precision Inspection & Risk Intelligence for Industry',
    subtitle: 'Ground-truth risk intelligence mapped, verified, and automated'
  },
  {
    image: '/images/earth_bg.png',
    title: 'Monitor Critical Infrastructure With Confidence',
    subtitle: 'Millimeter-scale displacement monitoring for dams, slopes, and civil engineering'
  },
  {
    image: '/images/infrastructure_monitoring.png',
    title: 'Global Asset Protection & Financial De-Risking',
    subtitle: 'Independent verification for massive capital projects and port facilities'
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-full">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white transition-colors cursor-pointer"
        aria-label="Previous slide"
      >
        <i className="bx bx-chevron-left text-5xl drop-shadow-md"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white transition-colors cursor-pointer"
        aria-label="Next slide"
      >
        <i className="bx bx-chevron-right text-5xl drop-shadow-md"></i>
      </button>
      <div className="relative z-10 w-full h-full flex flex-col justify-end text-left px-8 pb-32 max-w-[1600px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-2 text-white uppercase drop-shadow-sm transition-all duration-700 transform">
          InSpectiv Labs
        </h1>
        <div className="min-h-[120px] md:min-h-[100px] flex items-start justify-start mb-4">
            <h2 
              key={currentSlide}
              className="text-2xl md:text-4xl font-light leading-tight text-white drop-shadow-md animate-fade-in-up"
            >
              {slides[currentSlide].title}
            </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href="#industries"
            className="px-8 py-3 bg-[#2563eb] text-white text-sm uppercase tracking-wider font-semibold hover:bg-[#1d4ed8] transition-colors shadow-sm inline-block text-center"
          >
            EXPLORE SOLUTIONS
          </a>
        </div>
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce pointer-events-none">
        <i className="bx bx-chevron-down text-4xl"></i>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
