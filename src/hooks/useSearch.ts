import { useState, useEffect } from 'react';
import { Product, products } from '../data/products';

export function useSearch(searchTerm: string) {
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    const searchResults = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(searchResults);
  }, [searchTerm]);

  return results;
}