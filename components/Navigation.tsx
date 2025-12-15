'use client';

import { useState } from 'react';
import { Menu, X, Palette } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Palette className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-900">Ashish Patel Atelier</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition">Home</a>
            <a href="#rental" className="text-gray-700 hover:text-purple-600 transition">Art Rental</a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition">Pricing</a>
            <a href="#buy" className="text-gray-700 hover:text-purple-600 transition">Buy Art</a>
            <a href="#gallery" className="text-gray-700 hover:text-purple-600 transition">Gallery</a>
            <a href="#contact" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
              Get Started
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-purple-50 rounded">Home</a>
            <a href="#rental" className="block px-3 py-2 text-gray-700 hover:bg-purple-50 rounded">Art Rental</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:bg-purple-50 rounded">Pricing</a>
            <a href="#buy" className="block px-3 py-2 text-gray-700 hover:bg-purple-50 rounded">Buy Art</a>
            <a href="#gallery" className="block px-3 py-2 text-gray-700 hover:bg-purple-50 rounded">Gallery</a>
            <a href="#contact" className="block mx-3 my-2 px-3 py-2 bg-purple-600 text-white text-center rounded-full">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
