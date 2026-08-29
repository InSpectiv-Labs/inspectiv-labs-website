import React, { useState, useEffect } from 'react';

interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

interface MobileNavProps {
  links: NavLink[];
}

export default function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleDropdown = (label: string, e: React.MouseEvent) => {
    e.preventDefault();
    setOpenDropdowns(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <div className="block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[70] p-2 text-white hover:text-cyan-400 focus:outline-none transition-transform duration-300 rounded-md"
        aria-label="Toggle menu"
      >
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90 scale-110' : 'rotate-0 scale-100'}`}>
          {isOpen ? (
            <i className="bx bx-x text-4xl"></i>
          ) : (
            <i className="bx bx-menu text-4xl"></i>
          )}
        </div>
      </button>

      {/* Mobile Menu Overlay with Glassmorphism */}
      <div 
        className={`fixed left-0 top-[96px] w-full h-[calc(100vh-96px)] z-[60] bg-[#000f2c]/90 backdrop-blur-xl overflow-y-auto transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-8 invisible'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-4 mb-12">
          {links.map((link, index) => (
            <div 
              key={link.label}
              className="transform transition-all duration-500 ease-out"
              style={{ 
                opacity: isOpen ? 1 : 0, 
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${isOpen ? index * 75 + 100 : 0}ms` 
              }}
            >
              {link.children ? (
                <div>
                  <button
                    onClick={(e) => toggleDropdown(link.label, e)}
                    className="flex items-center justify-between w-full py-4 text-lg font-light text-white uppercase tracking-[0.15em] hover:text-cyan-400 transition-colors border-b border-white/10 group"
                  >
                    {link.label}
                    <i className={`bx bx-chevron-${openDropdowns[link.label] ? 'up' : 'down'} text-2xl text-cyan-400 group-hover:scale-110 transition-transform duration-300`}></i>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openDropdowns[link.label] ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
                    }`}
                  >
                    <div className="flex flex-col pl-6 space-y-2 border-l border-cyan-400/20 ml-2 py-4">
                      {link.children.map((child, childIdx) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="py-3 text-[15px] font-light tracking-wide text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2"
                          onClick={() => setIsOpen(false)}
                          style={{
                            animation: openDropdowns[link.label] ? `slideInRight 0.4s ease-out ${childIdx * 50}ms forwards` : 'none',
                            opacity: openDropdowns[link.label] ? 0 : 1
                          }}
                        >
                          <span className="w-1 h-1 rounded-full bg-cyan-400/50"></span>
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  href={link.href}
                  className="block py-4 text-lg font-light text-white uppercase tracking-[0.15em] hover:text-cyan-400 hover:translate-x-1 transition-all duration-300 border-b border-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
          
          <div 
            className="pt-10 transform transition-all duration-500"
            style={{ 
              opacity: isOpen ? 1 : 0, 
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${isOpen ? links.length * 75 + 100 : 0}ms` 
            }}
          >
            <a 
              href="/contact" 
              className="flex items-center justify-center w-full px-6 py-4 text-sm font-semibold tracking-widest text-white uppercase bg-[#1d4ed8] hover:bg-[#1e40af] hover:shadow-[0_0_20px_rgba(29,78,216,0.4)] transition-all duration-300 group"
              onClick={() => setIsOpen(false)}
            >
              CONTACT US
              <i className="bx bx-right-arrow-alt ml-2 text-xl group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
        </nav>
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
