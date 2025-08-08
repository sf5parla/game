import React from 'react';
import { Game } from '../types';
import { Download } from 'lucide-react';

interface GameCardProps {
  game: Game;
  onGameSelect: (game: Game) => void;
}

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

const GameCard: React.FC<GameCardProps> = ({ game, onGameSelect }) => {
  return (
    <article
      onClick={() => onGameSelect(game)}
      className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-5 text-center shadow-lg hover:shadow-xl hover:transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer group border border-slate-600"
    >
      <div className="relative mb-4">
        <img
          src={game.image}
          alt={`${game.name} MOD APK - Download with unlimited features`}
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
        <div className="flex items-center space-x-1" aria-label="Available platforms">
          <AndroidIcon />
          <AppleIcon />
        </div>
        <div className="w-0.5 h-4 bg-blue-500 rounded"></div>
        <div className="flex items-center space-x-1">
          <Download size={16} />
          <span>{game.downloads}+</span>
        </div>
      </div>
      <div className="mt-2 text-xs text-gray-400">
        {game.category} • {game.size}
      </div>
    </article>
  );
};

export default GameCard;