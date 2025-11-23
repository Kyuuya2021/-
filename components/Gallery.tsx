import React, { useRef } from 'react';
import { CREATIVE_WORKS } from '../constants';
import { Play } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform vertical scroll to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);

  return (
    <section ref={targetRef} id="gallery" className="relative h-[300vh] bg-[#050505]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Exhibition Header (Static) */}
        <div className="absolute top-12 left-12 z-20 mix-blend-difference pointer-events-none">
             <div className="text-xs font-mono text-zinc-500 mb-2 tracking-[0.3em] uppercase">Visual Exhibition</div>
             <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-none tracking-tighter">
               VISUAL<br/>DIARY
             </h2>
        </div>

        {/* Horizontal Scrolling Track */}
        <motion.div style={{ x }} className="flex gap-16 md:gap-32 px-12 md:px-32 items-center">
          
          {/* Intro Text Card */}
          <div className="w-[80vw] md:w-[30vw] shrink-0">
             <p className="text-xl md:text-3xl font-serif text-zinc-300 leading-relaxed">
               {t({
                 en: "Capturing moments and crafting stories through the lens. A collection of visual experiments exploring architecture, nature, and human emotion.",
                 jp: "レンズを通して瞬間を捉え、物語を紡ぐ。建築、自然、そして人間の感情を探求する視覚的実験のコレクション。"
               })}
             </p>
             <div className="mt-8 h-px w-24 bg-white/20"></div>
          </div>

          {/* Artwork Items */}
          {CREATIVE_WORKS.map((work, index) => {
             return (
              <div
                key={work.id}
                className="group relative w-[80vw] md:w-[45vw] shrink-0 aspect-[4/3] md:aspect-[16/9]"
              >
                <div className="w-full h-full overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700 ease-out cursor-none">
                  {/* Subtle Parallax on Image inside container could be added here, but keep it simple for smoothness */}
                  <img 
                    src={work.src} 
                    alt={t(work.title)} 
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>

                  {/* Play Button for Video */}
                  {work.type === 'video' && (
                     <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                        <div className="w-24 h-24 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center">
                           <Play className="fill-white text-white w-8 h-8" />
                        </div>
                     </div>
                  )}
                </div>

                {/* Caption - Exhibition Label Style */}
                <div className="absolute -bottom-16 left-0 w-full">
                  <div className="flex justify-between items-end border-b border-white/20 pb-4">
                    <div>
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">No. 0{index + 1}</span>
                        <h3 className="text-2xl font-serif text-white">{t(work.title)}</h3>
                    </div>
                    <p className="text-xs text-zinc-400 uppercase tracking-wider">{t(work.category)}</p>
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* End Spacer */}
          <div className="w-[10vw] shrink-0"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;