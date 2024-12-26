import React from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Heart, Share2 } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  // In a real app, you would fetch product details based on the ID
  const product = {
    title: "Sample Safety Poster",
    price: 29.99,
    description: "High-quality safety poster perfect for workplace environments...",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=80",
    category: "Safety Signs",
    features: [
      "High-quality printing",
      "Durable materials",
      "Weather-resistant",
      "Easy to mount"
    ]
  };

  const similarProducts = [
    {
      id: "1",
      title: "Workplace Safety",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=400&q=80"
    },
    // Add more similar products...
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        
        <div>
          <span className="text-blue-600">{product.category}</span>
          <h1 className="text-3xl font-bold mt-2 mb-4">{product.title}</h1>
          <p className="text-2xl font-bold text-blue-600 mb-4">${product.price}</p>
          
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside space-y-1">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex gap-4 mb-8">
            <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700">
              <ShoppingCart size={20} />
              Add to Cart
            </button>
            <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Heart size={20} />
            </button>
            <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {similarProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-blue-600 mt-2">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}