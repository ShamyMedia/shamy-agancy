
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Quote, Check } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { content, dir } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-dark text-white overflow-hidden relative">
      {/* Background Detail */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
         <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary-900 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {content.testimonials.title}
          </h2>
          <p className="text-base md:text-lg text-slate-400">
            {content.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {content.testimonials.items.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-dark-card rounded-2xl p-6 border border-slate-700/50 hover:border-primary-500/30 transition-colors relative group"
            >
              <div className="absolute -top-4 right-6 bg-dark-card p-2 rounded-full border border-slate-700">
                 <Quote size={20} className="text-primary-500 fill-primary-500" />
              </div>

              {/* WhatsApp Header Mimic */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-700/50">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-sm font-bold text-white border border-slate-600 shadow-inner flex-shrink-0">
                    {item.name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-bold text-base text-white group-hover:text-primary-400 transition-colors">{item.name}</h4>
                    <p className="text-xs text-secondary font-medium tracking-wide uppercase">{item.role}</p>
                </div>
              </div>

              {/* Message Bubble */}
              <div className={`bg-[#202c33] p-4 rounded-2xl rounded-tl-none relative ${dir === 'rtl' ? 'rounded-tr-none rounded-tl-2xl' : ''}`}>
                 {/* Little triangle for bubble */}
                 <div className={`absolute top-0 w-0 h-0 border-[8px] border-transparent ${dir === 'rtl' ? '-right-[12px] border-l-[#202c33]' : '-left-[12px] border-r-[#202c33]'}`}></div>
                 
                 {/* Project Image Attachment */}
                 {item.image && (
                   <div className="mb-3 rounded-lg overflow-hidden border border-white/5 relative group/img cursor-pointer">
                      <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors"></div>
                      <img 
                        src={item.image} 
                        alt={`${item.name} Project`} 
                        className="w-full h-40 object-cover"
                        loading="lazy"
                      />
                   </div>
                 )}

                 <p className="text-sm text-gray-200 leading-relaxed mb-3">
                    "{item.content}"
                 </p>
                 <div className="flex justify-end items-center gap-1">
                    <span className="text-[10px] text-gray-500">{item.time}</span>
                    {/* Double Check for "Read" status */}
                    <div className="flex -space-x-1">
                        <Check size={12} className="text-blue-400" />
                        <Check size={12} className="text-blue-400" />
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
