import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { categoryHeroes } from '../data/categoryData';
import CategoryHero from '../components/category/CategoryHero';
import ProductCard from '../components/home/ProductCard';

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const heroData = category ? categoryHeroes[category] : null;
  
  const categoryProducts = products.filter(product => {
    if (category === 'best-sellers') {
      // For best sellers, we could use a different logic like rating or sales
      return true;
    }
    return product.category.toLowerCase() === category?.split('-').join(' ');
  });

  if (!heroData) {
    return <div>Category not found</div>;
  }

  return (
    <div>
      <CategoryHero {...heroData} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}