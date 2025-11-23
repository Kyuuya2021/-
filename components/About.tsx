import React from 'react';
import Section from './ui/Section';
import { PROFILE, SOCIAL_LINKS, SKILLS } from '../constants';
import { Facebook, Linkedin, Instagram, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'facebook': return <Facebook size={20} />;
      case 'linkedin': return <Linkedin size={20} />;
      case 'instagram': return <Instagram size={20} />;
      default: return <FileText size={20} />;
    }
  };

  const marqueeTags = [...PROFILE.tags, ...PROFILE.tags, ...PROFILE.tags];
  const technicalArsenal = { en: "Technical Arsenal", jp: "技術スタック" };

  return (
    <Section id="about" className="bg-dark relative overflow-hidden py-0 md:py-0">
      <div className="container mx-auto px-6 md:px-12 relative z-10 py-32">
        
        {/* Editorial Layout: Centered Image with Overlapping Text */}
        <div className="relative flex flex-col md:block">
            
            {/* Background Large Text (Decorative) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 opacity-10 md:opacity-5 mix-blend-overlay">
                <span className="text-[20vw] font-serif font-bold text-white leading-none tracking-tighter">PROFILE</span>
            </div>

            {/* Central Image Block */}
            <div className="relative z-10 w-full md:w-[40%] mx-auto md:float-right md:ml-12 md:mb-12 aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-sm group">
                 <div className="absolute inset-0 bg-noise opacity-20 z-20 mix-blend-overlay"></div>
                 <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt={t(PROFILE.name)}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
            </div>

            {/* Overlapping Content: Statement */}
            <div className="relative z-20 mt-12 md:mt-32 md:w-[60%]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
                        <span className="w-8 h-px bg-zinc-500"></span>
                        STATEMENT
                    </h2>
                    
                    <h3 className="text-4xl md:text-6xl font-serif text-white leading-[1.1] mb-12 tracking-tight">
                        <span className="text-zinc-500">"</span>
                        {t(PROFILE.tagline)}
                        <span className="text-zinc-500">"</span>
                    </h3>

                    <div className="prose prose-lg prose-invert text-zinc-400 mb-16">
                        <p className={`whitespace-pre-line leading-loose text-base md:text-lg font-light tracking-wide ${language === 'jp' ? 'text-justify' : ''}`}>
                            {t(PROFILE.description)}
                        </p>
                    </div>

                    {/* Signature / Links */}
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                        <div className="flex gap-4">
                        {SOCIAL_LINKS.map((link) => (
                            <a 
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                            >
                            {getIcon(link.name)}
                            </a>
                        ))}
                        </div>
                        <div className="h-px w-12 bg-white/10 hidden md:block"></div>
                        <span className="font-serif italic text-zinc-500">{t(PROFILE.name)}</span>
                    </div>
                </motion.div>
            </div>
            
            {/* Clear fix for float layout */}
            <div className="clear-both"></div>
        </div>

        {/* Technical Skills - Magazine Bottom Column */}
        <div className="mt-32 border-t border-white/10 pt-16">
             <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-[0.2em] mb-12 text-center">{t(technicalArsenal)}</h4>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {SKILLS.map((s, i) => (
                   <div key={i} className="text-center md:text-left">
                      <div className="text-lg font-serif text-white mb-4 tracking-tight">{t(s.category)}</div>
                      <ul className="space-y-2">
                        {s.items.slice(0, 5).map((item, idx) => (
                            <li key={idx} className="text-xs text-zinc-500 uppercase tracking-widest">{item}</li>
                        ))}
                      </ul>
                   </div>
                ))}
                <div className="hidden md:flex flex-col justify-end">
                     <div className="text-[10px] text-zinc-600 font-mono">
                        DESIGNED IN TSUKUBA<br/>
                        ENGINEERED FOR THE WORLD
                     </div>
                </div>
             </div>
        </div>

        {/* Infinite Scroll Text */}
        <div className="mt-24 -mx-6 md:-mx-12 py-6 overflow-hidden relative">
           <div className="flex animate-marquee whitespace-nowrap opacity-30">
             {marqueeTags.map((tag, i) => (
               <div key={i} className="mx-8">
                 <span className="text-6xl md:text-8xl font-serif text-transparent stroke-text tracking-tighter" style={{ WebkitTextStroke: "1px #333" }}>{t(tag)}</span>
               </div>
             ))}
           </div>
        </div>
      </div>
    </Section>
  );
};

export default About;