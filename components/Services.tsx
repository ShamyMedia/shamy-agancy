import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Utensils, Stethoscope, Bus, Eye } from 'lucide-react';
import DemoModal from './DemoModal';
import { Service } from '../types';

const icons = {
  Utensils,
  Stethoscope,
  Bus
};

const bgImages = {
  rest: "https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/refs/heads/main/images/custom-1.jpg",
  clinic: "https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/refs/heads/main/images/solution-clinic.jpg",
  travel: "https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/refs/heads/main/images/custom-2.jpg"
};

const Services: React.FC = () => {
  const { content, dir, language } = useLanguage();
  const [selectedDemo, setSelectedDemo] = useState<Service | null>(null);

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-xs md:text-sm mb-2 block">
            {language === 'ar' ? 'ماذا نقدم؟' : 'What We Offer'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {content.services.title}
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            {content.services.subtitle}
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {content.services.items.map((item, idx) => {
            // @ts-ignore
            const Icon = icons[item.icon] || Utensils;
            // @ts-ignore
            const bgImg = bgImages[item.id];
            const isEven = idx % 2 === 0;

            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className={`hidden md:block absolute inset-0 bg-primary-600 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 transform ${isEven ? '-rotate-2' : 'rotate-2'}`}></div>
                  <img 
                    src={bgImg} 
                    alt={item.title} 
                    className="w-full h-[250px] md:h-[400px] object-cover rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                    onClick={() => setSelectedDemo(item)}
                  />
                  {/* Floating Icon */}
                  <div className={`absolute -bottom-6 ${dir === 'rtl' ? (isEven ? '-right-4 md:-right-6' : '-left-4 md:-left-6') : (isEven ? '-left-4 md:-left-6' : '-right-4 md:-right-6')} w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center text-primary-600 z-10`}>
                    <Icon size={30} className="md:w-9 md:h-9" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 text-center lg:text-start pt-4 lg:pt-0">
                  <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <button 
                      onClick={() => setSelectedDemo(item)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg shadow-primary-600/20"
                    >
                      {item.cta}
                      <Eye size={18} />
                    </button>
                    <span className="text-sm text-gray-500 font-medium bg-white px-3 py-1 rounded-full border border-gray-200">
                      {language === 'ar' ? 'نسخة تجريبية' : 'Live Demo'}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <DemoModal 
        isOpen={!!selectedDemo}
        onClose={() => setSelectedDemo(null)}
        url={selectedDemo?.link || ''}
        title={selectedDemo?.title || ''}
      />
    </section>
  );
};

export default Services;