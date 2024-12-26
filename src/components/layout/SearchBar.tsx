import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useSearch } from '../../hooks/useSearch';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const results = useSearch(searchTerm);
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const handleProductClick = (id: string) => {
    navigate(`/product/${id}`);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search posters..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={handleSearch}
        />
        <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg max-h-96 overflow-auto">
          {results.map((product) => (
            <div
              key={product.id}
              className="p-4 hover:bg-gray-50 cursor-pointer flex items-center space-x-4"
              onClick={() => handleProductClick(product.id)}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                <h4 className="font-medium">{product.title}</h4>
                <p className="text-sm text-gray-600">{product.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}