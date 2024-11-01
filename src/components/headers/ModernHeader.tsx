import { Menu, X, Home, Phone, Box, Users } from 'lucide-react';
import { useState } from 'react';

export function ModernHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <span className="text-3xl font-bold">
              Modern<span className="text-yellow-400">Hub</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="flex items-center space-x-1 text-white/90 hover:text-yellow-400 transition-colors font-medium">
              <Home size={18} />
              <span>Início</span>
            </a>
            <a href="#" className="flex items-center space-x-1 text-white/90 hover:text-yellow-400 transition-colors font-medium">
              <Box size={18} />
              <span>Produtos</span>
            </a>
            <a href="#" className="flex items-center space-x-1 text-white/90 hover:text-yellow-400 transition-colors font-medium">
              <Users size={18} />
              <span>Sobre</span>
            </a>
            <a href="#" className="flex items-center space-x-1 bg-yellow-400 text-purple-900 px-4 py-2 rounded-full hover:bg-yellow-300 transition-colors font-medium">
              <Phone size={18} />
              <span>Contato</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-400 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="flex items-center space-x-2 text-white hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">
                <Home size={18} />
                <span>Início</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-white hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">
                <Box size={18} />
                <span>Produtos</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-white hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">
                <Users size={18} />
                <span>Sobre</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-white hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium">
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