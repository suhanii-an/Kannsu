import React from 'react';
import { Search, Clock, Package } from 'lucide-react';

const CustomRequest: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-slate-800 rounded-[2.5rem] text-white p-8 md:p-16 overflow-hidden relative shadow-2xl">
        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6">Need Something Special?</h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed font-light">
              Looking for a specific vintage watch, a rare perfume, or a specific edition book to add to your hamper? 
              <br/><br/>
              At Kannsu, we go the extra mile. Tell us what you need, and we will source it, package it beautifully, and deliver it.
            </p>
            
            <div className="space-y-6">
                <div className="flex items-start gap-5">
                    <div className="bg-slate-700/50 p-4 rounded-xl backdrop-blur-sm border border-slate-600"><Search className="text-primary-300" /></div>
                    <div>
                        <h4 className="font-bold text-lg text-primary-100">You Request</h4>
                        <p className="text-slate-400 text-sm mt-1">Describe the item in detail.</p>
                    </div>
                </div>
                <div className="flex items-start gap-5">
                    <div className="bg-slate-700/50 p-4 rounded-xl backdrop-blur-sm border border-slate-600"><Clock className="text-secondary-300" /></div>
                    <div>
                        <h4 className="font-bold text-lg text-secondary-200">We Source</h4>
                        <p className="text-slate-400 text-sm mt-1">We find the best quality option within your budget.</p>
                    </div>
                </div>
                <div className="flex items-start gap-5">
                    <div className="bg-slate-700/50 p-4 rounded-xl backdrop-blur-sm border border-slate-600"><Package className="text-white" /></div>
                    <div>
                        <h4 className="font-bold text-lg text-white">We Curate</h4>
                        <p className="text-slate-400 text-sm mt-1">We package it with flowers and chocolates into a dream hamper.</p>
                    </div>
                </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 text-slate-800 shadow-xl border border-slate-100 relative overflow-hidden">
            <h3 className="text-2xl font-serif font-bold mb-6 text-slate-800 relative z-10">Custom Sourcing Request</h3>
            
            <form 
              action="https://formspree.io/f/xzzlyeal" 
              method="POST" 
              className="space-y-4 relative z-10"
            >
                <input type="hidden" name="form_type" value="Custom Sourcing Request" />
                
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">What item do you need?</label>
                    <input 
                      type="text" 
                      name="item_needed" 
                      required
                      className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-secondary-300 focus:border-secondary-400 transition" 
                      placeholder="e.g. Casio Vintage Watch Gold" 
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Description / Details</label>
                    <textarea 
                      name="description" 
                      required
                      className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-secondary-300 focus:border-secondary-400 transition resize-none" 
                      rows={3} 
                      placeholder="Specific model, color, size..."
                    ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Budget Max (₹)</label>
                        <input 
                          type="text" 
                          name="budget"
                          className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-secondary-300 focus:border-secondary-400 transition" 
                          placeholder="₹" 
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Date Needed</label>
                        <input 
                          type="date" 
                          name="date_needed"
                          className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-secondary-300 focus:border-secondary-400 transition" 
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Your Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-secondary-300 focus:border-secondary-400 transition" 
                      placeholder="hello@example.com" 
                    />
                </div>
                <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-700 transition mt-2 shadow-lg">
                    Submit Request
                </button>
            </form>

            {/* Form BG decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-50 rounded-bl-full -z-0"></div>
          </div>

        </div>

        {/* Decorative Circles */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default CustomRequest;