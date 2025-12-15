import { Search, Calendar, Truck, Heart } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Browse & Select",
    description: "Explore our curated collection of 500+ artworks. Filter by style, size, and color palette.",
    step: "01"
  },
  {
    icon: Calendar,
    title: "Choose Your Plan",
    description: "Select a rental period that works for you - monthly, quarterly, or yearly. No long-term commitment.",
    step: "02"
  },
  {
    icon: Truck,
    title: "We Deliver & Install",
    description: "Professional delivery and installation at your doorstep. We handle everything, including maintenance.",
    step: "03"
  },
  {
    icon: Heart,
    title: "Love It? Buy It",
    description: "Fall in love with a piece? Purchase it anytime and we'll adjust your rental payments toward the price.",
    step: "04"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Renting art has never been easier
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 mt-4">
                    <Icon className="h-8 w-8 text-purple-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-purple-300" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
