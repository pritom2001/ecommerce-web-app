import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/95 backdrop-blur-xl border-b border-yellow-500/20 sticky top-0 z-50 shadow-2xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
              <div className="text-3xl font-black relative" style={{ fontFamily: 'serif' }}>
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                  Ruimach
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors font-bold uppercase text-sm tracking-wider relative group">
              <span>Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-600 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/brand-story" className="text-gray-300 hover:text-yellow-400 transition-colors font-bold uppercase text-sm tracking-wider relative group">
              <span>Brand Story</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-600 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/shop" className="text-gray-300 hover:text-yellow-400 transition-colors font-bold uppercase text-sm tracking-wider relative group">
              <span>Shop</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-600 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/cart" className="relative group">
              <div className="relative p-2 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 transform hover:scale-110">
                <svg
                  className="w-5 h-5 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-black border-2 border-black animate-pulse">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-yellow-400 hover:text-yellow-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-yellow-500/20 pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-yellow-400 transition-colors font-bold uppercase text-sm tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/brand-story"
                className="text-gray-300 hover:text-yellow-400 transition-colors font-bold uppercase text-sm tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                Brand Story
              </Link>
              <Link
                to="/shop"
                className="text-gray-300 hover:text-yellow-400 transition-colors font-bold uppercase text-sm tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/cart"
                className="text-gray-300 hover:text-yellow-400 transition-colors font-bold uppercase text-sm tracking-wider flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart
                {cartCount > 0 && (
                  <span className="ml-2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-black">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
