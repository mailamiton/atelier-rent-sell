'use client';

import { useState } from 'react';
import { Menu, X, Palette } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Palette className="h-9 w-9 text-purple-600" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-purple-600 rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 leading-tight">Ashish Patel Atelier</span>
              <span className="text-xs text-purple-600 font-medium">Premium Art Rental • Buy</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition font-medium">Home</a>
            <a href="#rental" className="text-gray-700 hover:text-purple-600 transition font-medium">Art Rental</a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition font-medium">Pricing</a>
            <a href="#buy" className="text-gray-700 hover:text-purple-600 transition font-medium">Buy Art</a>
            <a href="#contact" className="bg-purple-600 text-white px-6 py-2.5 rounded-full hover:bg-purple-700 transition shadow-md hover:shadow-lg font-semibold">
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
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 pt-3 pb-4 space-y-2">
            <a href="#home" className="block px-4 py-2.5 text-gray-700 hover:bg-purple-50 rounded-lg font-medium transition">Home</a>
            <a href="#rental" className="block px-4 py-2.5 text-gray-700 hover:bg-purple-50 rounded-lg font-medium transition">Art Rental</a>
            <a href="#pricing" className="block px-4 py-2.5 text-gray-700 hover:bg-purple-50 rounded-lg font-medium transition">Pricing</a>
            <a href="#buy" className="block px-4 py-2.5 text-gray-700 hover:bg-purple-50 rounded-lg font-medium transition">Buy Art</a>
            <a href="#contact" className="block mx-2 mt-3 px-4 py-3 bg-purple-600 text-white text-center rounded-full font-semibold shadow-md">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
