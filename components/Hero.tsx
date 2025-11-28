import React from 'react';
import { Page } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  setPage: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ setPage }) => {
  return (
    <div className="relative overflow-hidden dreamy-bg">
      {/* Decorative Blobs - Pastel & Dreamy */}
      <div className="absolute top-0 -left-10 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
      <div className="absolute top-20 -right-10 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-cream rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-32 md:pb-32 text-center relative z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 border border-white text-secondary-800 text-sm font-medium mb-8 shadow-sm backdrop-blur-md">
          <Sparkles size={14} className="mr-2 text-secondary-400" />
          The Dream Gift Store
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 font-serif tracking-tight leading-tight">
          Gifts That Speak <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 italic font-light px-1">Your Heart</span>
        </h1>
        
        <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-500 mb-10 leading-relaxed font-light">
          Kannsu is your one-stop destination for curated hampers, crochet blooms, and heartfelt keepsakes. Minimal, dreamy, and made with love.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setPage(Page.SHOP)}
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-slate-800 hover:bg-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Shop Gifts
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </button>
          <button
            onClick={() => setPage(Page.HELP_ME_DECIDE)}
            className="inline-flex items-center justify-center px-8 py-4 border border-secondary-200 text-base font-medium rounded-full text-slate-600 bg-white hover:bg-secondary-50 shadow-sm hover:shadow-md transition-all duration-300"
          >
            Let Us Curate for You
          </button>
        </div>

        {/* Hero Image */}
        <div className="mt-20 relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 transform rotate-1 hover:rotate-0 transition-transform duration-700 mx-auto max-w-5xl bg-white group">
             <div className="aspect-[2.2/1] bg-secondary-50 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2000&auto=format&fit=crop" 
                  alt="Beautiful curated gift hamper" 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;