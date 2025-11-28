import React from 'react';
import { Instagram, Mail, Phone, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">Kannsu</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
              Making gifting a dream come true. Curated hampers, custom sourcing, and love wrapped in every box. Minimal, aesthetic, and personal.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-secondary-500 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-secondary-500 transition">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-secondary-600 transition">All Products</a></li>
              <li><a href="#" className="hover:text-secondary-600 transition">Crochet Flowers</a></li>
              <li><a href="#" className="hover:text-secondary-600 transition">Chocolates</a></li>
              <li><a href="#" className="hover:text-secondary-600 transition">Polaroids</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-secondary-600 transition">Build a Hamper</a></li>
              <li><a href="#" className="hover:text-secondary-600 transition">Custom Sourcing</a></li>
              <li><a href="#" className="hover:text-secondary-600 transition">Gift Concierge</a></li>
              <li><a href="#" className="hover:text-secondary-600 transition">Corporate Gifting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-secondary-400" /> kannsu2510@gmail.com
              </li>
              <li>Mon - Sat: 9 AM - 7 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>© 2024 Kannsu. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Made with <Heart size={12} className="text-secondary-400 fill-secondary-400" /> by Kannsu Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;