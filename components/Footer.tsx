import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const { content } = useLanguage();

  return (
    <footer id="footer" className="bg-dark border-t border-slate-800 pt-16 pb-8 text-slate-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
           <div className="text-center md:text-start flex flex-col items-center md:items-start">
              <img 
                 src="https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/refs/heads/main/images/logo.png" 
                 alt="Shamy Media" 
                 className="h-14 w-auto object-contain mb-4"
              />
              <p className="text-slate-400 max-w-xs">{content.footer.address}</p>
           </div>
           
           <div className="flex gap-4">
              <a href="https://www.facebook.com/shamymediaeg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/shamymediaeg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all transform hover:-translate-y-1">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/in/shamymediaeg/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-700 hover:text-white transition-all transform hover:-translate-y-1">
                <Linkedin size={18} />
              </a>
           </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p className="flex items-center gap-1">
                {content.footer.copyright} 
                <span className="hidden md:inline mx-2">|</span> 
                <span>Made with <Heart size={12} className="inline text-red-500 fill-red-500" /> in Egypt</span>
            </p>
            <p dir="ltr" className="font-mono text-slate-400">{content.footer.phone}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;