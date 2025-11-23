
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const { content, toggleLanguage, language, dir } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: content.header.home, href: '#' },
    { label: content.header.services, href: '#services' },
    { label: content.header.pricing, href: '#pricing' },
    { label: content.header.contact, href: '#footer' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  // Desktop styles
  const textColorClass = isScrolled ? 'text-slate-700 hover:text-primary-600' : 'text-white/90 hover:text-white';
  const buttonClass = isScrolled 
    ? 'bg-primary-600 text-white hover:bg-primary-700' 
    : 'bg-white text-primary-600 hover:bg-gray-100';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-4 md:py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 z-50 relative">
             <img 
               src="/images/logo.png" 
               alt="Shamy Media" 
               className="h-10 md:h-12 w-auto object-contain"
             />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                className={`font-medium transition-colors ${textColorClass}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors ${textColorClass}`}
            >
              <Globe size={18} />
              {language === 'en' ? 'العربية' : 'English'}
            </button>
            <a 
              href="tel:+201006404614"
              className={`flex items-center gap-2 px-5 py-2 rounded-full transition-colors shadow-lg font-bold ${buttonClass}`}
            >
              <Phone size={18} />
              {content.header.callAction}
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setIsOpen(true)} 
            className={`md:hidden p-2 transition-colors relative z-50 ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            aria-label="Open menu"
            style={{ opacity: isOpen ? 0 : 1 }} // Hide toggle when menu is open (Close btn inside menu takes over)
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl flex flex-col"
          >
            {/* Mobile Header Row (Logo + Close) */}
            <div className="container mx-auto px-4 py-4 flex items-center justify-between shrink-0">
               <img 
                 src="/images/logo.png" 
                 alt="Shamy Media" 
                 className="h-10 w-auto object-contain"
               />
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-900 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex-grow flex flex-col items-center justify-center space-y-6 p-4">
              {navLinks.map((link, idx) => (
                <motion.a 
                  key={idx} 
                  href={link.href} 
                  onClick={handleNavClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-2xl md:text-3xl font-bold text-slate-800 hover:text-primary-600"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            
            {/* Mobile Footer Actions */}
            <div className="p-6 space-y-4 border-t border-gray-100 bg-white">
              <button 
                onClick={() => { toggleLanguage(); setIsOpen(false); }}
                className="w-full py-4 px-4 flex items-center justify-center gap-3 text-slate-700 bg-gray-50 rounded-xl font-semibold border border-gray-200 active:scale-95 transition-transform"
              >
                <Globe size={20} />
                {language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
              </button>
              <a 
                href="tel:+201006404614"
                className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white py-4 rounded-xl font-bold shadow-lg active:scale-95 transition-transform text-lg"
              >
                <Phone size={20} />
                {content.header.callAction}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
