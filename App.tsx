import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Shop from './components/Shop';
import BuildHamper from './components/BuildHamper';
import HelpMeDecide from './components/HelpMeDecide';
import CustomRequest from './components/CustomRequest';
import Footer from './components/Footer';
import { Page } from './types';
import { Quote } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  // Simple scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case Page.HOME:
        return (
          <>
            <Hero setPage={setCurrentPage} />
            
            {/* About Section Snippet */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-sm font-bold text-secondary-400 tracking-widest uppercase mb-2 block">Our Story</span>
                    <h2 className="text-4xl font-serif font-bold text-slate-800 mb-8">About Kannsu</h2>
                    <p className="text-xl text-slate-500 leading-relaxed font-light">
                        We believe a gift isn't just an object; it's a memory. At <strong>Kannsu</strong>, we replace the stress of "what to gift" with the joy of giving. From everlasting crochet blooms to sourcing that one specific perfume they mentioned months ago, we handle it all with a minimal, dreamy touch.
                    </p>
                </div>
            </section>

            <Shop />

            {/* Testimonials */}
            <section className="py-24 bg-gradient-to-b from-secondary-50/30 to-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-center text-slate-800 mb-16">Love Letters</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Sarah M.", text: "The crochet tulips were absolutely stunning and the packaging was so premium. My mom cried happy tears!" },
                            { name: "Arjun K.", text: "I had no idea what to get my girlfriend. The 'Help Me Decide' feature was a lifesaver. The curated hamper was perfect." },
                            { name: "Emily R.", text: "Asked them to source a vintage watch and they actually found it. Best service ever." }
                        ].map((t, i) => (
                            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative border border-secondary-100/50">
                                <div className="absolute -top-5 left-8 bg-secondary-100 p-2 rounded-full text-secondary-400">
                                  <Quote size={24} fill="currentColor" className="opacity-50" />
                                </div>
                                <p className="text-slate-600 mb-6 relative z-10 pt-4 italic leading-relaxed">"{t.text}"</p>
                                <p className="font-bold text-slate-800 border-t border-slate-50 pt-4 inline-block pr-8">- {t.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
          </>
        );
      case Page.SHOP:
        return <Shop />;
      case Page.BUILD_HAMPER:
        return <BuildHamper />;
      case Page.HELP_ME_DECIDE:
        return <HelpMeDecide />;
      case Page.CUSTOM_REQUEST:
        return <CustomRequest />;
      default:
        return <Hero setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col dreamy-bg">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
}

export default App;