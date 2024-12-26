import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../../data/products';

interface ProductCardProps extends Product {}

export default function ProductCard({ id, title, price, image, category }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${id}`} className="block relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </Link>
      <div className="p-4">
        <span className="text-sm text-blue-600 font-medium">{category}</span>
        <Link to={`/product/${id}`}>
          <h3 className="text-lg font-semibold mt-1 hover:text-blue-600 line-clamp-2">{title}</h3>
        </Link>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold">${price.toFixed(2)}</span>
          <button 
            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}