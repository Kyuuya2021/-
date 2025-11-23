import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Trophy } from 'lucide-react';
import { TimelineItem } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';

interface BentoItemProps {
  item: TimelineItem;
  className?: string;
  delay?: number;
}

const BentoItem: React.FC<BentoItemProps> = ({ item, className }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className={`group relative p-8 rounded-3xl overflow-hidden flex flex-col justify-between glass-card hover:border-white/20 transition-all duration-500 ${className}`}
    >
      {/* Monochrome Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] uppercase tracking-wider text-zinc-400 font-mono">
            {item.date}
          </span>
          {item.link && (
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all transform group-hover:rotate-45"
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
        
        <div className="mt-auto">
          <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-zinc-200 transition-colors tracking-tight">
            {t(item.title)}
          </h3>
          
          <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3 group-hover:text-zinc-300 transition-colors tracking-wide">
            {t(item.description || "")}
          </p>
          
          <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs text-zinc-500 font-medium uppercase tracking-widest group-hover:text-zinc-300 transition-colors">
            <Trophy size={14} className="mr-2" />
            <span>Key Achievement</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface BentoGridProps {
  items: TimelineItem[];
}

const BentoGrid: React.FC<BentoGridProps> = ({ items }) => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(250px,auto)] gap-6"
    >
      {items.map((item, i) => {
        // Layout Logic for "Bento" look
        let className = "md:col-span-1 md:row-span-1";
        
        // Make the first item large
        if (i === 0) className = "md:col-span-2 md:row-span-2 bg-gradient-to-br from-zinc-900 to-dark-card";
        // Make the 4th item wide
        else if (i === 3) className = "md:col-span-2 md:row-span-1";
        // Make the 6th item wide
        else if (i === 6) className = "md:col-span-2 md:row-span-1";
        
        return (
          <BentoItem 
            key={i} 
            item={item} 
            className={className}
          />
        );
      })}
    </motion.div>
  );
};

export default BentoGrid;