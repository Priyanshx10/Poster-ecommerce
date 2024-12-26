import React from 'react';
import { Users, ShoppingBag, Star, Building } from 'lucide-react';

export default function CompanyStats() {
  const stats = [
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      value: "10K+",
      label: "Happy Customers"
    },
    {
      icon: <ShoppingBag className="w-10 h-10 text-blue-600" />,
      value: "50K+",
      label: "Products Sold"
    },
    {
      icon: <Star className="w-10 h-10 text-blue-600" />,
      value: "4.8",
      label: "Average Rating"
    },
    {
      icon: <Building className="w-10 h-10 text-blue-600" />,
      value: "1K+",
      label: "Corporate Clients"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}