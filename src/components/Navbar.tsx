import React from 'react';
import { Bell, User } from 'lucide-react';

interface NavbarProps {
  children?: React.ReactNode;
}

export const Navbar = ({ children }: NavbarProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-gray-800 border-b border-gray-700 z-40">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {children}
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-700 rounded-lg relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          
          <button className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded-lg">
            <User className="w-5 h-5" />
            <span className="hidden sm:inline">Admin</span>
          </button>
        </div>
      </div>
    </header>
  );
};