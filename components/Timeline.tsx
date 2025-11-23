import React, { useState } from 'react';
import Section from './ui/Section';
import BentoGrid from './ui/BentoGrid';
import { CAREER_HISTORY } from '../constants';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Timeline: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const { t } = useLanguage();

  // Filter for Bento Grid (Highlights)
  const highlights = CAREER_HISTORY.filter(item => item.highlight).slice(0, 7);
  
  // Full history sorted reverse chronologically
  const fullHistory = [...CAREER_HISTORY].reverse();
  
  const displayedHistory = showAll ? fullHistory : fullHistory.slice(0, 5);

  const header = {
    selectedWorks: { en: "Selected Works", jp: "主な実績" },
    impact: { en: "Impact &", jp: "Impact &" },
    achievements: { en: "Achievements", jp: "Achievements" },
    description: {
       en: "From winning international hackathons to scaling AI solutions. Here are some of the key milestones in my journey.",
       jp: "国際ハッカソンでの優勝からAIソリューションの開発まで。これまでの旅路における主要なマイルストーンをご紹介します。"
    },
    fullHistory: { en: "Full Career History", jp: "全経歴" },
    showLess: { en: "Show Less", jp: "閉じる" },
    viewFull: { en: "View Full History", jp: "全経歴を見る" }
  };

  return (
    <Section id="projects" className="bg-dark relative">
       {/* Background decoration */}
       <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-dark-lighter to-transparent opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-20 md:mb-32">
          <div className="flex items-center gap-4 mb-6">
             <div className="h-px w-16 bg-secondary"></div>
             <span className="text-secondary text-xs tracking-[0.2em] uppercase font-medium">{t(header.selectedWorks)}</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tighter">
             {t(header.impact)} <br/> <span className="text-gray-700">{t(header.achievements)}</span>
          </h2>
          <p className="text-gray-400 max-w-xl text-lg font-light leading-relaxed tracking-wide">
            {t(header.description)}
          </p>
        </div>

        {/* Bento Grid for Highlights */}
        <div className="mb-32">
          <BentoGrid items={highlights} />
        </div>

        {/* Career Timeline List */}
        <div id="career" className="pt-16 border-t border-white/5">
           <h3 className="text-3xl font-serif text-white mb-16 flex items-center tracking-tight">
             {t(header.fullHistory)}
           </h3>
           
           <div className="space-y-2">
             <AnimatePresence>
               {displayedHistory.map((item, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.05 }}
                   className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-6 border-b border-white/5 px-6 rounded-xl hover:bg-white/5 transition-all duration-300 items-center relative overflow-hidden"
                 >
                   {/* Date */}
                   <div className="md:col-span-2 text-xs font-mono text-gray-500 pt-1 group-hover:text-white transition-colors tracking-wider">
                     {item.date}
                   </div>

                   {/* Content */}
                   <div className="md:col-span-7">
                     <h4 className={`text-lg font-medium mb-1 ${item.highlight ? 'text-white' : 'text-gray-300'} group-hover:text-secondary transition-colors tracking-tight`}>
                       {t(item.title)}
                     </h4>
                     <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors tracking-wide">{t(item.description || "")}</p>
                   </div>

                   {/* Action */}
                   <div className="md:col-span-3 flex md:justify-end">
                     {item.link && (
                       <a 
                         href={item.link} 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
                       >
                         <ArrowRight size={16} />
                       </a>
                     )}
                   </div>
                 </motion.div>
               ))}
             </AnimatePresence>
           </div>

           <div className="mt-12 text-center">
             <button 
               onClick={() => setShowAll(!showAll)}
               className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 text-xs tracking-[0.2em] uppercase font-bold"
             >
               {showAll ? (
                 <>{t(header.showLess)} <ChevronUp size={14} /></>
               ) : (
                 <>{t(header.viewFull)} <ChevronDown size={14} /></>
               )}
             </button>
           </div>
        </div>
      </div>
    </Section>
  );
};

export default Timeline;