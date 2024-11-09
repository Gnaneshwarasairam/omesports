import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { Dashboard } from '../pages/Dashboard';
import { Games } from '../pages/Games';
import { Slots } from '../pages/Slots';
import { Players } from '../pages/Players';
import { Announcements } from '../pages/Announcements';
import { Reports } from '../pages/Reports';
import { Menu } from 'lucide-react';

export const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden p-2 hover:bg-gray-800 rounded-lg"
        >
          <Menu className="w-6 h-6" />
        </button>
      </Navbar>
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 p-4 lg:p-8 mt-16">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/games" element={<Games />} />
            <Route path="/slots" element={<Slots />} />
            <Route path="/players" element={<Players />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};