import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const Announcements = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle announcement submission
    setMessage('');
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Announcements</h1>

      <form onSubmit={handleSubmit} className="card space-y-4">
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
            Announcement Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="input w-full h-32 resize-none"
            placeholder="Type your announcement here..."
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="btn btn-primary flex items-center space-x-2"
            disabled={!message.trim()}
          >
            <Send className="w-5 h-5" />
            <span>Send Announcement</span>
          </button>
        </div>
      </form>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Announcements</h2>
        <div className="space-y-4">
          <div className="card">
            <p className="text-sm text-gray-400">Posted on March 15, 2024</p>
            <p className="mt-2">Server maintenance scheduled for tomorrow at 2 AM UTC.</p>
          </div>
          <div className="card">
            <p className="text-sm text-gray-400">Posted on March 10, 2024</p>
            <p className="mt-2">New game slots available for booking!</p>
          </div>
        </div>
      </div>
    </div>
  );
};