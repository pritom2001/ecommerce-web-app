import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Cinematic Hero Section with Video Background */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://sfycdn.speedsize.com/d31641c5-60cb-4a0b-8662-59094f81bb6e/row.representclo.com/cdn/shop/videos/c/vp/4a1e4ecd66ae4ad0a37a1b9e761ed74c/4a1e4ecd66ae4ad0a37a1b9e761ed74c.HD-1080p-7.2Mbps-57496901.mp4?v=0"
              type="video/mp4"
            />
          </video>
          {/* Dark Overlay for Better Text Readability */}
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 md:px-8 relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content - Text */}
              <div className="text-left space-y-5">
                {/* Badge */}
                <div className="inline-block animate-slide-down">
                  <div className="relative">
                    <span className="relative px-5 py-2 bg-[#EBC222]/10 backdrop-blur-md text-[#EBC222] rounded-full text-[10px] font-black border border-[#EBC222]/40 inline-flex items-center gap-2 uppercase tracking-widest" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EBC222] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#EBC222]"></span>
                      </span>
                      PREMIUM WINTER COLLECTION
                    </span>
                  </div>
                </div>
                
                {/* Main Title */}
                <div className="space-y-0 animate-fade-in-up">
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tighter" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    <span className="block text-white">ELEVATE</span>
                    <span className="block text-white">YOUR</span>
                    <span className="block text-[#EBC222] drop-shadow-[0_0_40px_rgba(235,194,34,0.6)]">
                      STREET
                    </span>
                    <span className="block text-[#EBC222] drop-shadow-[0_0_40px_rgba(235,194,34,0.6)]">
                      STYLE
                    </span>
                  </h1>
                </div>
                
                {/* CTA Buttons - Simplified */}
                <div className="flex flex-col sm:flex-row gap-3 pt-3 animate-fade-in-up animation-delay-500">
                  <Link
                    to="/shop"
                    className="group relative px-7 py-3.5 overflow-hidden rounded-full font-black text-sm transition-all duration-300 uppercase tracking-widest hover:scale-105"
                    style={{ fontFamily: 'Bebas Neue', background: '#EBC222' }}
                  >
                    <span className="relative z-10 text-black flex items-center justify-center gap-2">
                      Shop Now
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                  
                  <Link
                    to="/brand-story"
                    className="group px-7 py-3.5 rounded-full font-black text-sm border-2 transition-all duration-300 uppercase tracking-widest backdrop-blur-md hover:bg-[#EBC222]/10"
                    style={{ 
                      fontFamily: 'Bebas Neue',
                      color: '#EBC222',
                      borderColor: 'rgba(235, 194, 34, 0.4)'
                    }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Our Story
                      <svg className="w-4 h-4 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>

              {/* Right Content - Product Image with GSM Badge */}
              <div className="relative animate-fade-in animation-delay-300 hidden lg:flex justify-end">
                <div className="relative group">
                  {/* Glowing Background Effect */}
                  <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" style={{ background: 'linear-gradient(135deg, #EBC222, rgba(235, 194, 34, 0.3))' }}></div>
                  
                  {/* Product Image Container */}
                  <div className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden border-2 border-[#EBC222]/20 group-hover:border-[#EBC222]/40 transition-all duration-300">
                    <img
                      src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80"
                      alt="Ruimach Hoodie"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* GSM Badge - Top Right */}
                    <div className="absolute top-6 right-6 bg-black/90 backdrop-blur-xl border-2 rounded-2xl px-5 py-3 z-10" style={{ borderColor: 'rgba(235, 194, 34, 0.4)' }}>
                      <div className="text-3xl font-black leading-none" style={{ color: '#EBC222', fontFamily: 'Bebas Neue' }}>320</div>
                      <div className="text-gray-400 text-xs uppercase tracking-widest leading-none mt-1" style={{ fontFamily: 'Bebas Neue' }}>GSM FLEECE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Minimal */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-5 h-8 border-2 rounded-full flex justify-center p-1" style={{ borderColor: 'rgba(235, 194, 34, 0.4)' }}>
            <div className="w-1 h-2 rounded-full animate-scroll-indicator" style={{ backgroundColor: '#EBC222' }}></div>
          </div>
        </div>
      </section>

      {/* Collection Showcase */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Golden Glow Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full filter blur-[150px] animate-pulse" style={{ backgroundColor: 'rgba(235, 194, 34, 0.2)' }}></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full filter blur-[150px] animate-pulse animation-delay-2000" style={{ backgroundColor: 'rgba(235, 194, 34, 0.15)' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-3 text-black rounded-full text-sm font-black mb-6 uppercase tracking-wider" style={{ background: '#EBC222', fontFamily: 'Bebas Neue' }}>
              Shop By Collection
            </span>
            <h2 className="text-5xl md:text-7xl font-black mb-6" style={{ fontFamily: 'Bebas Neue' }}>
              <span style={{ color: '#EBC222', textShadow: '0 0 30px rgba(235, 194, 34, 0.5)' }}>
                Find Your Perfect Fit
              </span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Explore our premium collections crafted for ultimate street style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                name: 'Classic Collection',
                image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop',
                count: '150+ Hoodies',
              },
              {
                name: 'Streetwear Edition',
                image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=600&fit=crop',
                count: '200+ Styles',
              },
              {
                name: 'Premium Line',
                image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=600&fit=crop',
                count: '100+ Exclusive',
              }
            ].map((category, i) => (
              <Link
                key={i}
                to="/shop"
                className="group relative overflow-hidden rounded-3xl transition-all duration-500 transform hover:scale-105"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(235, 194, 34, 0.3), transparent)' }}></div>
                  
                  {/* Glowing Border */}
                  <div className="absolute inset-0 border-4 rounded-3xl transition-all duration-500" style={{ borderColor: 'transparent' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(235, 194, 34, 0.5)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-3xl font-black text-white mb-2" style={{ fontFamily: 'Bebas Neue' }}>{category.name}</h3>
                  <p className="text-sm font-bold" style={{ color: '#EBC222', fontFamily: 'Bebas Neue' }}>{category.count}</p>
                  <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: '#EBC222' }}>
                    <span className="font-black" style={{ fontFamily: 'Bebas Neue' }}>Shop Now</span>
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Hoodie Features Section */}
      <section className="py-24 bg-gradient-to-b from-black via-[#0a0a0a] to-black relative overflow-hidden">
        {/* Background with Stars/Particles */}
        <div className="absolute inset-0">
          {/* Subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full filter blur-[150px] opacity-10" style={{ backgroundColor: '#EBC222' }}></div>
          
          {/* Stars/particles */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#EBC222] rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                opacity: Math.random() * 0.7 + 0.3
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-3 text-black rounded-full text-sm font-black mb-6 uppercase tracking-wider" style={{ background: '#EBC222', fontFamily: 'Bebas Neue' }}>
              Premium Quality
            </span>
            <h2 className="text-5xl md:text-7xl font-black mb-6" style={{ fontFamily: 'Bebas Neue' }}>
              <span style={{ color: '#EBC222', textShadow: '0 0 30px rgba(235, 194, 34, 0.5)' }}>
                Crafted to Perfection
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every Ruimach hoodie is engineered with precision and passion for ultimate comfort
            </p>
          </div>

          {/* 3D Hoodie with Feature Callouts */}
          <div className="max-w-7xl mx-auto relative">
            <div className="relative min-h-[900px] flex items-center justify-center px-4">
              
              {/* Central 3D Hoodie */}
              <div className="relative z-20 w-full max-w-2xl">
                <div className="absolute -inset-16 rounded-full blur-3xl opacity-20 animate-pulse" style={{ background: 'radial-gradient(circle, #EBC222, transparent)' }}></div>
                <img 
                  src="https://dev.ruimach.com/wp-content/uploads/2025/11/vvvvv.png" 
                  alt="Ruimach Hoodie Features"
                  className="relative w-full h-auto object-contain filter drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Feature Callout 1 - Top Left (Ultra-Soft Fleece) */}
              <div className="absolute top-16 left-0 lg:left-8 animate-fade-in w-72" style={{ animationDelay: '0.2s' }}>
                <div className="relative group">
                  {/* Animated connecting line to hood */}
                  <svg className="hidden lg:block absolute top-1/2 left-full w-24 xl:w-40 h-24 -translate-y-1/2 pointer-events-none" style={{ zIndex: 1 }}>
                    <line x1="0" y1="50%" x2="100%" y2="30%" stroke="#EBC222" strokeWidth="2" strokeDasharray="6,6" fill="none" className="animate-pulse" opacity="0.6"/>
                    <circle cx="100%" cy="30%" r="3" fill="#EBC222" className="animate-ping" opacity="0.8"/>
                  </svg>
                  
                  {/* Feature Card */}
                  <div className="relative p-4 md:p-5 rounded-xl border-2 backdrop-blur-md transition-all duration-300 hover:scale-105" style={{ 
                    background: 'linear-gradient(135deg, rgba(235, 194, 34, 0.1), rgba(0, 0, 0, 0.9))',
                    borderColor: 'rgba(235, 194, 34, 0.4)',
                    maxWidth: '280px'
                  }}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#EBC222' }}>
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-base font-black uppercase tracking-wide" style={{ color: '#EBC222', fontFamily: 'Bebas Neue' }}>
                        Ultra-Soft
                      </h3>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1" style={{ fontFamily: 'Bebas Neue' }}>320 GSM FLEECE</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Luxury brushed finish for exceptional warmth and comfort.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Callout 2 - Top Right (Reinforced Hems) */}
              <div className="absolute top-12 right-0 lg:right-8 animate-fade-in w-72" style={{ animationDelay: '0.4s' }}>
                <div className="relative group">
                  {/* Animated connecting line to hood hem */}
                  <svg className="hidden lg:block absolute top-1/2 right-full w-24 xl:w-40 h-28 pointer-events-none" style={{ zIndex: 1, transform: 'translateY(-50%)' }}>
                    <line x1="100%" y1="50%" x2="0" y2="25%" stroke="#EBC222" strokeWidth="2" strokeDasharray="6,6" fill="none" className="animate-pulse" opacity="0.6"/>
                    <circle cx="0" cy="25%" r="3" fill="#EBC222" className="animate-ping" opacity="0.8"/>
                  </svg>
                  
                  {/* Feature Card */}
                  <div className="relative p-4 md:p-5 rounded-xl border-2 backdrop-blur-md transition-all duration-300 hover:scale-105" style={{ 
                    background: 'linear-gradient(135deg, rgba(235, 194, 34, 0.1), rgba(0, 0, 0, 0.9))',
                    borderColor: 'rgba(235, 194, 34, 0.4)',
                    maxWidth: '280px'
                  }}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#EBC222' }}>
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                      </div>
                      <h3 className="text-base font-black uppercase tracking-wide" style={{ color: '#EBC222', fontFamily: 'Bebas Neue' }}>
                        Reinforced
                      </h3>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1" style={{ fontFamily: 'Bebas Neue' }}>RIB-KNIT HEMS</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      The extra-dense 2x2 ribbing guarantees 100% recovery, ensuring perfect snap-back fit that lasts a lifetime.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Callout 3 - Middle Left (Structured Shoulder) */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 lg:left-4 animate-fade-in w-72" style={{ animationDelay: '0.6s' }}>
                <div className="relative group">
                  {/* Animated connecting line to shoulder */}
                  <svg className="hidden lg:block absolute top-1/2 left-full w-20 xl:w-32 h-16 pointer-events-none" style={{ zIndex: 1, transform: 'translateY(-50%)' }}>
                    <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#EBC222" strokeWidth="2" strokeDasharray="6,6" fill="none" className="animate-pulse" opacity="0.6"/>
                    <circle cx="100%" cy="50%" r="3" fill="#EBC222" className="animate-ping" opacity="0.8"/>
                  </svg>
                  
                  {/* Feature Card */}
                  <div className="relative p-4 md:p-5 rounded-xl border-2 backdrop-blur-md transition-all duration-300 hover:scale-105" style={{ 
                    background: 'linear-gradient(135deg, rgba(235, 194, 34, 0.1), rgba(0, 0, 0, 0.9))',
                    borderColor: 'rgba(235, 194, 34, 0.4)',
                    maxWidth: '280px'
                  }}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#EBC222' }}>
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <h3 className="text-base font-black uppercase tracking-wide" style={{ color: '#EBC222', fontFamily: 'Bebas Neue' }}>
                        Structured
                      </h3>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1" style={{ fontFamily: 'Bebas Neue' }}>SHOULDER DESIGN</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Engineered drop shoulder pattern for modern silhouette.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Callout 4 - Bottom Left (Double-Stitched) */}
              <div className="absolute bottom-16 left-0 lg:left-12 animate-fade-in w-72" style={{ animationDelay: '0.8s' }}>
                <div className="relative group">
                  {/* Animated connecting line to bottom hem */}
                  <svg className="hidden lg:block absolute top-1/2 left-full w-28 xl:w-40 h-28 pointer-events-none" style={{ zIndex: 1, transform: 'translateY(-50%)' }}>
                    <line x1="0" y1="30%" x2="100%" y2="70%" stroke="#EBC222" strokeWidth="2" strokeDasharray="6,6" fill="none" className="animate-pulse" opacity="0.6"/>
                    <circle cx="100%" cy="70%" r="3" fill="#EBC222" className="animate-ping" opacity="0.8"/>
                  </svg>
                  
                  {/* Feature Card */}
                  <div className="relative p-4 md:p-5 rounded-xl border-2 backdrop-blur-md transition-all duration-300 hover:scale-105" style={{ 
                    background: 'linear-gradient(135deg, rgba(235, 194, 34, 0.1), rgba(0, 0, 0, 0.9))',
                    borderColor: 'rgba(235, 194, 34, 0.4)',
                    maxWidth: '280px'
                  }}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#EBC222' }}>
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                      <h3 className="text-base font-black uppercase tracking-wide" style={{ color: '#EBC222', fontFamily: 'Bebas Neue' }}>
                        Double-Stitched
                      </h3>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1" style={{ fontFamily: 'Bebas Neue' }}>DURABILITY</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Every seam reinforced for maximum durability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature Callout 5 - Bottom Right (Premium Cotton) */}
              <div className="absolute bottom-20 right-0 lg:right-8 animate-fade-in w-72" style={{ animationDelay: '1s' }}>
                <div className="relative group">
                  {/* Animated connecting line to cuff */}
                  <svg className="hidden lg:block absolute top-1/2 right-full w-28 xl:w-40 h-32 pointer-events-none" style={{ zIndex: 1, transform: 'translateY(-50%)' }}>
                    <line x1="100%" y1="35%" x2="0" y2="70%" stroke="#EBC222" strokeWidth="2" strokeDasharray="6,6" fill="none" className="animate-pulse" opacity="0.6"/>
                    <circle cx="0" cy="70%" r="3" fill="#EBC222" className="animate-ping" opacity="0.8"/>
                  </svg>
                  
                  {/* Feature Card */}
                  <div className="relative p-4 md:p-5 rounded-xl border-2 backdrop-blur-md transition-all duration-300 hover:scale-105" style={{ 
                    background: 'linear-gradient(135deg, rgba(235, 194, 34, 0.1), rgba(0, 0, 0, 0.9))',
                    borderColor: 'rgba(235, 194, 34, 0.4)',
                    maxWidth: '280px'
                  }}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#EBC222' }}>
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-base font-black uppercase tracking-wide" style={{ color: '#EBC222', fontFamily: 'Bebas Neue' }}>
                        Premium
                      </h3>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1" style={{ fontFamily: 'Bebas Neue' }}>COTTON BLEND</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Proprietary blend designed to resist pilling.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-3 text-black rounded-full text-sm font-black mb-6 uppercase tracking-wider" style={{ background: '#EBC222', fontFamily: 'Bebas Neue' }}>
              ✨ Trending Now
            </span>
            <h2 className="text-5xl md:text-7xl font-black mb-6" style={{ fontFamily: 'Bebas Neue' }}>
              <span style={{ color: '#EBC222', textShadow: '0 0 30px rgba(235, 194, 34, 0.5)' }}>
                Featured Collection
              </span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Discover our most popular hoodies loved by thousands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} onAddToCart={addToCart} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/shop"
              className="group inline-flex items-center gap-3 px-10 py-5 text-black rounded-full font-black text-lg hover:shadow-2xl transition-all transform hover:scale-105 shadow-xl relative overflow-hidden uppercase tracking-wider"
              style={{ background: '#EBC222', fontFamily: 'Bebas Neue' }}
            >
              <span className="relative z-10">Explore Full Collection</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(to right, rgba(245, 208, 51, 1), rgba(235, 194, 34, 1))' }}></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        
        {/* Animated Background Gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-[150px] animate-pulse opacity-20" style={{ backgroundColor: '#EBC222' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full filter blur-[150px] animate-pulse animation-delay-2000 opacity-20" style={{ backgroundColor: 'rgba(235, 194, 34, 0.8)' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              {/* Animated Icon */}
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 rounded-full blur-2xl opacity-50 animate-pulse" style={{ background: 'linear-gradient(to right, #EBC222, rgba(235, 194, 34, 0.8))' }}></div>
                <div className="relative p-6 rounded-full" style={{ background: 'linear-gradient(to right, #EBC222, rgba(235, 194, 34, 0.8))' }}>
                  <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              <h2 className="text-6xl md:text-7xl font-black mb-6 text-white" style={{ fontFamily: 'Bebas Neue' }}>
                <span style={{ color: '#EBC222', textShadow: '0 0 30px rgba(235, 194, 34, 0.5)' }}>
                  Join The Movement
                </span>
              </h2>
              
              <p className="text-2xl text-gray-300 mb-4">
                Join <span className="font-black" style={{ color: '#EBC222', fontFamily: 'Bebas Neue' }}>10,000+</span> hoodie enthusiasts
              </p>
              <p className="text-xl text-gray-400 mb-12">
                Get exclusive deals, early access to new drops, and insider streetwear updates
              </p>
            </div>

            {/* Newsletter Form */}
            <form className="max-w-3xl mx-auto mb-12">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" style={{ background: 'linear-gradient(to right, #EBC222, rgba(235, 194, 34, 0.8))' }}></div>
                <div className="relative flex flex-col sm:flex-row gap-4 p-3 bg-black/50 backdrop-blur-xl rounded-2xl border" style={{ borderColor: 'rgba(235, 194, 34, 0.2)' }}>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-8 py-6 rounded-xl text-white placeholder-gray-400 bg-white/5 backdrop-blur-sm border focus:outline-none focus:ring-2 focus:bg-white/10 transition-all text-lg"
                    style={{ borderColor: 'rgba(235, 194, 34, 0.2)' }}
                    onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px #EBC222'}
                    onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
                  />
                  <button
                    type="submit"
                    className="group/btn relative px-10 py-6 overflow-hidden rounded-xl font-black text-lg transition-all duration-300 uppercase tracking-wider"
                    style={{ fontFamily: 'Bebas Neue' }}
                  >
                    <div className="absolute inset-0" style={{ background: '#EBC222' }}></div>
                    <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity" style={{ background: 'linear-gradient(to right, rgba(245, 208, 51, 1), rgba(235, 194, 34, 1))' }}></div>
                    <span className="relative z-10 text-black flex items-center gap-2 whitespace-nowrap">
                      Subscribe Now
                      <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </form>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: '🎁', title: '10% Off First Order', desc: 'Instant discount on signup' },
                { icon: '⚡', title: 'Early Access', desc: 'New drops before anyone' },
                { icon: '💎', title: 'Exclusive Deals', desc: 'VIP-only promotions' }
              ].map((benefit, i) => (
                <div key={i} className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border hover:bg-white/10 transition-all duration-300" style={{ borderColor: i === 0 ? 'rgba(235, 194, 34, 0.2)' : 'rgba(235, 194, 34, 0.2)' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(235, 194, 34, 0.5)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(235, 194, 34, 0.2)'}>
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="text-xl font-black mb-1" style={{ color: '#EBC222', fontFamily: 'Bebas Neue' }}>{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-500 text-sm">
              🔒 We respect your privacy. Unsubscribe anytime. No spam, ever.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
