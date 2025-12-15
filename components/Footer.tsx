import { Palette, Instagram, Facebook, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Palette className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold">Ashish Patel Atelier</span>
            </div>
            <p className="text-gray-400 text-sm">
              Building India's #1 Art Movement. Creating signposts of happiness through curated art.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-purple-400 transition">Home</a></li>
              <li><a href="#rental" className="hover:text-purple-400 transition">Art Rental</a></li>
              <li><a href="#pricing" className="hover:text-purple-400 transition">Pricing</a></li>
              <li><a href="#buy" className="hover:text-purple-400 transition">Buy Art</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Rental Categories</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Residential Homes</li>
              <li>Corporate Offices</li>
              <li>Hotels & Hospitality</li>
              <li>Events & Staging</li>
              <li>Premium Collections</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <a href="https://ashishpatelatelier.com" target="_blank" rel="noopener noreferrer" className="text-sm text-purple-400 hover:underline">
              Visit Main Website →
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 Ashish Patel Atelier. All rights reserved. | Premium Art Rental & Sales Services</p>
        </div>
      </div>
    </footer>
  );
}
