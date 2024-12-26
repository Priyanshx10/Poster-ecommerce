import React from 'react';
import { Shield, Truck, Award, Clock } from 'lucide-react';

export default function QualityAssurance() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Premium Quality",
      description: "High-quality materials"
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Fast Shipping",
      description: "Quick delivery"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Guaranteed",
      description: "100% satisfaction"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "24/7 Support",
      description: "Always available"
    }
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3 p-4">
              <div className="flex-shrink-0">{feature.icon}</div>
              <div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}