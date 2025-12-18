import { Shield, Sparkles, Users, RotateCw, Award, HeadphonesIcon } from 'lucide-react';

const benefits = [
  {
    icon: Sparkles,
    title: "Curated by Professionals",
    description: "Every artwork is hand-selected by professional artists and curators to ensure quality and aesthetic appeal."
  },
  {
    icon: RotateCw,
    title: "Flexible Rotation",
    description: "Change your art as often as you like. Keep your space fresh and inspiring with seasonal rotations."
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "All artworks are fully insured during rental period. Enjoy peace of mind with comprehensive coverage."
  },
  {
    icon: Users,
    title: "Trusted by 200+ Clients",
    description: "Join hundreds of satisfied clients including homes, offices, hotels, and prestigious organizations."
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Original artworks, limited editions, and certified prints from renowned and emerging artists."
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Personal curator assistance, white-glove delivery, professional installation, and ongoing maintenance."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Ashish Patel Atelier
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            India&apos;s premier art rental service with a commitment to quality, flexibility, and exceptional service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200"
              >
                <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Building India&apos;s #1 Art Movement
          </h3>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Creating signposts of happiness by transforming spaces with curated art. 
            Join us in making art accessible, affordable, and changeable.
          </p>
        </div>
      </div>
    </section>
  );
}
