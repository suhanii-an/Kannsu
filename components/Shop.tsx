import React, { useState } from 'react';
import { Plus, X, ShoppingBag, Minus, Info, Check } from 'lucide-react';

// --- Data & Constants ---

interface ChocolateOption {
  name: string;
  price: number;
}

const BOUQUET_CHOCOLATES: ChocolateOption[] = [
  { name: 'Snickers stick', price: 25 },
  { name: 'KitKat stick', price: 20 },
  { name: 'Ferrero Rocher stick', price: 50 },
  { name: 'Dairy Milk (small) stick', price: 10 },
  { name: 'Raffaello stick', price: 50 },
];

const FLOWER_COLORS = ['Red', 'White', 'Yellow', 'Lilac', 'Baby Pink'];
const RIBBON_COLORS = ['Red', 'Baby Pink', 'White', 'Lilac', 'Purple', 'Yellow', 'Baby Blue', 'Navy Blue', 'Black'];
const YARN_COLORS = ['Pastel Pink', 'Lilac', 'Sky Blue', 'Mint Green', 'Butter Yellow', 'Cream', 'Beige', 'Charcoal'];
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

// Base Product List for the Grid with Real Images
const baseProducts = [
  // Special Builders
  { 
    id: 'crochet-tulips', 
    name: 'Handmade Crochet Tulips', 
    category: 'Flowers', 
    price: 50, 
    isBuilder: true, 
    image: 'https://images.unsplash.com/photo-1681987588321-c7a6e12361b2?q=80&w=800&auto=format&fit=crop', 
    description: 'Everlasting wool tulips. Customize quantity and colors. 10% off on 5+.' 
  },
  { 
    id: 'crochet-roses', 
    name: 'Handmade Crochet Roses', 
    category: 'Flowers', 
    price: 40, 
    isBuilder: true, 
    image: 'https://images.unsplash.com/photo-1616606103915-dea7be788566?q=80&w=800&auto=format&fit=crop', 
    description: 'Timeless crochet roses. Customize quantity and colors. 10% off on 5+.' 
  },
  { 
    id: 'chocolate-bouquet', 
    name: 'Build A Chocolate Bouquet', 
    category: 'Chocolates', 
    price: 0, 
    isBuilder: true, 
    image: 'https://images.unsplash.com/photo-1594145020950-89190226359f?q=80&w=800&auto=format&fit=crop', 
    description: 'Mix and match up to 15 chocolates in a beautiful arrangement.' 
  },
  { 
    id: 'ribbon-flowers', 
    name: 'Silk Ribbon Flowers', 
    category: 'Flowers', 
    price: 10, 
    isBuilder: true, 
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=800&auto=format&fit=crop', 
    description: 'Shiny silk ribbon roses. Choose your bundle.' 
  },
  {
    id: 'crochet-keychain',
    name: 'Crochet Alphabet Keychain',
    category: 'Keychains',
    price: 50,
    isBuilder: true,
    image: 'https://images.unsplash.com/photo-1627042576180-2a8d56b0d993?q=80&w=800&auto=format&fit=crop', // Placeholder for crochet item
    description: 'Cute personalized initial keychains. Pick your letter and yarn color.'
  },
  { 
    id: 'polaroids', 
    name: 'Polaroid Prints', 
    category: 'Polaroids', 
    price: 150, 
    isBuilder: true, 
    image: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&w=800&auto=format&fit=crop', 
    description: 'Turn your digital photos into aesthetic physical prints. Packs of 10, 15, or 20.' 
  },

  // Standalone Chocolates
  { 
    id: 'cadbury-mini', 
    name: 'Cadbury Dairy Milk (Mini)', 
    category: 'Chocolates', 
    price: 10, 
    image: 'https://images.unsplash.com/photo-1629224855735-86640c6a3809?q=80&w=800&auto=format&fit=crop', 
    description: 'Classic sweet treat (₹10).' 
  },
  { 
    id: 'silk', 
    name: 'Dairy Milk Silk', 
    category: 'Chocolates', 
    price: 80, 
    image: 'https://images.unsplash.com/photo-1548810793-1816ce399468?q=80&w=800&auto=format&fit=crop', 
    description: 'Smooth and creamy premium chocolate.' 
  },
  { 
    id: 'kitkat-4', 
    name: 'KitKat (4-Finger)', 
    category: 'Chocolates', 
    price: 30, 
    image: 'https://images.unsplash.com/photo-1624695029649-65444cb3f225?q=80&w=800&auto=format&fit=crop', 
    description: 'Have a break, have a KitKat.' 
  },
  { 
    id: 'snickers', 
    name: 'Snickers Bar', 
    category: 'Chocolates', 
    price: 40, 
    image: 'https://images.unsplash.com/photo-1558230559-002f2323e06a?q=80&w=800&auto=format&fit=crop', 
    description: 'Hungry? Grab a Snickers.' 
  },
  { 
    id: 'ferrero-3', 
    name: 'Ferrero Rocher (3 pcs)', 
    category: 'Chocolates', 
    price: 120, 
    image: 'https://images.unsplash.com/photo-1582176604873-6a5814524c45?q=80&w=800&auto=format&fit=crop', 
    description: 'Golden hazelnut chocolates pack.' 
  },
  { 
    id: 'raffaello-3', 
    name: 'Raffaello (3 pcs)', 
    category: 'Chocolates', 
    price: 120, 
    image: 'https://images.unsplash.com/photo-1548169904-26a0c23945a0?q=80&w=800&auto=format&fit=crop', 
    description: 'Coconut almond treats pack.' 
  },
];

const Shop: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  // --- Modal Logic States ---
  // Flower Builder State
  const [flowerQty, setFlowerQty] = useState(1);
  const [flowerColors, setFlowerColors] = useState<string[]>([]);
  
  // Ribbon Builder State
  const [ribbonBundle, setRibbonBundle] = useState(1);
  
  // Polaroid State
  const [polaroidPack, setPolaroidPack] = useState(10);
  
  // Chocolate Bouquet State (Map of "Chocolate Name" -> Quantity)
  const [chocoSelections, setChocoSelections] = useState<Record<string, number>>({});

  // Keychain Builder State
  const [keychainQty, setKeychainQty] = useState(1);
  const [keychainLetter, setKeychainLetter] = useState('A');
  const [keychainColor, setKeychainColor] = useState(YARN_COLORS[0]);

  const categories = ['All', 'Flowers', 'Chocolates', 'Keychains', 'Polaroids'];

  const filteredProducts = filter === 'All' 
    ? baseProducts 
    : baseProducts.filter(p => p.category === filter);

  const openModal = (product: any) => {
    setSelectedProduct(product);
    // Reset States
    setFlowerQty(1);
    setFlowerColors([]);
    setRibbonBundle(1);
    setPolaroidPack(10);
    setChocoSelections({});
    setKeychainQty(1);
    setKeychainLetter('A');
    setKeychainColor(YARN_COLORS[0]);
  };

  const closeModal = () => setSelectedProduct(null);

  // --- Calculators ---

  const calculateTulipPrice = () => {
    const base = 50;
    const raw = base * flowerQty;
    // 10% discount for 5+
    return flowerQty >= 5 ? raw * 0.9 : raw;
  };

  const calculateRosePrice = () => {
    const base = 40;
    const raw = base * flowerQty;
    // 10% discount for 5+
    return flowerQty >= 5 ? raw * 0.9 : raw;
  };

  const calculateRibbonPrice = () => {
    // 10 per stick
    return ribbonBundle * 10;
  };

  const calculatePolaroidPrice = () => {
    if (polaroidPack === 10) return 150;
    if (polaroidPack === 15) return 210;
    if (polaroidPack === 20) return 260;
    return 0;
  };

  const calculateChocoBouquetPrice = () => {
    let total = 0;
    Object.entries(chocoSelections).forEach(([name, qty]) => {
      const item = BOUQUET_CHOCOLATES.find(c => c.name === name);
      if (item) total += item.price * qty;
    });
    return total;
  };

  const calculateKeychainPrice = () => {
    return keychainQty * 50;
  }

  const totalSticks = Object.values(chocoSelections).reduce((a, b) => a + b, 0);

  // --- Modal Content Renderers ---

  const renderFlowerBuilder = (type: 'tulips' | 'roses') => {
    const price = type === 'tulips' ? calculateTulipPrice() : calculateRosePrice();
    const unitPrice = type === 'tulips' ? 50 : 40;
    const originalPrice = unitPrice * flowerQty;
    const isDiscounted = flowerQty >= 5;

    return (
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Quantity (1-10)</label>
          <div className="flex items-center gap-4">
            <input 
              type="range" min="1" max="10" 
              value={flowerQty} 
              onChange={(e) => setFlowerQty(parseInt(e.target.value))}
              className="w-full accent-secondary-500" 
            />
            <span className="font-bold text-xl w-8 text-center text-slate-700">{flowerQty}</span>
          </div>
          {isDiscounted && <p className="text-green-600 text-sm mt-1 bg-green-50 px-2 py-1 inline-block rounded">✨ 10% Discount Applied for 5+ items!</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Select Colors (Mix & Match)</label>
          <div className="flex flex-wrap gap-2">
            {FLOWER_COLORS.map(c => (
              <button 
                key={c}
                onClick={() => {
                  if (flowerColors.includes(c)) setFlowerColors(flowerColors.filter(col => col !== c));
                  else setFlowerColors([...flowerColors, c]);
                }}
                className={`px-3 py-1.5 rounded-full border text-sm transition ${
                  flowerColors.includes(c) ? 'bg-secondary-600 text-white border-secondary-600' : 'bg-white border-slate-200 text-slate-600 hover:border-secondary-300'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-2">Selected: {flowerColors.length > 0 ? flowerColors.join(', ') : 'None'} (Specify mix ratio in notes)</p>
        </div>

        <div className="bg-secondary-50 p-4 rounded-xl flex justify-between items-center border border-secondary-100">
            <span className="text-secondary-800 font-medium">Total Price</span>
            <div className="text-right">
                {isDiscounted && <span className="text-slate-400 line-through text-sm mr-2">₹{originalPrice}</span>}
                <span className="text-2xl font-serif font-bold text-slate-900">₹{price.toFixed(0)}</span>
            </div>
        </div>
      </div>
    );
  };

  const renderRibbonBuilder = () => (
    <div className="space-y-6">
        <div>
           <label className="block text-sm font-medium text-slate-700 mb-3">Choose Bundle Size</label>
           <div className="flex flex-wrap gap-3">
              {[1, 2, 3, 5, 10].map(num => (
                  <button
                    key={num}
                    onClick={() => setRibbonBundle(num)}
                    className={`w-12 h-12 rounded-lg font-bold border-2 transition ${
                        ribbonBundle === num ? 'border-secondary-400 bg-secondary-50 text-secondary-700' : 'border-slate-200 text-slate-500 hover:border-secondary-200'
                    }`}
                  >
                    {num}
                  </button>
              ))}
           </div>
           {ribbonBundle === 10 && <p className="text-xs text-slate-500 mt-2 bg-slate-100 p-2 rounded">For more than 10 sticks, please contact us or add a custom request!</p>}
        </div>

        <div>
            <span className="block text-sm font-medium text-slate-700 mb-2">Available Colors (Mix & Match):</span>
            <div className="flex flex-wrap gap-2 text-sm text-slate-600">
                {RIBBON_COLORS.map(c => (
                     <span key={c} className="bg-white border border-slate-100 px-2 py-1 rounded-full">{c}</span>
                ))}
            </div>
            <p className="text-xs text-slate-400 mt-2 italic">You can pick any combination of these colors.</p>
        </div>

        <div className="bg-secondary-50 p-4 rounded-xl flex justify-between items-center border border-secondary-100">
            <span className="text-secondary-800 font-medium">Total Price</span>
            <span className="text-2xl font-serif font-bold text-slate-900">₹{calculateRibbonPrice()}</span>
        </div>
    </div>
  );

  const renderPolaroidBuilder = () => (
    <div className="space-y-6">
        <div className="text-sm text-slate-600 bg-blue-50 p-4 rounded-lg border border-blue-100 flex gap-2">
            <Info size={16} className="shrink-0 mt-0.5" />
            <p>You will upload your photos after placing the order via WhatsApp or Email.</p>
        </div>
        <div>
           <label className="block text-sm font-medium text-slate-700 mb-3">Select Pack Size</label>
           <div className="grid grid-cols-3 gap-3">
              {[10, 15, 20].map(num => (
                  <button
                    key={num}
                    onClick={() => setPolaroidPack(num)}
                    className={`py-3 rounded-xl font-bold border-2 transition flex flex-col items-center ${
                        polaroidPack === num ? 'border-slate-800 bg-slate-800 text-white' : 'border-slate-200 text-slate-500 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-lg">{num}</span>
                    <span className="text-[10px] font-normal uppercase">Prints</span>
                  </button>
              ))}
           </div>
        </div>

        <div className="bg-secondary-50 p-4 rounded-xl flex justify-between items-center border border-secondary-100">
            <span className="text-secondary-800 font-medium">Total Price</span>
            <span className="text-2xl font-serif font-bold text-slate-900">₹{calculatePolaroidPrice()}</span>
        </div>
    </div>
  );

  const renderChocolateBouquetBuilder = () => (
    <div className="space-y-6">
        <div className={`flex justify-between items-center p-3 rounded-lg border ${totalSticks > 15 ? 'bg-red-50 border-red-100' : 'bg-yellow-50 border-yellow-100'}`}>
            <span className="text-sm font-medium text-slate-700">Total Sticks Selected</span>
            <span className={`text-sm font-bold ${totalSticks >= 15 ? 'text-red-600' : 'text-slate-900'}`}>{totalSticks} / 15 Max</span>
        </div>

        <div className="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
            {BOUQUET_CHOCOLATES.map((choco) => {
                const qty = chocoSelections[choco.name] || 0;
                return (
                    <div key={choco.name} className="flex justify-between items-center border-b border-slate-50 pb-2">
                        <div>
                            <p className="font-medium text-slate-700 text-sm">{choco.name}</p>
                            <p className="text-xs text-slate-400">₹{choco.price} per stick</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button 
                                onClick={() => setChocoSelections({...chocoSelections, [choco.name]: Math.max(0, qty - 1)})}
                                disabled={qty === 0}
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 disabled:opacity-30 hover:bg-slate-200"
                            >
                                <Minus size={14} />
                            </button>
                            <span className="w-4 text-center text-sm font-bold text-slate-700">{qty}</span>
                            <button 
                                onClick={() => {
                                    if (totalSticks < 15) {
                                        setChocoSelections({...chocoSelections, [choco.name]: qty + 1});
                                    }
                                }}
                                disabled={totalSticks >= 15}
                                className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary-600 text-white disabled:opacity-30 hover:bg-secondary-700"
                            >
                                <Plus size={14} />
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>

        <div className="bg-secondary-50 p-4 rounded-xl flex justify-between items-center border border-secondary-100">
            <span className="text-secondary-800 font-medium">Bouquet Price</span>
            <span className="text-2xl font-serif font-bold text-slate-900">₹{calculateChocoBouquetPrice()}</span>
        </div>
    </div>
  );

  const renderKeychainBuilder = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg text-sm text-slate-600 flex gap-2">
         <Info size={16} className="mt-0.5" />
         Each keychain is handmade with soft yarn. 
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        {/* Letter Selection */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Choose Letter</label>
          <div className="relative">
            <select 
              value={keychainLetter}
              onChange={(e) => setKeychainLetter(e.target.value)}
              className="w-full appearance-none bg-white border border-slate-200 text-slate-700 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-secondary-500"
            >
              {ALPHABET.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        {/* Quantity Selection */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Quantity</label>
          <div className="flex items-center">
             <button onClick={() => setKeychainQty(Math.max(1, keychainQty - 1))} className="p-3 bg-slate-100 rounded-l-xl hover:bg-slate-200"><Minus size={14}/></button>
             <span className="p-3 w-full text-center bg-slate-50 border-t border-b border-slate-100 font-bold text-slate-700">{keychainQty}</span>
             <button onClick={() => setKeychainQty(keychainQty + 1)} className="p-3 bg-slate-100 rounded-r-xl hover:bg-slate-200"><Plus size={14}/></button>
          </div>
        </div>
      </div>

      {/* Color Selection */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">Choose Yarn Color</label>
        <div className="flex flex-wrap gap-3">
          {YARN_COLORS.map((color) => (
             <button
                key={color}
                onClick={() => setKeychainColor(color)}
                className={`px-4 py-2 rounded-full border text-sm flex items-center gap-2 transition-all ${
                  keychainColor === color 
                    ? 'bg-slate-800 text-white border-slate-800 shadow-md' 
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                }`}
             >
                {keychainColor === color && <Check size={14} />}
                {color}
             </button>
          ))}
        </div>
      </div>

      <div className="bg-secondary-50 p-4 rounded-xl flex justify-between items-center border border-secondary-100">
          <div className="flex flex-col">
             <span className="text-secondary-800 font-medium">Total Price</span>
             <span className="text-xs text-secondary-400">₹50 × {keychainQty}</span>
          </div>
          <span className="text-2xl font-serif font-bold text-slate-900">₹{calculateKeychainPrice()}</span>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-slate-800 mb-4">Curated Treasures</h2>
        <p className="text-slate-500 max-w-2xl mx-auto font-light">
          Pick individual items or build your own custom bouquets. <br/>
          <span className="italic text-sm text-slate-400">Note: Actual items are handcrafted and may vary slightly from images.</span>
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat
                ? 'bg-slate-800 text-white shadow-lg'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-secondary-300 hover:text-secondary-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-50 overflow-hidden flex flex-col">
            <div className="relative aspect-square overflow-hidden bg-slate-50 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
              />
              
              {/* Quick Actions */}
              <div className="absolute bottom-6 right-6 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                <button 
                    onClick={() => openModal(product)}
                    className="px-4 py-2 bg-white rounded-full text-sm font-bold text-slate-700 hover:text-secondary-600 shadow-lg transition hover:bg-secondary-50"
                >
                    {product.isBuilder ? 'Customize' : 'View'}
                </button>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="text-xs font-semibold text-secondary-400 mb-1 uppercase tracking-wider">{product.category}</div>
              <h3 className="text-lg font-bold text-slate-800 mb-2 font-serif tracking-wide">{product.name}</h3>
              <p className="text-slate-500 text-sm mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
                <span className="text-xl font-bold text-slate-900 font-serif">
                    {product.price === 0 ? 'Custom' : `₹${product.price}`}
                    {product.isBuilder && product.price > 0 && <span className="text-xs font-sans font-normal text-slate-400 ml-1">starts at</span>}
                </span>
                <button 
                    onClick={() => openModal(product)}
                    className="text-sm font-medium text-slate-500 hover:text-secondary-600 transition"
                >
                  {product.isBuilder ? 'Build Now →' : 'Add to Cart →'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={closeModal}></div>
            <div className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-hidden relative shadow-2xl flex flex-col md:flex-row z-10 animate-fade-in-up">
                
                {/* Close Button */}
                <button onClick={closeModal} className="absolute top-4 right-4 z-20 bg-white/80 p-2 rounded-full hover:bg-slate-100 text-slate-400 transition">
                    <X size={24} />
                </button>

                {/* Left: Image */}
                <div className="w-full md:w-1/2 bg-slate-100 relative">
                    <img 
                        src={selectedProduct.image} 
                        alt={selectedProduct.name} 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right: Content */}
                <div className="w-full md:w-1/2 p-8 overflow-y-auto custom-scrollbar">
                    <span className="text-secondary-500 font-bold text-xs tracking-wider uppercase bg-secondary-50 px-2 py-1 rounded-md">{selectedProduct.category}</span>
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mt-3 mb-3">{selectedProduct.name}</h2>
                    <p className="text-slate-500 mb-6 leading-relaxed text-sm">{selectedProduct.description}</p>
                    
                    <div className="border-t border-b border-slate-100 py-6 mb-6">
                        {/* Dynamic Render based on Product ID */}
                        {selectedProduct.id === 'crochet-tulips' && renderFlowerBuilder('tulips')}
                        {selectedProduct.id === 'crochet-roses' && renderFlowerBuilder('roses')}
                        {selectedProduct.id === 'chocolate-bouquet' && renderChocolateBouquetBuilder()}
                        {selectedProduct.id === 'ribbon-flowers' && renderRibbonBuilder()}
                        {selectedProduct.id === 'polaroids' && renderPolaroidBuilder()}
                        {selectedProduct.id === 'crochet-keychain' && renderKeychainBuilder()}
                        
                        {!selectedProduct.isBuilder && (
                            <div className="flex items-center justify-between">
                                <span className="text-slate-500 font-medium">Price per item</span>
                                <span className="text-3xl font-serif font-bold text-slate-900">₹{selectedProduct.price}</span>
                            </div>
                        )}
                    </div>

                    <div className="bg-orange-50 border border-orange-100 p-3 rounded-lg flex gap-3 mb-6">
                         <Info className="text-orange-400 shrink-0" size={18} />
                         <p className="text-xs text-orange-800 leading-relaxed">
                            <strong>Note:</strong> Product images are for illustration. Actual products are handcrafted and may vary slightly in appearance.
                         </p>
                    </div>

                    <button className="w-full py-4 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition shadow-lg flex items-center justify-center gap-2 transform active:scale-[0.98]">
                        <ShoppingBag size={20} />
                        {selectedProduct.isBuilder ? 'Add Custom Item to Hamper' : 'Add to Hamper'}
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Shop;