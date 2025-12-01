import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative">
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
      
      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-yellow-500/20 group-hover:border-yellow-500/50 transition-all duration-500">
        <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
          <div className="relative aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {product.stock && product.stock < 20 && (
              <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
                Low Stock
              </span>
            )}
            
            {/* Quick View Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="px-6 py-3 bg-yellow-500 text-black font-black rounded-full uppercase text-sm tracking-wider transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                Quick View
              </span>
            </div>
          </div>
        </Link>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-yellow-400 font-black uppercase tracking-wider">{product.category}</span>
            {product.rating && (
              <div className="flex items-center bg-yellow-500/10 px-2 py-1 rounded-full">
                <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <span className="ml-1 text-sm text-yellow-400 font-bold">{product.rating}</span>
              </div>
            )}
          </div>
          
          <Link to={`/product/${product.id}`}>
            <h3 className="text-xl font-black text-white mb-2 group-hover:text-yellow-400 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          
          <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
          
          <div className="flex items-center justify-between gap-4">
            <span className="text-3xl font-black bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
              ${product.price}
            </span>
            <button
              onClick={() => onAddToCart(product)}
              className="group/btn relative px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black rounded-xl hover:from-yellow-500 hover:to-yellow-400 transition-all transform hover:scale-105 active:scale-95 font-black text-sm uppercase tracking-wider overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Add
              </span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
