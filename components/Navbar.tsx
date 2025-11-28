import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Heart } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', value: Page.HOME },
    { name: 'Shop Gifts', value: Page.SHOP },
    { name: 'Build a Hamper', value: Page.BUILD_HAMPER },
    { name: 'Help Me Decide', value: Page.HELP_ME_DECIDE },
    { name: 'Custom Request', value: Page.CUSTOM_REQUEST },
  ];

  const handleNav = (page: Page) => {
    setPage(page);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-secondary-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto">
            <button onClick={() => handleNav(Page.HOME)} className="text-3xl font-serif font-bold text-slate-800 tracking-wide hover:text-secondary-500 transition-colors">
              Kannsu
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNav(link.value)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentPage === link.value
                    ? 'text-secondary-600 border-b-2 border-secondary-300'
                    : 'text-slate-500 hover:text-secondary-400'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-slate-400 hover:text-secondary-400 transition hidden sm:block">
              <Heart size={20} />
            </button>
            <button 
              className="text-slate-500 hover:text-secondary-400 transition relative"
              onClick={() => handleNav(Page.BUILD_HAMPER)}
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-secondary-300 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-secondary-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNav(link.value)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === link.value
                    ? 'text-secondary-600 bg-secondary-50'
                    : 'text-slate-600 hover:text-secondary-600 hover:bg-secondary-50'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;