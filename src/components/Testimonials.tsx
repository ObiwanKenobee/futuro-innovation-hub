import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    role: "Professional Player",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    content: "Futuro helped me stay injury-free and improve my performance.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Head Coach",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    content: "Real-time analytics transformed our matchday tactics.",
    rating: 5,
  },
  {
    name: "Mike Wilson",
    role: "Fan",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    content: "I feel more connected to my favorite club than ever.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-teal-900 to-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          What People Say About Futuro
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-white/10 backdrop-blur-lg border-none">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-futuro-gold" fill="#FFD700" />
                  ))}
                </div>
                <p className="text-gray-200">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};