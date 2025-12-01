import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const SingleProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Black');
  const [selectedSize, setSelectedSize] = useState('M');

  const product = products.find((p) => p.id === Number(id));

  // Available colors with color codes
  const availableColors = [
    { name: 'Black', code: '#1a1a1a', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80' },
    { name: 'Burgundy', code: '#6b1e3b', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80' },
    { name: 'Cream', code: '#f5f5dc', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80' },
    { name: 'Navy', code: '#1e3a5f', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80&sat=-50' },
    { name: 'Forest Green', code: '#2d5016', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80&hue=120' },
    { name: 'Charcoal', code: '#36454f', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80&sat=-30' },
  ];

  // Available sizes
  const availableSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-8">Sorry, we couldn't find the product you're looking for.</p>
          <Link
            to="/shop"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  // Generate multiple images for gallery
  const selectedColorData = availableColors.find(c => c.name === selectedColor);
  const productImages = [
    selectedColorData?.image || product.image,
    product.image + '&sat=-20',
    product.image + '&blur=2',
    product.image + '&sepia=50',
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-black">
      {/* Breadcrumb */}
      <div className="bg-black/95 backdrop-blur-xl border-b border-yellow-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Home
            </Link>
            <span className="text-gray-600">/</span>
            <Link to="/shop" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Shop
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-yellow-400 font-bold">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-yellow-500/20 mb-4">
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-lg overflow-hidden border-4 transition-all ${
                    selectedImage === index
                      ? 'border-yellow-500 shadow-lg shadow-yellow-500/50'
                      : 'border-gray-700 hover:border-yellow-400'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-yellow-500/20">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black rounded-full text-xs font-black uppercase tracking-wider">
                {product.category}
              </span>
            </div>

            <h1 className="text-5xl font-black text-white mb-4">{product.name}</h1>

            {product.rating && (
              <div className="flex items-center mb-6">
                <div className="flex items-center bg-yellow-500/10 px-3 py-1.5 rounded-full">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`w-5 h-5 ${
                        index < Math.floor(product.rating!)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-600 fill-current'
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-yellow-400 font-bold text-sm">
                    {product.rating} ({Math.floor(Math.random() * 100) + 50} reviews)
                  </span>
                </div>
              </div>
            )}

            <div className="mb-6">
              <span className="text-6xl font-black bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                ${product.price}
              </span>
            </div>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">{product.description}</p>

            {/* Color Selection */}
            <div className="mb-6">
              <label className="block text-gray-800 font-black text-sm uppercase tracking-wider mb-3">
                Color: <span className="text-yellow-400">{selectedColor}</span>
              </label>
              <div className="flex flex-wrap gap-3">
                {availableColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => {
                      setSelectedColor(color.name);
                      setSelectedImage(0);
                    }}
                    className={`group relative w-12 h-12 rounded-full border-4 transition-all duration-300 ${
                      selectedColor === color.name
                        ? 'border-yellow-500 scale-110'
                        : 'border-gray-300 hover:border-yellow-400'
                    }`}
                    title={color.name}
                  >
                    <div
                      className="w-full h-full rounded-full"
                      style={{ backgroundColor: color.code }}
                    ></div>
                    {selectedColor === color.name && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <label className="block text-gray-800 font-black text-sm uppercase tracking-wider mb-3">
                Size: <span className="text-yellow-400">{selectedSize}</span>
              </label>
              <div className="flex flex-wrap gap-3">
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider transition-all duration-300 ${
                      selectedSize === size
                        ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-black border-2 border-yellow-500 scale-105'
                        : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:border-yellow-400 hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.stock && product.stock > 0 ? (
                <div className="flex items-center text-green-400 bg-green-500/10 px-4 py-3 rounded-xl">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-black">In Stock ({product.stock} available)</span>
                </div>
              ) : (
                <div className="flex items-center text-red-400 bg-red-500/10 px-4 py-3 rounded-xl">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-black">Out of Stock</span>
                </div>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-white font-black text-sm uppercase tracking-wider mb-3">Quantity</label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 rounded-xl border-2 border-yellow-500/30 bg-yellow-500/10 flex items-center justify-center hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-all text-yellow-400"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                  </svg>
                </button>
                <span className="text-3xl font-black text-yellow-400 w-16 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock || 99, quantity + 1))}
                  className="w-12 h-12 rounded-xl border-2 border-yellow-500/30 bg-yellow-500/10 flex items-center justify-center hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-all text-yellow-400"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={!product.stock || product.stock === 0}
                className="group flex-1 relative px-8 py-5 overflow-hidden rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-black text-lg shadow-2xl uppercase tracking-wider"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 text-black flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Add to Cart
                </span>
              </button>
              <button
                onClick={() => {
                  handleAddToCart();
                  navigate('/cart');
                }}
                disabled={!product.stock || product.stock === 0}
                className="flex-1 px-8 py-5 bg-white/5 border-2 border-yellow-500/30 text-yellow-400 rounded-xl hover:bg-yellow-500/10 hover:border-yellow-500/50 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-black text-lg shadow-lg uppercase tracking-wider backdrop-blur-xl"
              >
                Buy Now
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-lg" style={{ background: 'rgba(29, 33, 40, 0.5)', backdropFilter: 'blur(10px)' }}>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6" style={{ color: '#EBC222' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-300" style={{ fontFamily: 'Bebas Neue' }}>Quality Guaranteed</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6" style={{ color: '#EBC222' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-300" style={{ fontFamily: 'Bebas Neue' }}>Fast Shipping</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6" style={{ color: '#EBC222' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-300" style={{ fontFamily: 'Bebas Neue' }}>Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="container mx-auto px-4 py-12">
        <div className="rounded-2xl shadow-lg p-8 border" style={{ background: 'linear-gradient(to bottom, rgba(17, 24, 39, 1), black)', borderColor: 'rgba(235, 194, 34, 0.2)' }}>
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#EBC222', fontFamily: 'Bebas Neue', textShadow: '0 0 20px rgba(235, 194, 34, 0.3)' }}>
            Product Details
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              {product.description} This premium Ruimach hoodie is engineered with precision and passion for ultimate comfort. 
              Our 320 GSM fleece combines luxury with durability, making it the perfect addition to your streetwear collection.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'Bebas Neue' }}>Premium Features:</h3>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#EBC222' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Ultra-soft 320 GSM fleece with luxury brushed finish</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#EBC222' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Structured drop shoulder design engineered for modern silhouette</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#EBC222' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Reinforced 2x2 rib-knit hems with 100% stretch recovery</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#EBC222' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Double-stitched seams for maximum durability and longevity</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#EBC222' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Premium cotton blend designed to resist pilling</span>
              </li>
            </ul>
            <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'Bebas Neue' }}>Specifications:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border" style={{ background: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(235, 194, 34, 0.15)' }}>
                <div className="text-sm text-gray-500 mb-1">Category</div>
                <div className="text-white font-bold">{product.category}</div>
              </div>
              <div className="p-4 rounded-lg border" style={{ background: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(235, 194, 34, 0.15)' }}>
                <div className="text-sm text-gray-500 mb-1">Rating</div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold">{product.rating}</span>
                  <span style={{ color: '#EBC222' }}>★★★★★</span>
                </div>
              </div>
              <div className="p-4 rounded-lg border" style={{ background: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(235, 194, 34, 0.15)' }}>
                <div className="text-sm text-gray-500 mb-1">Stock</div>
                <div className="text-white font-bold">{product.stock} units available</div>
              </div>
              <div className="p-4 rounded-lg border" style={{ background: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(235, 194, 34, 0.15)' }}>
                <div className="text-sm text-gray-500 mb-1">Brand</div>
                <div className="font-bold" style={{ color: '#EBC222' }}>Ruimach</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: '#EBC222', fontFamily: 'Bebas Neue', textShadow: '0 0 20px rgba(235, 194, 34, 0.3)' }}>
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border"
                style={{ 
                  background: 'linear-gradient(to bottom, rgba(31, 41, 55, 1), black)',
                  borderColor: 'rgba(75, 85, 99, 0.5)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#EBC222'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(75, 85, 99, 0.5)'}
              >
                <Link to={`/product/${relatedProduct.id}`} className="block relative overflow-hidden">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </Link>
                <div className="p-4">
                  <Link to={`/product/${relatedProduct.id}`}>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:transition-colors" style={{ fontFamily: 'Bebas Neue' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#EBC222'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                    >
                      {relatedProduct.name}
                    </h3>
                  </Link>
                  <span className="text-xl font-bold" style={{ color: '#EBC222', fontFamily: 'Bebas Neue' }}>
                    ${relatedProduct.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default SingleProduct;
