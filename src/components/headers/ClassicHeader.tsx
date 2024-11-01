import { Menu, X, Home, Phone, Box, Users } from 'lucide-react';
import { useState } from 'react';

export function ClassicHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-gray-100">
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-10 text-sm">
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Suporte</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">PT-BR</a>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <span className="text-2xl font-serif italic">
              Classic<span className="text-red-500 font-bold">Co.</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
              <Home size={18} />
              <span className="font-serif">Início</span>
            </a>
            <a href="#" className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
              <Box size={18} />
              <span className="font-serif">Produtos</span>
            </a>
            <a href="#" className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
              <Users size={18} />
              <span className="font-serif">Sobre</span>
            </a>
            <a href="#" className="flex items-center space-x-1 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors">
              <Phone size={18} />
              <span className="font-serif">Contato</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-serif">
                <Home size={18} />
                <span>Início</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-serif">
                <Box size={18} />
                <span>Produtos</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-serif">
                <Users size={18} />
                <span>Sobre</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-serif">
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