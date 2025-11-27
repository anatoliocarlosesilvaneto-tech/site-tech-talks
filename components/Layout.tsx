import React, { useState } from 'react';
import { Menu, X, Search, Zap } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const links = [
    { name: 'Início', path: '/' },
    { name: 'Tecnologia', path: '/category/Tecnologia' },
    { name: 'Games', path: '/category/Games' },
    { name: 'Hardware', path: '/category/Hardware' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-tech-900/90 backdrop-blur-md border-b border-tech-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <NavLink to="/" className="flex-shrink-0 group cursor-pointer">
            <h1 className="font-display text-3xl font-bold tracking-wider text-white flex items-center gap-2">
              <Zap className="text-tech-accent group-hover:animate-pulse" fill="currentColor" />
              TECH <span className="text-tech-accent">TALKS</span>
            </h1>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-sans text-sm font-medium tracking-wide transition-colors duration-200 uppercase ${
                      isActive ? 'text-tech-accent' : 'text-gray-300 hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-4">
             <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Buscar..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="bg-tech-800 text-gray-300 text-sm rounded-full pl-4 pr-10 py-1.5 border border-tech-700 focus:outline-none focus:border-tech-accent w-32 focus:w-64 transition-all duration-300"
                />
                <button 
                  onClick={handleSearch}
                  className="absolute right-3 top-1.5 text-gray-400 hover:text-tech-accent transition-colors"
                >
                  <Search className="w-4 h-4" />
                </button>
             </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-tech-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-tech-900 border-b border-tech-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <div className="px-3 pb-2">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Buscar..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full bg-tech-800 text-gray-300 text-sm rounded-full pl-4 pr-10 py-2 border border-tech-700 focus:outline-none focus:border-tech-accent"
                  />
                  <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" onClick={handleSearch} />
               </div>
             </div>
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-tech-800 uppercase"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-tech-900 border-t border-tech-800 mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold text-white mb-4">TECH <span className="text-tech-accent">TALKS</span></h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              O seu site de tecnologia, jogos e hardware.
            </p>
        </div>
        
        <div className="w-full border-t border-tech-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Tech Talks. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">
            <a href="mailto:contato@atechtalks.com" className="hover:text-tech-accent transition-colors">
              contato@atechtalks.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};