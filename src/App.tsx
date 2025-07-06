import React, { useState, useEffect } from 'react';
import { Search, Menu, Users, Gamepad2, Download, Gift, Play, Box, MessageSquare, ArrowUp, X } from 'lucide-react';

interface Game {
  name: string;
  size: string;
  stars: string;
  downloads: string;
  reviews: string;
  image: string;
  description: string;
  features: string[];
  category: string;
}

const gamesData: Game[] = [
  {
    name: "Kingshot",
    size: "189 MB",
    stars: "4.7",
    downloads: "1.6M",
    reviews: "28.9K",
    image: "https://images.appmagic.rocks/?uri=https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/da/d4/5e/dad45e18-73f6-81d3-afaf-a000eb84ac73/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/0x196h.jpg",
    description: "Master the art of precision shooting with **Kingshot MOD**! This enhanced version offers unlimited ammo and energy, all weapons and upgrades unlocked, god mode for invincibility, and access to exclusive tournament modes with premium rewards.",
    features: ["Unlimited Ammo & Energy", "All Weapons Unlocked", "God Mode", "Premium Tournaments", "Exclusive Rewards"],
    category: "Action"
  },
  {
    name: "Toca Boca Jr",
    size: "276 MB",
    stars: "4.6",
    downloads: "1.8M",
    reviews: "23.5K",
    image: "https://images.appmagic.rocks/?uri=https://play-lh.googleusercontent.com/LfUnZ0XOfIE97EBq9Ih1Pz_hNeV4yZp9vpIm9XY0jUbnkXFfxHwqNIUo13eU1x_vYJU=s196-c",
    description: "Explore endless creativity with **Toca Boca Jr MOD**! This enhanced version unlocks all premium content, characters, and locations. Features unlimited customization options, exclusive items, and access to all seasonal content without restrictions.",
    features: ["All Content Unlocked", "Premium Characters", "Unlimited Customization", "Exclusive Items", "Ad-Free Experience"],
    category: "Educational"
  },
  {
    name: "MARVEL Mystic Mayhem",
    size: "342 MB",
    stars: "4.7",
    downloads: "1.4M",
    reviews: "31.8K",
    image: "https://images.appmagic.rocks/?uri=https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ff/a5/03/ffa503a7-43c0-3625-7e8a-c8181e670128/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/0x196h.jpg",
    description: "Unleash superhero power with **MARVEL Mystic Mayhem MOD**! This version offers unlimited energy and resources, all heroes unlocked from the start, infinite upgrade materials, and access to exclusive Marvel storylines and premium costumes.",
    features: ["Unlimited Energy & Resources", "All Heroes Unlocked", "Infinite Upgrades", "Premium Costumes", "Exclusive Storylines"],
    category: "Action"
  },
  {
    name: "Bluey: Let's Play!",
    size: "734 MB",
    stars: "4.9",
    downloads: "4.7M",
    reviews: "89.3K",
    image: "https://images.appmagic.rocks/?uri=https://play-lh.googleusercontent.com/ThMSamW25k0jkaQgss-baKGzKLNtzNcTFk1FLFCaFcy9or5CdVozU19hM7dnROeH4w=s196-c",
    description: "Join Bluey's adventures with **Bluey: Let's Play! MOD**! This enhanced version unlocks all games and activities, provides unlimited energy for continuous play, and includes exclusive content featuring the beloved Australian Blue Heeler family.",
    features: ["All Games Unlocked", "Unlimited Energy", "Exclusive Content", "Premium Activities", "Ad-Free Fun"],
    category: "Educational"
  },
  {
    name: "My Perfect Hotel",
    size: "203 MB",
    stars: "4.5",
    downloads: "2.1M",
    reviews: "35.7K",
    image: "https://play-lh.googleusercontent.com/8P748vOHE4mCetsk2_Ss34HxSJoHtlnIxFLB3pFRawM3MR9VLDceIxbNQBdLBnM6mkMR=w480-h960-rw",
    description: "Build your hotel empire with **My Perfect Hotel MOD**! Get unlimited money and gems to expand rapidly, unlock all premium decorations and furniture, remove all ads for uninterrupted gameplay, and access exclusive VIP floors and amenities.",
    features: ["Unlimited Money & Gems", "All Decorations Unlocked", "VIP Floors Access", "Ad-Free Gaming", "Instant Upgrades"],
    category: "Simulation"
  },
  {
    name: "Royal Match",
    size: "312 MB",
    stars: "4.8",
    downloads: "3.2M",
    reviews: "78.4K",
    image: "https://play-lh.googleusercontent.com/qBdVfwRCsI4KM7qewhJ0AKZKQjyD-DdxPDcdDbsRMhNO9zrwbefggn1vGqRIDZA3fg=w480-h960-rw",
    description: "Rule your kingdom with **Royal Match MOD**! Enjoy unlimited coins for endless boosters, infinite lives for non-stop puzzle solving, all power-ups unlocked from the start, and exclusive royal decorations. Help King Robert restore his castle without any restrictions.",
    features: ["Unlimited Coins & Lives", "All Boosters Unlocked", "Royal Decorations", "Infinite Power-ups", "Premium Levels"],
    category: "Puzzle"
  },
  {
    name: "Gossip Harbor: Merge & Story",
    size: "245 MB",
    stars: "4.6",
    downloads: "1.7M",
    reviews: "32.4K",
    image: "https://images.appmagic.rocks/?uri=https://play-lh.googleusercontent.com/FuBcll6v6PtX63rrUvojoIRGObFMPb8fCRllE4k6El-UeSwO8sF-CXMWQe_E6y-5PE4=s196-c",
    description: "Dive into the drama with **Gossip Harbor: Merge & Story MOD**! This enhanced version provides unlimited energy and coins, all premium storylines unlocked, instant merge completion, and access to exclusive characters and outfits. Uncover secrets and create your own romantic drama without any restrictions.",
    features: ["Unlimited Energy & Coins", "All Stories Unlocked", "Instant Merge", "Premium Characters", "Exclusive Outfits"],
    category: "Simulation"
  },
  {
    name: "Toca Boca World",
    size: "523 MB",
    stars: "4.6",
    downloads: "1.9M",
    reviews: "41.3K",
    image: "https://play-lh.googleusercontent.com/Elecg80RmZ8j3v2CSSZl1Z_87xG5M9E51hZkmFwjSaQFg3WZMk_hBJZbj9OgGaM9Ujc=s96-rw",
    description: "Create unlimited stories with **Toca Boca World MOD**! This complete version unlocks all locations, characters, and furniture sets. Enjoy premium clothing collections, exclusive pets, special event items, and access to all seasonal updates without restrictions.",
    features: ["All Locations Unlocked", "Premium Characters", "Exclusive Items", "Seasonal Content", "Unlimited Creativity"],
    category: "Educational"
  },
  {
    name: "Whiteout Survival",
    size: "1.4 GB",
    stars: "4.4",
    downloads: "987K",
    reviews: "19.8K",
    image: "https://play-lh.googleusercontent.com/gtcDOls1xCaV_qtRKx3dsk75bNBqel81gWkhK2xvgq5KKHj_71lnZjXYO6He97w0j-U=w480-h960-rw",
    description: "Survive the apocalypse with **Whiteout Survival MOD**! Command unlimited resources, instant building and research completion, invincible troops and heroes, plus access to premium alliance features. Lead humanity through the frozen wasteland with overwhelming power.",
    features: ["Unlimited Resources", "Instant Building", "Invincible Units", "Premium Alliances", "God Mode"],
    category: "Strategy"
  },
  {
    name: "Squad Busters",
    size: "425 MB",
    stars: "4.5",
    downloads: "2.8M",
    reviews: "52.1K",
    image: "https://images.appmagic.rocks/?uri=https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d4/11/a5/d411a566-a7ba-ab83-6623-ea9b140dfba0/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/0x196h.jpg",
    description: "Unite your favorite Supercell characters with **Squad Busters MOD**! This enhanced version provides unlimited gems and coins, all characters unlocked from the start, instant upgrades, and access to exclusive battle modes. Build the ultimate squad with heroes from Clash of Clans, Clash Royale, Boom Beach, and more!",
    features: ["Unlimited Gems & Coins", "All Characters Unlocked", "Instant Upgrades", "Exclusive Battle Modes", "Premium Squad Combinations"],
    category: "Strategy"
  }
].sort((a, b) => a.name.localeCompare(b.name));

// Professional platform icons
const AndroidIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.78 1.39c-.24-.24-.24-.62 0-.86.24-.24.62-.24.86 0l1.27 1.27c.4-.2.84-.3 1.29-.3s.89.1 1.29.3L12.76.53c.24-.24.62-.24.86 0 .24.24.24.62 0 .86L12.35 2.66c1.92.8 3.28 2.65 3.28 4.84v.5H8.37v-.5c0-2.19 1.36-4.04 3.28-4.84L10.38 1.39zM9.5 5.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm5 0c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM7.5 9v8c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V18h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V18h1c.55 0 1-.45 1-1V9H7.5zM5.5 9c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5C7 9.67 6.33 9 5.5 9zm13 0c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5z"/>
  </svg>
);

const AppleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [filteredGames, setFilteredGames] = useState<Game[]>(gamesData);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [toasts, setToasts] = useState<Array<{id: number, message: string, type: string}>>([]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredGames(gamesData);
    } else {
      const filtered = gamesData.filter(game =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredGames(filtered);
    }
  }, [searchTerm]);

  const showToast = (message: string, type: string = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openGameDetails = (game: Game) => {
    setSelectedGame(game);
  };

  const closeGameDetails = () => {
    setSelectedGame(null);
  };

  const handleDownload = () => {
    // Use AdBlueMedia content locker
    if (typeof (window as any)._gD === 'function') {
      (window as any)._gD();
    } else {
      showToast('Content locker loading...', 'info');
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{
      backgroundImage: "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiaR2W8tPL1dNgrEGBdTSHXbzxHJ-G16lafoIZGDz1hy2Zmceg4BzB3Y7LR9yiovD95hLsl_4ABhzXSbUGNpy7uMwQtNZgewMvgu_aCb2jWci089pKK5LL1j3dTFuSUvUQvnY0OVJnI96GPCOj6Dot9uiPy13LOwZRA2iY0CmFgP-Le9QqrdNLUbnGrJn4/s1600/6283431_3224165.jpg')"
    }}>
      <div className="bg-slate-900 bg-opacity-96 min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-800 to-slate-700 shadow-xl border-b border-slate-600">
          <div className="flex justify-between items-center p-4">
            <button 
              onClick={() => showToast('Navigation menu under development!', 'info')}
              className="text-white hover:text-amber-400 transition-colors duration-200"
            >
              <Menu size={28} />
            </button>
            <img 
              src="https://adescargar.online/wp-content/uploads/2023/10/IMG_20231027_220607_258.png" 
              alt="Free MOD Games Logo" 
              className="h-11"
            />
            <button 
              onClick={() => showToast('Community features coming soon!', 'info')}
              className="text-white hover:text-amber-400 transition-colors duration-200"
            >
              <Users size={28} />
            </button>
          </div>
        </nav>

        <div className="pt-20 px-4 max-w-6xl mx-auto">
          {/* Search */}
          <div className="relative my-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" size={20} />
            <input
              type="text"
              placeholder="Search for your favorite MOD game..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-700 border border-slate-600 rounded-full py-3 pl-12 pr-4 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-25 outline-none transition-all duration-200"
            />
          </div>

          {/* Title */}
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-400/40">
              <Gamepad2 className="text-slate-800" size={24} />
            </div>
            <h1 className="text-white text-2xl font-bold ml-4">Top MOD Games</h1>
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {filteredGames.length === 0 ? (
              <div className="col-span-full text-center text-gray-300 py-16">
                <p className="text-xl">No games found matching your search.</p>
              </div>
            ) : (
              filteredGames.map((game, index) => (
                <div
                  key={index}
                  onClick={() => openGameDetails(game)}
                  className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-5 text-center shadow-lg hover:shadow-xl hover:transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer group border border-slate-600"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative mb-4">
                    <img
                      src={game.image}
                      alt={`${game.name} icon`}
                      className="w-32 h-32 mx-auto rounded-2xl border-3 border-slate-600 object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://placehold.co/130x130/273D52/ffffff?text=Game+Icon';
                      }}
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-800 font-bold rounded-2xl px-3 py-1 text-sm border-4 border-slate-700 shadow-md">
                      MOD
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 truncate group-hover:text-amber-400 transition-colors">
                    {game.name}
                  </h3>
                  <div className="flex items-center justify-center text-sm text-blue-300 space-x-2">
                    <div className="flex items-center space-x-1">
                      <AndroidIcon />
                      <AppleIcon />
                    </div>
                    <div className="w-0.5 h-4 bg-blue-500 rounded"></div>
                    <div className="flex items-center space-x-1">
                      <Download size={16} />
                      <span>{game.downloads}+</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* How It Works */}
          <section className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 shadow-xl mb-12 border border-slate-600">
            <h2 className="text-amber-400 text-3xl font-bold text-center mb-8">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Download size={36} />,
                  title: "1. Select Your Game",
                  description: "Browse our extensive collection of MOD APKs and choose your favorite game to download."
                },
                {
                  icon: <Gift size={36} />,
                  title: "2. Complete a Quick Offer",
                  description: "Support our service by completing a brief, free sponsor offer. This unlocks your download!"
                },
                {
                  icon: <Play size={36} />,
                  title: "3. Enjoy Your MOD!",
                  description: "Once completed, your high-speed download will begin instantly. Install and play with unlimited features!"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/40">
                    <div className="text-white">{step.icon}</div>
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed max-w-xs mx-auto">{step.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Game Details Modal */}
        {selectedGame && (
          <div className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-8 max-w-lg w-full text-center text-white relative animate-in slide-in-from-bottom-4 duration-300 border border-slate-600">
              <button
                onClick={closeGameDetails}
                className="absolute top-5 right-5 text-white hover:text-red-400 hover:rotate-90 transition-all duration-200"
              >
                <X size={32} />
              </button>
              
              <img
                src={selectedGame.image}
                alt={`${selectedGame.name} icon`}
                className="w-44 h-44 mx-auto -mt-16 rounded-3xl border-8 border-slate-800 shadow-xl object-cover"
              />
              
              <h2 className="text-amber-400 text-3xl font-bold mt-4 mb-4">{selectedGame.name}</h2>
              
              <div className="text-gray-300 mb-6 leading-relaxed" 
                   dangerouslySetInnerHTML={{ 
                     __html: selectedGame.description.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') 
                   }} 
              />

              <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                <div className="flex flex-col items-center">
                  <Box className="text-blue-400 mb-2" size={24} />
                  <span className="text-gray-300">{selectedGame.size}</span>
                </div>
                <div className="flex flex-col items-center">
                  <Download className="text-blue-400 mb-2" size={24} />
                  <span className="text-gray-300">{selectedGame.downloads} Downloads</span>
                </div>
                <div className="flex flex-col items-center">
                  <MessageSquare className="text-blue-400 mb-2" size={24} />
                  <span className="text-gray-300">{selectedGame.reviews} Reviews</span>
                </div>
              </div>

              <button
                onClick={handleDownload}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-12 rounded-full shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 hover:-translate-y-1 transition-all duration-200 flex items-center justify-center mx-auto space-x-2"
              >
                <Download size={20} />
                <span>Download MOD</span>
              </button>
            </div>
          </div>
        )}

        {/* Scroll to Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-opacity-90 text-white p-3 rounded-full shadow-lg hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-200 z-40"
          >
            <ArrowUp size={24} />
          </button>
        )}

        {/* Toast Notifications */}
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 space-y-2">
          {toasts.map(toast => (
            <div
              key={toast.id}
              className={`px-6 py-3 rounded-lg shadow-lg text-white text-center min-w-64 animate-in slide-in-from-bottom-2 ${
                toast.type === 'success' ? 'bg-gradient-to-r from-green-600 to-emerald-600' :
                toast.type === 'error' ? 'bg-gradient-to-r from-red-600 to-rose-600' :
                'bg-gradient-to-r from-blue-600 to-indigo-600'
              }`}
            >
              {toast.message}
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-slate-800 to-slate-700 text-gray-300 py-6 px-4 text-center mt-12 shadow-lg border-t border-slate-600">
          <p className="mb-2">© 2024 Free MOD Games. All rights reserved.</p>
          <div className="flex justify-center space-x-4 text-sm">
            <a href="#" className="text-blue-400 hover:text-amber-400 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="text-blue-400 hover:text-amber-400 transition-colors">Terms of Service</a>
            <span>|</span>
            <a href="#" className="text-blue-400 hover:text-amber-400 transition-colors">Contact Us</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;