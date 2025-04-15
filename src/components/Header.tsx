import React from 'react';
import { Tool, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Tool className="w-6 h-6 text-indigo-600" />
            <span className="text-xl font-semibold text-gray-900">All-In-One Tools</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Tools</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Documentation</a>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
              <User className="w-4 h-4" />
              <span>Sign In</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}