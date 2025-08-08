import React from 'react';
import { Game } from '../types';
import { Download, Star } from 'lucide-react';

interface RelatedGamesProps {
  games: Game[];
  currentGameId: string;
  onGameSelect: (game: Game) => void;
}

const RelatedGames: React.FC<RelatedGamesProps> = ({ 
  games, 
  currentGameId, 
  onGameSelect 
}) => {
  const relatedGames = games
    .filter(game => game.id !== currentGameId)
    .slice(0, 4);

  if (relatedGames.length === 0) return null;

  return (
    <section className="mt-8">
      <h3 className="text-white text-xl font-bold mb-4">Related MOD Games</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {relatedGames.map((game) => (
          <div
            key={game.id}
            onClick={() => onGameSelect(game)}
            className="bg-slate-700 rounded-xl p-3 cursor-pointer hover:bg-slate-600 transition-all duration-200 group"
          >
            <img
              src={game.image}
              alt={`${game.name} MOD APK`}
              className="w-full h-20 object-cover rounded-lg mb-2"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/80x80/273D52/ffffff?text=Game';
              }}
            />
            <h4 className="text-white text-sm font-medium truncate group-hover:text-amber-400 transition-colors">
              {game.name}
            </h4>
            <div className="flex items-center justify-between text-xs text-gray-400 mt-1">
              <div className="flex items-center">
                <Star size={12} className="mr-1" />
                <span>{game.stars}</span>
              </div>
              <div className="flex items-center">
                <Download size={12} className="mr-1" />
                <span>{game.downloads}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedGames;