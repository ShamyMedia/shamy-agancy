
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const { content } = useLanguage();
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/about-bg.jpg" 
          alt="FAQ background" 
          className="w-full h-full object-cover opacity-50"
        />
        {/* Light Gradient Overlay for Readability - Reduced opacity to 60% per request */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/60 via-white/60 to-gray-50/60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {content.faq.title}
          </h2>
          <p className="text-base md:text-lg text-slate-600">
            {content.faq.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {content.faq.items.map((item) => (
            <div 
              key={item.id} 
              className="bg-white/80 backdrop-blur-md rounded-2xl border border-gray-100 overflow-hidden shadow-md transition-all hover:shadow-lg hover:border-primary-100"
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-start focus:outline-none bg-transparent"
              >
                <span className={`text-base md:text-lg font-bold leading-snug pr-4 rtl:pl-4 rtl:pr-0 transition-colors ${openIndex === item.id ? 'text-primary-700' : 'text-slate-800'}`}>
                  {item.question}
                </span>
                <span className={`flex-shrink-0 p-2 rounded-full transition-colors ${openIndex === item.id ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-500'}`}>
                  {openIndex === item.id ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 md:px-6 pb-6 text-slate-600 leading-relaxed border-t border-gray-100 pt-4 text-sm md:text-base bg-transparent">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Dark Wave Separator Bottom (Transitions to Dark Testimonials) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-dark"></path>
        </svg>
      </div>
    </section>
  );
};

export default FAQ;
