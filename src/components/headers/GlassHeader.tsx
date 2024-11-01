import { Menu, X, Home, Phone, Box, Users } from 'lucide-react';
import { useState } from 'react';

export function GlassHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/20 dark:border-gray-700/30 shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <span className="text-3xl font-extralight tracking-wider text-gray-900 dark:text-white">
              glass<span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">.design</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="group flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all">
              <Home size={18} className="group-hover:scale-110 transition-transform" />
              <span className="font-light">Início</span>
            </a>
            <a href="#" className="group flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all">
              <Box size={18} className="group-hover:scale-110 transition-transform" />
              <span className="font-light">Produtos</span>
            </a>
            <a href="#" className="group flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all">
              <Users size={18} className="group-hover:scale-110 transition-transform" />
              <span className="font-light">Sobre</span>
            </a>
            <a href="#" className="flex items-center space-x-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-emerald-500/20 transition-all">
              <Phone size={18} />
              <span className="font-light">Contato</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 border-b border-gray-200/20 dark:border-gray-700/30">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 block px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all">
                <Home size={18} />
                <span className="font-light">Início</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 block px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all">
                <Box size={18} />
                <span className="font-light">Produtos</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 block px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all">
                <Users size={18} />
                <span className="font-light">Sobre</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 block px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all">
                <Phone size={18} />
                <span className="font-light">Contato</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}