
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { MessageCircle, Hammer, Rocket } from 'lucide-react';

const icons = {
  MessageCircle,
  Hammer,
  Rocket
};

const Process: React.FC = () => {
  const { content, dir } = useLanguage();

  return (
    <section className="relative py-16 md:py-24 bg-dark overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://raw.githubusercontent.com/ShamyMedia/Shamy-Menu/refs/heads/main/images/about-bg.jpg" 
          alt="How we work background" 
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay for Readability - Reduced to ~75% */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/75 to-dark/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {content.process.title}
          </h2>
          <p className="text-base md:text-lg text-gray-300">
            {content.process.subtitle}
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Connecting Line (Hidden on Mobile) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-white/5 via-white/20 to-white/5 -z-10 transform translate-y-2"></div>

          {content.process.steps.map((step, idx) => {
            // @ts-ignore
            const Icon = icons[step.icon];
            return (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Glassmorphism Icon Container */}
                <div className="w-24 h-24 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center shadow-2xl text-white mb-6 z-10 relative group-hover:bg-white/10 group-hover:border-primary-500/50 transition-all duration-300">
                  <span className="absolute -top-1 -right-1 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-dark shadow-lg">
                    {idx + 1}
                  </span>
                  <div className="text-primary-400 group-hover:text-primary-300 transition-colors">
                    <Icon size={36} strokeWidth={1.5} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">{step.title}</h3>
                <p className="text-gray-400 max-w-xs mx-auto leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Wave Separator Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[80px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Process;
