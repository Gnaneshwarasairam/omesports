import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { PlayerSearch } from '../components/PlayerSearch';
import { BlockedPlayers } from '../components/BlockedPlayers';
import { Player } from '../types';

export const Players = () => {
  const { players, togglePlayerBlock } = useAdmin();
  const [searchResults, setSearchResults] = useState<Player[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query: string) => {
    if (!query) {
      setIsSearching(false);
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    const results = players.filter(player =>
      Object.values(player)
        .join(' ')
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  const displayedPlayers = isSearching ? searchResults : players;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Players Management</h1>

      <PlayerSearch onSearch={handleSearch} />

      <div className="grid gap-4">
        {displayedPlayers.map(player => (
          <div
            key={player.id}
            className="card flex items-center justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold">{player.name}</h3>
              <p className="text-gray-400">@{player.username}</p>
              {player.email && (
                <p className="text-sm text-gray-400">{player.email}</p>
              )}
            </div>
            
            <button
              onClick={() => togglePlayerBlock(player.id)}
              className={`p-2 rounded-lg transition-colors ${
                player.isBlocked
                  ? 'text-green-400 hover:bg-green-400/20'
                  : 'text-red-400 hover:bg-red-400/20'
              }`}
              title={player.isBlocked ? 'Unblock player' : 'Block player'}
            >
              {player.isBlocked ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <Ban className="w-5 h-5" />
              )}
            </button>
          </div>
        ))}
      </div>

      {displayedPlayers.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p>
            {isSearching
              ? 'No players found matching your search.'
              : 'No players registered yet.'}
          </p>
        </div>
      )}

      <BlockedPlayers
        players={players}
        onUnblock={togglePlayerBlock}
      />
    </div>
  );
};