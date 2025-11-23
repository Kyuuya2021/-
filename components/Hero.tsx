import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const { t, language } = useLanguage();

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  const visionText = {
    en: "Realizing a society where everyone can live positively through education. Bridging the gap between Technology and Human Potential.",
    jp: "誰もが前向きに生きていける社会の実現を教育から実現していく。テクノロジーと人間の可能性の架け橋となる。"
  };

  const tagline = {
    en: "Student Entrepreneur & Engineer — Based in Tsukuba",
    jp: "学生起業家 & エンジニア — 茨城県つくば市拠点"
  };

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-[#050505]">
      {/* Liquid Organic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <div className="gooey-container absolute w-full h-full">
            <motion.div 
                animate={{ 
                    x: [0, 100, -50, 0],
                    y: [0, -50, 100, 0],
                    scale: [1, 1.2, 0.9, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-zinc-800 rounded-full mix-blend-screen opacity-40 blur-xl"
            />
            <motion.div 
                animate={{ 
                    x: [0, -100, 50, 0],
                    y: [0, 100, -50, 0],
                    scale: [1, 1.1, 0.8, 1]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[30%] right-[20%] w-[35vw] h-[35vw] bg-zinc-700 rounded-full mix-blend-screen opacity-30 blur-xl"
            />
            <motion.div 
                animate={{ 
                    x: [0, 50, -100, 0],
                    y: [0, -100, 50, 0],
                    scale: [1, 1.3, 0.9, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[10%] left-[30%] w-[45vw] h-[45vw] bg-zinc-900 rounded-full mix-blend-screen opacity-50 blur-xl"
            />
        </div>
        {/* Noise overlay specific to Hero for extra texture */}
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 h-full relative z-10 flex flex-col justify-center">
        
        {/* Typographic Composition */}
        <div className="relative w-full aspect-[16/9] md:aspect-auto md:h-[70vh]">
          
          {/* Top Left: First Name */}
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-0 left-0 z-10 mix-blend-difference"
          >
            <h1 className="text-[18vw] md:text-[14rem] font-serif font-bold text-white leading-[0.8] tracking-tighter opacity-90 select-none">
              YUYA
            </h1>
          </motion.div>

          {/* Middle: Vertical Text */}
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-20 left-[22vw] md:left-[35vw] h-[40vh] w-px bg-white/20 hidden md:block overflow-hidden"
          >
             <div className={`writing-vertical text-xs font-mono text-zinc-500 tracking-[0.3em] uppercase h-full py-4 pl-2 whitespace-nowrap ${language === 'jp' ? 'font-medium tracking-[0.5em]' : ''}`}>
                {t(tagline)}
             </div>
          </motion.div>

          {/* Bottom Right: Last Name */}
          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-20 right-0 z-20 text-right mix-blend-difference"
          >
            <h1 className="text-[12vw] md:text-[14rem] font-serif font-bold text-transparent stroke-white stroke-2 border-white leading-[0.8] tracking-tighter select-none"
                style={{ WebkitTextStroke: "1px white" }}>
              KAWA<br/>SOME
            </h1>
          </motion.div>

          {/* Floating Decorative Elements */}
          <motion.div 
            style={{ rotate }}
            className="absolute top-[40%] right-[20%] w-32 h-32 md:w-64 md:h-64 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-sm z-10"
          >
            <div className="text-center">
              <span className="block text-4xl md:text-6xl font-serif text-white/80">21</span>
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-zinc-500">Age / Year</span>
            </div>
          </motion.div>

          {/* Overlapping Description */}
          <div className="absolute bottom-0 left-0 md:left-12 max-w-md z-30">
            <p className="font-mono text-xs md:text-sm text-zinc-400 leading-relaxed bg-black/50 backdrop-blur-md p-6 border-l-2 border-white/50">
              <span className="text-white font-bold block mb-2 tracking-widest text-xs uppercase">[ VISION ]</span>
              {t(visionText)}
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 mix-blend-difference opacity-50">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;