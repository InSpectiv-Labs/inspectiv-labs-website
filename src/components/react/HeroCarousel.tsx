import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: '/images/hero_bg.png',
    title: 'Precision Inspection & Risk Intelligence for Industry',
    subtitle: 'Ground-truth risk intelligence mapped, verified, and automated'
  },
  {
    image: '/images/hero_bg_2.png',
    title: 'Monitor Critical Infrastructure With Confidence',
    subtitle: 'Millimeter-scale displacement monitoring for dams, slopes, and civil engineering'
  },
  {
    image: '/images/hero_bg_3.png',
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

  return (
    <div className="relative w-full h-full">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
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

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col justify-end text-left px-8 pb-32 max-w-[1600px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-2 text-white uppercase drop-shadow-sm transition-all duration-700 transform">
          InSpectiv Labs
        </h1>
        
        {/* Animated Text Block */}
        <div className="h-[120px] md:h-[100px] flex items-start justify-start mb-4">
            <h2 
              key={currentSlide}
              className="text-2xl md:text-4xl font-light leading-tight text-white drop-shadow-md animate-fade-in-up"
            >
              {slides[currentSlide].title}
            </h2>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href="#industries"
            className="px-8 py-3 bg-[#2563eb] text-white text-sm uppercase tracking-wider font-semibold hover:bg-[#1d4ed8] transition-colors shadow-sm inline-block text-center"
          >
            EXPLORE SOLUTIONS
          </a>
          <a
            href="/contact"
            className="px-8 py-3 border border-white text-white hover:bg-white hover:text-[#000f2c] transition-colors text-sm uppercase tracking-wider font-semibold shadow-sm inline-block text-center"
          >
            BOOK A CONSULTATION
          </a>
        </div>

        {/* Navigation Dots */}
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

      {/* Down Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce pointer-events-none">
        <i className="bx bx-chevron-down text-4xl"></i>
      </div>

      {/* Add custom keyframe animation for fade-in-up if not in tailwind config */}
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
