import React, { useState } from 'react';
import { CONTACT_INFO, IMAGES } from '../data';
import { Menu, X, MessageCircle } from 'lucide-react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; }> = ({ href, children }) => (
  <a href={href} className="transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[#6A3EEA]">
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#hero', text: 'الرئيسية' },
    { href: '#benefits', text: 'لماذا نحن؟' },
    { href: '#about', text: 'عنا' },
    { href: '#solutions', text: 'حلولنا' },
    { href: '#pricing', text: 'الأسعار' },
  ];
  
  return (
    <header className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <a href="#hero" className="flex items-center gap-3 transition-colors duration-300 text-[#6A3EEA] hover:opacity-80">
              <img 
                src={IMAGES.logo} 
                alt="شامي ميديا" 
                className="h-10 md:h-12 w-auto object-contain"
              />
              <span className="text-gray-800 hidden sm:block text-xl md:text-2xl">شامي ميديا</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-reverse space-x-1">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>{link.text}</NavLink>
            ))}
             <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-[#6A3EEA] text-white font-bold py-2.5 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-sm ml-2 shadow-md shadow-purple-200 hover:shadow-purple-300 hover:-translate-y-0.5 transform flex items-center gap-2">
                <MessageCircle size={18} />
                تواصل واتساب
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-[#6A3EEA] focus:outline-none p-2 rounded-md hover:bg-purple-50 transition-colors" aria-label="القائمة">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu - Enhanced Glassmorphism */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100 py-6 animate-on-scroll is-visible z-50">
            <div className="flex flex-col items-center space-y-4 px-6">
              {navLinks.map((link) => (
                 <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-[#6A3EEA] hover:bg-purple-50 transition-all duration-300 px-6 py-3 rounded-xl text-lg font-bold w-full text-center border border-transparent hover:border-purple-100">{link.text}</a>
              ))}
              <div className="w-full pt-4 border-t border-gray-100">
                <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#6A3EEA] text-white font-bold py-4 px-6 rounded-xl hover:bg-[#5a32c4] transition-all duration-300 text-lg shadow-lg shadow-purple-200 animate-pulse">
                    <MessageCircle size={24} />
                    تواصل واتساب
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;