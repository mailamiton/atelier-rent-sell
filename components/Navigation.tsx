'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/rent-buy-logo.png"
                alt="Ashish Patel Atelier"
                width={200}
                height={60}
                className="h-12 w-auto"
                priority
              />
              {/* <span className="text-sm text-purple-600 font-medium">Premium Art Rental • Buy</span> */}
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition font-medium">Home</Link>
            <Link href="/#rental" className="text-gray-700 hover:text-purple-600 transition font-medium">Art Rental</Link>
            <Link href="/#pricing" className="text-gray-700 hover:text-purple-600 transition font-medium">Pricing</Link>
            <Link href="/#buy" className="text-gray-700 hover:text-purple-600 transition font-medium">Buy Art</Link>
            <Link href="/gallery" className="text-gray-700 hover:text-purple-600 transition font-medium">Gallery</Link>
            <Link href="/#contact" className="bg-purple-600 text-white px-6 py-2.5 rounded-full hover:bg-purple-700 transition shadow-md hover:shadow-lg font-semibold">
              Get Started
            </Link>
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
            <Link href="/" className="block px-4 py-2.5 text-gray-700 hover:bg-purple-50 rounded-lg font-medium transition">Home</Link>
            <Link href="/#rental" className="block px-4 py-2.5 text-gray-700 hover:bg-purple-50 rounded-lg font-medium transition">Art Rental</Link>
            <Link href="/#pricing" className="block px-4 py-2.5 text-gray-700 hover:bg-purple-50 rounded-lg font-medium transition">Pricing</Link>
            <Link href="/#buy" className="block px-4 py-2.5 text-gray-700 hover:bg-purple-50 rounded-lg font-medium transition">Buy Art</Link>
            <Link href="/gallery" className="block px-4 py-2.5 text-gray-700 hover:bg-purple-50 rounded-lg font-medium transition">Gallery</Link>
            <Link href="/#contact" className="block mx-2 mt-3 px-4 py-3 bg-purple-600 text-white text-center rounded-full font-semibold shadow-md">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
