import { Home, Building2, Hotel, Calendar, Hammer, Crown, RefreshCw } from 'lucide-react';

const audiences = [
  {
    icon: Home,
    title: "Residential Art Renting",
    subtitle: "Homes & Apartments",
    description: "Perfect for living rooms, bedrooms, and dining areas. Monthly to 6-month plans available.",
    artTypes: ["Abstract & Modern", "Canvas Art", "Nature & Landscapes"],
    period: "Monthly / 3 months / 6 months",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Building2,
    title: "Corporate / Office Art",
    subtitle: "Offices, Startups, Co-working",
    description: "Elevate your workspace with professional art for reception, conference rooms, and corridors.",
    artTypes: ["Abstract & Minimal", "Motivational Art", "Neutral Palettes"],
    period: "3 months / 6 months / 1 year",
    highlight: "High-Value Segment",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Hotel,
    title: "Hospitality Art Renting",
    subtitle: "Hotels, Cafés, Restaurants",
    description: "Create memorable experiences with theme-based art for lobbies, rooms, and feature walls.",
    artTypes: ["Heritage & Culture", "Modern Décor", "Photography Art"],
    period: "Seasonal / Yearly contracts",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Calendar,
    title: "Event-Based Renting",
    subtitle: "Short-Term Setups",
    description: "Perfect for exhibitions, weddings, product launches, and temporary installations.",
    artTypes: ["Statement Artworks", "Installations", "Contemporary Pieces"],
    period: "1 day – 1 month",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Hammer,
    title: "Staging Art Renting",
    subtitle: "Real Estate",
    description: "Enhance property appeal for sample flats and showings. Help sell properties faster.",
    artTypes: ["Neutral Premium Art", "Large-Format Wall Art"],
    period: "Flexible duration",
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: Crown,
    title: "Premium / Collector Art",
    subtitle: "Luxury Homes",
    description: "Original artworks, signed pieces, and limited editions. Rental adjusts toward purchase price.",
    artTypes: ["Original Artworks", "Signed Editions", "Artist Biography Included"],
    period: "Monthly / Quarterly",
    highlight: "Buy with rental credit",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: RefreshCw,
    title: "Subscription-Based Art",
    subtitle: "Regular Refresh",
    description: "Monthly subscription with art rotation every 1-3 months. Always fresh, always inspiring.",
    artTypes: ["Rotating Collection", "Seasonal Themes", "Diverse Styles"],
    period: "Monthly subscription",
    color: "from-pink-500 to-rose-500"
  }
];

export default function TargetAudiences() {
  return (
    <section id="rental" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Art Rental for Every Space
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're decorating a home, office, hotel, or event, we have the perfect art rental solution for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border-2 border-gray-100 p-8 hover:border-purple-200 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${audience.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {audience.title}
                </h3>
                <p className="text-purple-600 font-semibold mb-4">{audience.subtitle}</p>
                
                <p className="text-gray-600 mb-6">{audience.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Popular Art Types:</p>
                    <div className="flex flex-wrap gap-2">
                      {audience.artTypes.map((type, i) => (
                        <span key={i} className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">Rental Period</p>
                    <p className="text-sm font-semibold text-gray-900">{audience.period}</p>
                  </div>

                  {audience.highlight && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-2">
                      <p className="text-sm font-semibold text-yellow-800">✨ {audience.highlight}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
