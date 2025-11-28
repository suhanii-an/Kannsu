import React, { useState } from 'react';
import { Check, ShoppingBag, Gift, PenTool } from 'lucide-react';

const steps = [
  { id: 1, name: 'Choose Gifts', icon: ShoppingBag },
  { id: 2, name: 'Select Packaging', icon: Gift },
  { id: 3, name: 'Personalize', icon: PenTool },
];

const BuildHamper: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-slate-800 mb-4">Build Your Own Hamper</h2>
        <p className="text-slate-500 font-light">Create a unique box of happiness in 3 simple steps.</p>
      </div>

      {/* Progress Bar */}
      <div className="relative flex justify-center mb-16">
        <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-slate-100 -z-10"></div>
        <div className="flex justify-between w-full max-w-2xl">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = currentStep >= step.id;
            return (
              <div key={step.id} className="flex flex-col items-center bg-transparent px-2">
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    isActive ? 'bg-secondary-400 border-secondary-400 text-white shadow-lg' : 'bg-white border-slate-200 text-slate-300'
                  }`}
                >
                  {currentStep > step.id ? <Check size={20} /> : <Icon size={20} />}
                </div>
                <span className={`mt-3 text-sm font-medium ${isActive ? 'text-secondary-800' : 'text-slate-300'}`}>
                  {step.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 border border-slate-50 min-h-[400px]">
        
        {/* Step 1: Mock Selection */}
        {currentStep === 1 && (
          <div className="text-center py-6">
            <h3 className="text-2xl font-serif text-slate-800 mb-6">Select Items to Add</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {/* Mock Item Cards for Selection */}
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="border border-slate-100 rounded-2xl p-4 hover:border-secondary-300 cursor-pointer transition bg-slate-50 hover:bg-white group">
                        <div className="h-24 bg-white rounded-xl mb-3 flex items-center justify-center text-slate-300 border border-slate-100">
                             <ShoppingBag size={24} className="opacity-20 group-hover:opacity-40 transition" />
                        </div>
                        <p className="font-semibold text-slate-700 text-sm">Example Gift {i}</p>
                        <p className="text-secondary-500 font-bold text-sm">₹{i * 100}</p>
                    </div>
                ))}
            </div>
            <p className="text-slate-400 mb-8 italic text-sm">Go to our Shop to add specific items to your cart/hamper!</p>
            <button 
              onClick={() => setCurrentStep(2)}
              className="bg-slate-800 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-700 transition shadow-md"
            >
              Next: Packaging
            </button>
          </div>
        )}

        {/* Step 2: Packaging */}
        {currentStep === 2 && (
          <div className="text-center py-6">
             <h3 className="text-2xl font-serif text-slate-800 mb-6">Choose Your Theme</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
                {['Blush Pink', 'Rustic Beige', 'Midnight Blue'].map((theme, idx) => (
                    <div key={theme} className="border-2 border-transparent hover:border-secondary-300 rounded-2xl p-6 bg-slate-50 cursor-pointer group transition-all">
                        <div className={`h-32 rounded-xl mb-4 ${idx === 0 ? 'bg-primary-100' : idx === 1 ? 'bg-orange-50' : 'bg-slate-200'}`}></div>
                        <h4 className="font-bold text-slate-800 group-hover:text-secondary-600 transition">{theme}</h4>
                    </div>
                ))}
             </div>
             <div className="flex justify-center gap-4">
                <button 
                    onClick={() => setCurrentStep(1)}
                    className="px-6 py-3 rounded-full text-slate-500 hover:bg-slate-100 transition"
                >
                    Back
                </button>
                <button 
                    onClick={() => setCurrentStep(3)}
                    className="bg-slate-800 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-700 transition shadow-md"
                >
                    Next: Personalize
                </button>
             </div>
          </div>
        )}

        {/* Step 3: Note */}
        {currentStep === 3 && (
          <div className="text-center py-6">
            <h3 className="text-2xl font-serif text-slate-800 mb-6">Add a Personal Touch</h3>
            <div className="max-w-md mx-auto mb-8">
                <textarea 
                    className="w-full p-5 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-secondary-200 focus:border-secondary-400 outline-none min-h-[150px] bg-slate-50 resize-none"
                    placeholder="Write your heartfelt message here..."
                ></textarea>
                <div className="mt-6 flex items-center justify-center gap-3 p-4 bg-secondary-50 rounded-xl border border-secondary-100">
                    <input type="checkbox" id="pol" className="w-5 h-5 text-secondary-600 focus:ring-secondary-500 rounded border-gray-300" />
                    <label htmlFor="pol" className="text-slate-600 font-medium text-sm">Include Polaroids? (Upload later)</label>
                </div>
            </div>
            <div className="flex justify-center gap-4">
                <button 
                    onClick={() => setCurrentStep(2)}
                    className="px-6 py-3 rounded-full text-slate-500 hover:bg-slate-100 transition"
                >
                    Back
                </button>
                <button 
                    className="bg-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition shadow-lg flex items-center gap-2"
                >
                    <Check size={18} />
                    Complete Hamper
                </button>
             </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default BuildHamper;