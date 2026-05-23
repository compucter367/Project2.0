// import React from 'react'

const FirstSections = () => {
  return (
    <section className="bg-white py-16 px-6 md:py-24 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Chap tomon: Matnlar va Tugma */}
        <div className="flex flex-col space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            Take your business to the next level take out
          </h1>
          
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. 
            Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. 
            Vivamus mattis eros at sem pulvinar
          </p>
          
          <div className="pt-2">
            <button className="bg-[#10b981] hover:bg-[#059669] text-white font-medium text-sm md:text-base py-3 px-6 rounded-md transition-colors duration-200 shadow-sm">
              Learn more
            </button>
          </div>
        </div>

        {/* O'ng tomon: Video/Rasm bo'limi */}
        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-md group cursor-pointer">
          {/* image_bcf4c8.png dagi asosiy rasm joylashadigan joy */}
          <img 
            src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=80" 
            alt="Business landscape" 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Ustki qatlam (Overlay) */}
          <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/20" />

          {/* Play Tugmasi */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button 
              className="w-16 h-16 md:w-20 md:h-20 bg-[#10b981] hover:bg-[#059669] text-white rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 focus:outline-none"
              aria-label="Play video"
            >
              {/* Play ikonasi (SVG) */}
              <svg 
                className="w-6 h-6 md:w-8 md:h-8 text-white ml-1 fill-current" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FirstSections;