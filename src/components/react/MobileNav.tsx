import { useState, useEffect } from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface MobileNavProps {
  links: NavLink[];
}

export default function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-slate-900 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <i className="bx bx-x text-2xl"></i>
        ) : (
          <i className="bx bx-menu text-2xl"></i>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-white border-t border-slate-100 overflow-y-auto">
          <nav className="flex flex-col p-4 space-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-lg font-semibold text-slate-800 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-slate-100 px-4">
              <a href="/contact" className="flex items-center justify-center w-full px-5 py-3 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-700 transition-colors">
                Contact Us
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
