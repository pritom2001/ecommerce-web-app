import React from 'react';

const BrandStory: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Ultra Modern Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] animate-blob opacity-50"></div>
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000 opacity-50"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000 opacity-40"></div>
          </div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        {/* Parallax Image */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=900&fit=crop"
            alt="Brand Story"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Animated Badge */}
            <div className="mb-8 inline-block animate-slide-down">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
                <span className="relative px-8 py-3 bg-black/50 backdrop-blur-xl text-white rounded-full text-sm font-bold border border-white/10">
                  EST. 2020
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none animate-fade-in-up">
              <span className="block mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
                RUIMACH
              </span>
              <span className="block relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 animate-gradient-x">
                  STORY
                </span>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl -z-10"></div>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-2xl md:text-4xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-500 font-light">
              Where <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">comfort</span> meets 
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400"> street culture</span>
            </p>

            {/* Scroll Indicator */}
            <div className="animate-bounce-slow mt-16">
              <svg className="w-8 h-8 mx-auto text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Story Content - Modern Split Design */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* The Beginning Section */}
            <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
              <div className="relative animate-fade-in-up">
                <div className="absolute -top-8 -left-8 text-9xl font-black text-purple-100">01</div>
                <div className="relative z-10">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs font-bold mb-6 uppercase tracking-wider">
                    The Beginning
                  </span>
                  <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                    <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent">
                      Born from the Streets
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed mb-6">
                    Ruimach was founded in <span className="font-bold text-purple-600">2020</span> with one mission: to create the perfect hoodie. 
                    We started in a small garage, obsessed with finding the right fabric, the perfect weight, and that ideal fit that makes you never want to take it off.
                  </p>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    What began as a passion project for quality streetwear has evolved into a movement. Today, 
                    <span className="font-bold text-pink-600"> over 15,000 hoodie enthusiasts</span> trust Ruimach for their daily comfort and style.
                  </p>
                </div>
              </div>
              <div className="relative group animate-fade-in-up animation-delay-500">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <img
                  src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=1000&fit=crop"
                  alt="Ruimach Hoodies"
                  className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Values Section - 3D Cards */}
            <div className="mb-32">
              <div className="text-center mb-16">
                <span className="inline-block px-6 py-2 bg-black text-white rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
                  Our Values
                </span>
                <h2 className="text-5xl md:text-6xl font-black mb-6">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                    What Drives Us
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    ),
                    title: 'Innovation',
                    description: 'Constantly refining fits, fabrics, and designs based on real customer feedback.',
                    gradient: 'from-purple-500 to-purple-600'
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    ),
                    title: 'Quality Fabric',
                    description: 'Premium cotton blends tested for durability, comfort, and the perfect drape.',
                    gradient: 'from-pink-500 to-pink-600'
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: 'Sustainable',
                    description: 'Eco-friendly production with organic materials and ethical manufacturing practices.',
                    gradient: 'from-green-500 to-emerald-600'
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                    ),
                    title: 'Street Approved',
                    description: 'Designed by hoodie lovers, for hoodie lovers. Real comfort, authentic style.',
                    gradient: 'from-red-500 to-rose-600'
                  }
                ].map((value, i) => (
                  <div
                    key={i}
                    className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden"
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                    
                    <div className={`relative w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                      {value.icon}
                    </div>
                    
                    <h3 className="text-2xl font-black mb-4 text-gray-900">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    
                    <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${value.gradient} w-0 group-hover:w-full transition-all duration-500`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement - Cinematic */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900 opacity-90"></div>
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-600 rounded-full filter blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-pink-600 rounded-full filter blur-[150px] animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white text-sm font-bold mb-8">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                OUR MISSION
              </div>
            </div>

            <h2 className="text-5xl md:text-7xl font-black mb-12 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
                Comfort. Style. Community.
              </span>
            </h2>

            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-16 font-light">
              To create the world's most comfortable hoodies while building a 
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> community of people </span>
              who value quality, authenticity, and sustainable fashion.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: '100%', label: 'Cotton Quality' },
                { number: '50+', label: 'Unique Designs' },
                { number: '15K+', label: 'Happy Customers' }
              ].map((stat, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline - Modern Vertical */}
      <section className="py-32 bg-gradient-to-b from-white via-purple-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
                Our Journey
              </span>
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Milestones That Matter
                </span>
              </h2>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 via-pink-600 to-purple-600 hidden md:block"></div>

              <div className="space-y-20">
                {[
                  {
                    year: '2020',
                    title: 'The First Hoodie',
                    description: 'Ruimach launched with our signature Classic Black Hoodie. Hand-sewn in a small garage, perfected over 100 prototypes.',
                    position: 'left'
                  },
                  {
                    year: '2021',
                    title: 'Going Viral',
                    description: 'Reached 5,000 customers through word-of-mouth. Our hoodies became a streetwear staple.',
                    position: 'right'
                  },
                  {
                    year: '2023',
                    title: 'Sustainable Shift',
                    description: 'Transitioned to 100% organic cotton and eco-friendly dyes. Won "Best Sustainable Streetwear Brand" award.',
                    position: 'left'
                  },
                  {
                    year: '2025',
                    title: 'The Movement Grows',
                    description: 'Expanded to 50+ unique designs. Over 15,000 hoodie enthusiasts worldwide wearing Ruimach daily.',
                    position: 'right'
                  }
                ].map((milestone, i) => (
                  <div
                    key={i}
                    className={`relative flex items-center ${
                      milestone.position === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col gap-8`}
                  >
                    {/* Content */}
                    <div className={`w-full md:w-5/12 ${milestone.position === 'left' ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 transform hover:scale-105">
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                          {milestone.year}
                        </span>
                        <h3 className="text-3xl font-black mb-4 text-gray-900">{milestone.title}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div className="relative flex items-center justify-center w-full md:w-2/12">
                      <div className="absolute w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-white shadow-lg"></div>
                      <div className="absolute w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-ping opacity-50"></div>
                    </div>

                    {/* Spacing */}
                    <div className="w-full md:w-5/12 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Modern Cards */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-black to-pink-900/50"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-[150px] opacity-30 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600 rounded-full filter blur-[150px] opacity-30 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
                The Team
              </span>
              <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
                <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                  Meet the Visionaries
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Behind Ruimach is a team of hoodie enthusiasts, designers, and sustainability advocates
                dedicated to crafting the perfect piece of streetwear.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  initials: 'RM',
                  name: 'Riley Martinez',
                  role: 'Founder & Creative Director',
                  bio: 'Hoodie obsessive with 10 years in streetwear design',
                  gradient: 'from-purple-600 to-pink-600'
                },
                {
                  initials: 'AK',
                  name: 'Alex Kim',
                  role: 'Head of Production',
                  bio: 'Fabric expert ensuring every hoodie is perfect',
                  gradient: 'from-pink-600 to-rose-600'
                },
                {
                  initials: 'JP',
                  name: 'Jordan Parks',
                  role: 'Sustainability Lead',
                  bio: 'Pioneering eco-friendly streetwear manufacturing',
                  gradient: 'from-purple-600 to-blue-600'
                }
              ].map((member, i) => (
                <div
                  key={i}
                  className="group relative"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-4">
                    {/* Glow Effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${member.gradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    
                    <div className="relative">
                      {/* Avatar */}
                      <div className="relative mb-6">
                        <div className={`w-32 h-32 bg-gradient-to-r ${member.gradient} rounded-full mx-auto flex items-center justify-center text-white text-4xl font-black shadow-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                          {member.initials}
                        </div>
                        <div className="absolute inset-0 w-32 h-32 mx-auto">
                          <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                        </div>
                      </div>

                      {/* Info */}
                      <h3 className="text-2xl font-black text-white mb-2">{member.name}</h3>
                      <p className={`text-lg font-bold mb-3 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                        {member.role}
                      </p>
                      <p className="text-gray-400 leading-relaxed">{member.bio}</p>

                      {/* Social Links */}
                      <div className="flex gap-3 justify-center mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                          </svg>
                        </button>
                        <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-20">
              <p className="text-2xl text-gray-300 mb-8">Want to join our team?</p>
              <button className="group relative px-12 py-6 overflow-hidden rounded-full font-bold text-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-transform group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 text-white flex items-center gap-3">
                  View Open Positions
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandStory;
