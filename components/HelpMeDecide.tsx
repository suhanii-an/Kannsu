import React, { useState } from 'react';
import { GiftRequest } from '../types';
import { getGiftSuggestions } from '../services/geminiService';
import { Sparkles, Loader2, Send, User, Phone, Mail } from 'lucide-react';

const HelpMeDecide: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [formData, setFormData] = useState<GiftRequest>({
    contactName: '',
    contactMobile: '',
    contactEmail: '',
    recipient: '',
    occasion: '',
    preferences: '',
    budget: '',
    vibe: 'Cute & Aesthetic'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const suggestion = await getGiftSuggestions(formData);
    setResult(suggestion);
    setLoading(false);
  };

  // Function to format the AI response (simple bolding of keys)
  const formatResult = (text: string) => {
    return text.split('\n').map((line, index) => {
      const parts = line.split('**');
      return (
        <p key={index} className="mb-2">
          {parts.map((part, i) => (
            i % 2 === 1 ? <strong key={i} className="text-secondary-700">{part}</strong> : part
          ))}
        </p>
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <span className="inline-block p-3 rounded-full bg-secondary-50 text-secondary-500 mb-4 shadow-sm border border-secondary-100">
            <Sparkles size={24} />
        </span>
        <h2 className="text-4xl font-serif font-bold text-slate-800 mb-4">Confused? Let Us Help!</h2>
        <p className="text-slate-500 max-w-lg mx-auto font-light">
          Tell us about your special person, and our AI (followed by our human curators) will design the perfect gift.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Form */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-50">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Contact Info Section */}
            <div className="space-y-4 pb-4 border-b border-slate-100">
               <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Your Contact Details</h3>
               <div className="relative">
                  <User size={18} className="absolute top-3.5 left-3 text-slate-400" />
                  <input 
                    type="text" name="contactName" required 
                    placeholder="Your Name"
                    value={formData.contactName} onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-secondary-400 focus:ring-2 focus:ring-secondary-100 outline-none transition"
                  />
               </div>
               <div className="relative">
                  <Phone size={18} className="absolute top-3.5 left-3 text-slate-400" />
                  <input 
                    type="tel" name="contactMobile" required 
                    placeholder="Mobile Number"
                    value={formData.contactMobile} onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-secondary-400 focus:ring-2 focus:ring-secondary-100 outline-none transition"
                  />
               </div>
               <div className="relative">
                  <Mail size={18} className="absolute top-3.5 left-3 text-slate-400" />
                  <input 
                    type="email" name="contactEmail" required 
                    placeholder="Email Address"
                    value={formData.contactEmail} onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-secondary-400 focus:ring-2 focus:ring-secondary-100 outline-none transition"
                  />
               </div>
            </div>

            {/* Gift Details Section */}
            <div className="space-y-4 pt-2">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Gift Details</h3>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Who is this for?</label>
                  <input 
                    type="text" name="recipient" required 
                    placeholder="e.g., Girlfriend, Mom, Best Friend"
                    value={formData.recipient} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-secondary-400 focus:ring-2 focus:ring-secondary-100 outline-none transition"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Occasion</label>
                  <input 
                    type="text" name="occasion" required
                    placeholder="e.g., Anniversary, Birthday, Just Because"
                    value={formData.occasion} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-secondary-400 focus:ring-2 focus:ring-secondary-100 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Budget Range</label>
                  <select 
                    name="budget" value={formData.budget} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-secondary-400 focus:ring-2 focus:ring-secondary-100 outline-none transition bg-white text-slate-600"
                  >
                    <option value="">Select a budget</option>
                    <option value="₹500 - ₹1000">₹500 - ₹1000</option>
                    <option value="₹1000 - ₹2000">₹1000 - ₹2000</option>
                    <option value="₹2000+">₹2000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Their Vibe / Style</label>
                  <select 
                    name="vibe" value={formData.vibe} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-secondary-400 focus:ring-2 focus:ring-secondary-100 outline-none transition bg-white text-slate-600"
                  >
                    <option value="Cute & Aesthetic">Cute & Aesthetic</option>
                    <option value="Elegant & Classy">Elegant & Classy</option>
                    <option value="Minimalist">Minimalist</option>
                    <option value="Romantic">Romantic</option>
                    <option value="Funky & Colorful">Funky & Colorful</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Likes / Preferences</label>
                  <textarea 
                    name="preferences" rows={3} required
                    placeholder="She loves cats, the color blue, and coffee..."
                    value={formData.preferences} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-secondary-400 focus:ring-2 focus:ring-secondary-100 outline-none transition"
                  ></textarea>
                </div>
            </div>

            <button 
              type="submit" disabled={loading}
              className="w-full py-4 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition shadow-lg flex justify-center items-center gap-2 disabled:opacity-70"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
              {loading ? 'Curating Ideas...' : 'Generate Gift Ideas'}
            </button>
          </form>
        </div>

        {/* Results Area */}
        <div className="relative min-h-[400px]">
          {result ? (
            <div className="bg-gradient-to-br from-white to-secondary-50 p-8 rounded-3xl shadow-xl border border-secondary-100 h-full animate-fade-in flex flex-col">
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6 flex items-center">
                <Sparkles className="text-secondary-400 mr-2" size={24} />
                Curated For You
              </h3>
              
              <div className="prose prose-slate text-slate-600 leading-relaxed text-sm mb-6 flex-grow overflow-y-auto custom-scrollbar pr-2 max-h-[500px]">
                {formatResult(result)}
              </div>
              
              <div className="mt-auto pt-6 border-t border-secondary-200">
                <p className="text-sm text-slate-500 italic mb-4 text-center">
                  Like these ideas? Click below to send this plan to Kannsu!
                </p>
                
                {/* Hidden Form for Submission to Formspree */}
                <form action="https://formspree.io/f/xzzlyeal" method="POST">
                   <input type="hidden" name="form_type" value="Help Me Decide - AI Result" />
                   <input type="hidden" name="customer_name" value={formData.contactName} />
                   <input type="hidden" name="customer_mobile" value={formData.contactMobile} />
                   <input type="hidden" name="customer_email" value={formData.contactEmail} />
                   <input type="hidden" name="recipient" value={formData.recipient} />
                   <input type="hidden" name="occasion" value={formData.occasion} />
                   <input type="hidden" name="budget" value={formData.budget} />
                   <input type="hidden" name="preferences" value={formData.preferences} />
                   {/* Send the AI result text as well */}
                   <textarea name="ai_generated_suggestion" className="hidden" readOnly value={result} />

                   <button type="submit" className="w-full py-3 bg-secondary-600 text-white rounded-xl font-bold hover:bg-secondary-700 transition flex items-center justify-center gap-2 shadow-md">
                    <Send size={18} />
                    Ask Kannsu to Create This
                   </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-slate-200 rounded-3xl text-slate-400 bg-white/50">
              <GiftRequestPlaceholder />
              <p className="mt-4 font-medium">Fill the form to reveal your custom curated hampers!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const GiftRequestPlaceholder = () => (
  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-20 text-slate-400">
    <rect x="3" y="8" width="18" height="4" rx="1"></rect>
    <path d="M12 8v13"></path>
    <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
    <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
  </svg>
);

export default HelpMeDecide;