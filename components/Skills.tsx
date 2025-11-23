import React from 'react';
import Section from './ui/Section';
import { SKILLS } from '../constants';
import { Code2, Terminal, Layers } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills: React.FC = () => {
  const icons = [Code2, Layers, Terminal];
  const { t } = useLanguage();

  return (
    <Section id="skills" className="bg-dark relative">
       {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-zinc-800/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tighter">Skills</h2>
          <div className="h-px w-20 bg-zinc-600"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div 
                key={typeof skillGroup.category === 'string' ? skillGroup.category : skillGroup.category.en}
                className="group p-8 glass-card rounded-2xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.02]"
              >
                <div className="w-12 h-12 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center text-zinc-400 mb-6 group-hover:scale-105 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Icon size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-zinc-200 transition-colors tracking-tight">{t(skillGroup.category)}</h3>
                
                <div className="space-y-4">
                  {skillGroup.items.map((item, i) => (
                    <div key={i} className="flex items-center justify-between group/item">
                      <span className="text-zinc-500 group-hover/item:text-zinc-300 transition-colors duration-200 tracking-wide font-light">{item}</span>
                      <div className="w-1 h-1 rounded-full bg-zinc-800 group-hover/item:bg-zinc-400 transition-colors duration-200"></div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Skills;