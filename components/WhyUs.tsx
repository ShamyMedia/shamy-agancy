import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Zap, Tag, Headphones, Palette } from 'lucide-react';

const icons = {
  Zap,
  Tag,
  Headphones,
  Palette
};

const WhyUs: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content.whyUs.title}
          </h2>
          <p className="text-lg text-gray-600">
            {content.whyUs.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.whyUs.features.map((feature, idx) => {
            // @ts-ignore - dynamic icon lookup
            const Icon = icons[feature.icon] || Zap;
            
            return (
              <motion.div 
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-600/5 transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-primary-600">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;