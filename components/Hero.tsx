import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 px-4 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">India&apos;s Premier Art Rental Service</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Premium Art Rental.<br />
              <span className="gradient-text">Try It. Love It. Own It.</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Transform your space with curated artwork. Flexible rental plans for homes, offices, hotels, and events. 
              No commitment, just beautiful art that inspires.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#rental" 
                className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition shadow-lg hover:shadow-xl"
              >
                Explore Rental Plans
                <ArrowRight className="h-5 w-5" />
              </a>
              <a 
                href="/gallery" 
                className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-purple-600 hover:bg-purple-50 transition"
              >
                View Gallery
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-purple-600">500+</div>
                <div className="text-sm text-gray-600">Artworks</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">200+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">Flexible</div>
                <div className="text-sm text-gray-600">Plans</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl shadow-2xl relative overflow-hidden">
              <iframe 
                src="https://player.vimeo.com/video/875890887?autoplay=1&loop=1&muted=1" 
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Premium Art Collection - Curated by professionals"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
