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
                href="#gallery" 
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
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-200 to-blue-200 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-xl">
                    <p className="text-2xl font-bold text-gray-900 mb-2">Premium Art Collection</p>
                    <p className="text-gray-600">Curated by professionals</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg rotate-12">
              Starting ₹700/month
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
