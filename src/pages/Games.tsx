import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Plus, Trash2 } from 'lucide-react';
import { GameForm } from '../components/GameForm';

export const Games = () => {
  const { games, addGame, deleteGame } = useAdmin();
  const [showForm, setShowForm] = useState(false);

  const handleAddGame = (data: { name: string; icon: string }) => {
    addGame(data);
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Games Management</h1>
        <button
          onClick={() => setShowForm(true)}
          className="btn btn-primary flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Game</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map(game => (
          <div
            key={game.id}
            className="card flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <img
                src={game.icon}
                alt={game.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <h3 className="text-xl font-semibold">{game.name}</h3>
            </div>
            <button
              onClick={() => deleteGame(game.id)}
              className="p-2 text-red-400 hover:bg-red-400/20 rounded-lg transition-colors"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      {games.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p>No games added yet. Click the Add Game button to get started.</p>
        </div>
      )}

      {showForm && (
        <GameForm
          onSubmit={handleAddGame}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};