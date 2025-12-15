import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Homeowner, Mumbai",
    content: "The art rental service transformed our living room! We love being able to change artwork every few months. The 'Love it? Buy it' option is genius - we've already purchased two pieces.",
    rating: 5
  },
  {
    name: "Rajesh Mehta",
    role: "CEO, Tech Startup",
    content: "Our office looks incredibly professional now. The team curated artworks that perfectly match our brand colors. Clients always compliment our space during meetings.",
    rating: 5
  },
  {
    name: "The Heritage Hotel",
    role: "Boutique Hotel, Jaipur",
    content: "Ashish Patel Atelier helped us create an authentic cultural experience for our guests with rotating regional art. The seasonal collections keep our property fresh and relevant.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by homeowners, businesses, and hospitality leaders
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-purple-100" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-purple-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
