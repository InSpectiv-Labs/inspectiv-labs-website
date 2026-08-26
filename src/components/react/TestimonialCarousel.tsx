import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Inspective Labs completely transformed our risk assessment pipeline. Their precision modeling saved us countless hours and significantly reduced overhead.",
    author: "Jane Doe",
    role: "Chief Risk Officer, Global Insurance Group"
  },
  {
    id: 2,
    quote: "The level of detail in their geotechnical reports is unmatched. They provide the reliable intelligence we need for multi-million dollar infrastructure decisions.",
    author: "John Smith",
    role: "VP of Engineering, Apex Builders"
  },
  {
    id: 3,
    quote: "Their financial compliance infrastructure is rock-solid. We trust Inspective Labs implicitly with our most sensitive client operations.",
    author: "Sarah Jenkins",
    role: "Managing Director, Horizon Lending"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100">
        <div className="text-primary-500 mb-6">
          <svg className="w-10 h-10 md:w-12 md:h-12 opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        
        <div className="min-h-[160px] flex flex-col justify-center">
          <p className="text-xl md:text-2xl font-medium text-slate-800 italic mb-6 leading-relaxed">
            "{testimonials[currentIndex].quote}"
          </p>
          <div>
            <p className="font-bold text-slate-900">{testimonials[currentIndex].author}</p>
            <p className="text-slate-500 text-sm">{testimonials[currentIndex].role}</p>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex gap-2">
          <button 
            onClick={prev}
            className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={next}
            className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      {/* Client Logos Placeholder */}
      <div className="mt-16 text-center">
        <p className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-8">Trusted by industry leaders worldwide</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
          {/* Logo Placeholders using standard fonts/shapes */}
          <div className="text-xl font-bold font-heading">Client A</div>
          <div className="text-xl font-bold font-heading">Client B</div>
          <div className="text-xl font-bold font-heading">Client C</div>
          <div className="text-xl font-bold font-heading">Client D</div>
          <div className="text-xl font-bold font-heading">Client E</div>
        </div>
      </div>
    </div>
  );
}
