import React from 'react';
import Section from './ui/Section';
import { Mail, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const labels = {
    connect: { en: "Let's Connect", jp: "お問い合わせ" },
    desc: {
      en: "I am always open to new opportunities, collaborations, or just a chat about technology, entrepreneurship, and education.",
      jp: "新しい機会、コラボレーション、テクノロジーや起業、教育についての雑談など、いつでもご連絡をお待ちしています。"
    },
    emailMe: { en: "Email Me", jp: "メール" },
    sendMessage: { en: "Send a Message", jp: "メッセージを送る" },
    name: { en: "Name", jp: "お名前" },
    email: { en: "Email", jp: "メールアドレス" },
    subject: { en: "Subject", jp: "件名" },
    message: { en: "Message", jp: "本文" },
    send: { en: "Send Message", jp: "送信する" }
  };

  return (
    <Section id="contact">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tighter">{t(labels.connect)}</h2>
            <p className="text-zinc-400 mb-8 text-lg leading-relaxed tracking-wide font-light">
              {t(labels.desc)}
            </p>
            
            <div className="space-y-6">
              <a 
                href="mailto:yuuy1230@gmail.com" 
                className="flex items-center gap-4 p-5 rounded-2xl glass-card hover:bg-white/[0.04] transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 uppercase tracking-[0.2em] mb-1 font-bold">{t(labels.emailMe)}</div>
                  <div className="text-white font-medium text-lg tracking-wide">yuuy1230@gmail.com</div>
                </div>
              </a>
            </div>
          </div>

          <form className="space-y-5 glass-card p-8 rounded-3xl border border-white/5">
            <h3 className="text-xl text-white font-serif mb-6 tracking-tight">{t(labels.sendMessage)}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs text-zinc-500 uppercase font-bold tracking-[0.1em] ml-1">{t(labels.name)}</label>
                <input 
                  type="text" 
                  className="w-full glass-input rounded-xl p-3 text-white placeholder-zinc-700 focus:outline-none transition-all font-light"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-zinc-500 uppercase font-bold tracking-[0.1em] ml-1">{t(labels.email)}</label>
                <input 
                  type="email" 
                  className="w-full glass-input rounded-xl p-3 text-white placeholder-zinc-700 focus:outline-none transition-all font-light"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs text-zinc-500 uppercase font-bold tracking-[0.1em] ml-1">{t(labels.subject)}</label>
              <input 
                type="text" 
                className="w-full glass-input rounded-xl p-3 text-white placeholder-zinc-700 focus:outline-none transition-all font-light"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs text-zinc-500 uppercase font-bold tracking-[0.1em] ml-1">{t(labels.message)}</label>
              <textarea 
                rows={5}
                className="w-full glass-input rounded-xl p-3 text-white placeholder-zinc-700 focus:outline-none transition-all resize-none font-light"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button 
              type="button"
              className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all transform hover:-translate-y-0.5 tracking-wider uppercase text-sm border border-transparent hover:border-zinc-300"
            >
              <span>{t(labels.send)}</span>
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;