import { Menu, X, Home, Phone, Box, Users } from 'lucide-react';
import { useState } from 'react';

export function MinimalHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <span className="text-2xl font-light tracking-tight text-gray-900">
              minimal<span className="text-blue-600 font-medium">.io</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
              <Home size={18} />
              <span>Início</span>
            </a>
            <a href="#" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
              <Box size={18} />
              <span>Produtos</span>
            </a>
            <a href="#" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
              <Users size={18} />
              <span>Sobre</span>
            </a>
            <a href="#" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
              <Phone size={18} />
              <span>Contato</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base">
                <Home size={18} />
                <span>Início</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base">
                <Box size={18} />
                <span>Produtos</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base">
                <Users size={18} />
                <span>Sobre</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base">
                <Phone size={18} />
                <span>Contato</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}