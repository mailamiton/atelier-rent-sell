import { Heart, ShoppingCart, TrendingUp, Award } from 'lucide-react';

export default function LoveItBuyIt() {
  return (
    <section id="buy" className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
              <Heart className="h-5 w-5 fill-current" />
              <span className="text-sm font-bold">PREMIUM Rent-to-Own • 100% Credit Applied</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Premium Art Rental with <span className="gradient-text">Zero-Risk Ownership</span>
            </h2>
            
            <p className="text-2xl font-semibold text-purple-600 mb-6 italic">
              &quot;Every rupee you rent brings you closer to owning the art you love&quot;
            </p>
            
            <p className="text-xl text-gray-600 mb-8">
              No need to commit upfront. Rent premium artwork, live with it, and if you fall in love, 
              purchase it anytime. We&apos;ll credit 100% of your rental payments toward the final price.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Rental Credit Applied</h3>
                  <p className="text-gray-600">All rental payments are credited toward your purchase price. Try before you buy!</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Authentic Artworks</h3>
                  <p className="text-gray-600">All artworks come with certificates of authenticity and artist biographies.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Flexible Payment Plans</h3>
                  <p className="text-gray-600">Purchase with easy EMI options. Own premium art without the upfront cost.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition shadow-lg"
              >
                Start Your Art Journey
                <Heart className="h-5 w-5" />
              </a>
              <a 
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition"
              >
                Buy Premium Art Direct
                <ShoppingCart className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-8 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Example Scenario</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Artwork Value:</span>
                    <span className="font-bold text-gray-900">₹25,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Monthly Rental:</span>
                    <span className="font-bold text-gray-900">₹2,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Rented for:</span>
                    <span className="font-bold text-gray-900">6 months</span>
                  </div>
                  <div className="border-t-2 border-purple-200 pt-3 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Rental Paid:</span>
                      <span className="font-bold text-purple-600">₹15,000</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-700">Balance to Own:</span>
                      <span className="font-bold text-green-600">₹10,000</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4">
                <p className="text-sm font-semibold text-yellow-800">
                  ✨ Save 60% through rental credits! Own premium art at a fraction of the cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
