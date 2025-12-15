import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "₹700",
    period: "per month",
    description: "Perfect for individuals trying art rental",
    features: [
      "1 artwork rental",
      "Monthly rotation option",
      "Free delivery & installation",
      "Professional cleaning & maintenance",
      "Purchase option anytime"
    ],
    popular: false
  },
  {
    name: "Home Essential",
    price: "₹2,500",
    period: "per month",
    description: "Ideal for homes and apartments",
    features: [
      "3-4 artworks rental",
      "Quarterly rotation",
      "Free delivery & installation",
      "Dedicated curator support",
      "Rental credit on purchase",
      "Insurance included"
    ],
    popular: true
  },
  {
    name: "Corporate Premium",
    price: "₹10,000",
    period: "per month",
    description: "Designed for offices and businesses",
    features: [
      "10+ artworks rental",
      "Bi-annual rotation",
      "Priority delivery & installation",
      "Custom curation for brand alignment",
      "Multiple locations supported",
      "Full insurance coverage",
      "Dedicated account manager"
    ],
    popular: false
  },
  {
    name: "Custom Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For hotels, events, and large spaces",
    features: [
      "Unlimited artworks",
      "Flexible rotation schedule",
      "White-glove service",
      "Theme-based curation",
      "Seasonal collections",
      "Premium insurance",
      "24/7 support"
    ],
    popular: false
  }
];

export default function PricingPlans() {
  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Flexible Rental Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose a plan that fits your space and budget. All plans include free delivery, installation, and maintenance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-2xl scale-105 relative'
                  : 'bg-white border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-purple-600'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                  {' '}/{plan.period}
                </span>
              </div>
              <p className={`mb-6 ${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'text-yellow-300' : 'text-purple-600'
                    }`} />
                    <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-full font-semibold transition ${
                  plan.popular
                    ? 'bg-white text-purple-600 hover:bg-gray-100'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            All prices are flexible based on artwork selection, size, and customization. 
            <a href="#contact" className="text-purple-600 font-semibold hover:underline ml-1">
              Contact us for a custom quote
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
