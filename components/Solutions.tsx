import React from 'react';
import { SOLUTIONS_DATA } from '../data';
import { AlertTriangle, Lightbulb, TrendingUp, ArrowUpRight } from 'lucide-react';

interface SolutionProps {
    title: string;
    problem: string;
    solution: string;
    result: string;
    image: string;
    delay: number;
}

const SolutionCard: React.FC<SolutionProps> = ({ title, problem, solution, result, image, delay }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-on-scroll flex flex-col h-full border border-gray-100 group" style={{ transitionDelay: `${delay}ms`}}>
    <div className="h-60 overflow-hidden relative">
        {/* Stronger Gradient at bottom for Title Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10"></div>
        <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
        <h3 className="absolute bottom-5 right-5 z-20 text-2xl font-bold text-white drop-shadow-lg tracking-wide flex items-center gap-2">
            {title}
        </h3>
    </div>
    
    <div className="p-8 flex flex-col flex-grow space-y-6">
        {/* Problem Section */}
        <div className="bg-red-50 p-5 rounded-xl border border-red-100 transition-colors group-hover:border-red-200">
            <div className="flex items-center gap-2 mb-3 text-red-600">
                <AlertTriangle size={18} />
                <p className="text-sm text-red-800 font-bold uppercase tracking-wider">المشكلة</p>
            </div>
            <p className="text-gray-900 leading-loose text-[16px] font-medium">{problem}</p>
        </div>
        
        {/* Solution Section */}
        <div className="bg-purple-50 p-5 rounded-xl border border-purple-100 transition-colors group-hover:border-purple-200">
             <div className="flex items-center gap-2 mb-3 text-[#6A3EEA]">
                <Lightbulb size={18} />
                <p className="text-sm text-[#6A3EEA] font-bold uppercase tracking-wider">الحل</p>
            </div>
            <p className="text-gray-900 leading-loose text-[16px] font-medium">{solution}</p>
        </div>

        {/* Result Section - Highlighted */}
        <div className="mt-auto pt-4">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-6 shadow-sm relative overflow-hidden hover:border-emerald-400 transition-all duration-300">
                {/* Decorative bg element */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-emerald-400 opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                
                <p className="text-sm text-emerald-800 font-extrabold mb-3 flex items-center gap-1 relative z-10">
                  النتيجة النهائية
                  <TrendingUp size={16} className="animate-pulse text-emerald-600" />
                </p>
                <p className="text-gray-900 font-bold flex items-start gap-3 leading-relaxed text-lg relative z-10">
                    <ArrowUpRight size={24} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    {result}
                </p>
            </div>
        </div>
    </div>
  </div>
);

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-24 px-6 bg-gray-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">حلول جاهزة.. <span className="text-emerald-400">علاج لمشاكل شغلك</span></h2>
          <p className="text-gray-300 mt-4 text-xl leading-relaxed max-w-3xl mx-auto font-medium opacity-90">
            إحنا مش بس بنصمم... إحنا بندرس "الوجع" اللي في نشاطك وبنقدملك الحل اللي يريّحك ويزود أرباحك.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SOLUTIONS_DATA.map((solution, index) => (
            <SolutionCard key={index} {...solution} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;