import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, User, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useAuth } from '../../hooks/useAuth';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="w-full">
      {/* Primary Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-blue-600">PosterHub</Link>
            
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <SearchBar />
            </div>

            <div className="flex items-center gap-4">
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="hidden md:flex items-center gap-2 hover:text-blue-600"
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              ) : (
                <Link to="/auth" className="hidden md:flex items-center gap-2 hover:text-blue-600">
                  <User size={20} />
                  <span>Login / Signup</span>
                </Link>
              )}
              <Link to="/cart" className="flex items-center gap-1">
                <ShoppingCart size={20} />
                <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  0
                </span>
              </Link>
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Header */}
      <nav className="bg-gray-100 hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-between py-3">
            <li><Link to="/category/safety-signs" className="hover:text-blue-600">Safety Signs</Link></li>
            <li><Link to="/category/safety-charts" className="hover:text-blue-600">Safety Charts</Link></li>
            <li><Link to="/category/corporate" className="hover:text-blue-600">Corporate & Bulk</Link></li>
            <li><Link to="/category/best-sellers" className="hover:text-blue-600">Best Sellers</Link></li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="p-4">
            <div className="flex justify-end">
              <button onClick={() => setIsMenuOpen(false)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-8">
              <SearchBar />
            </div>
            <ul className="mt-8 space-y-4">
              <li><Link to="/category/safety-signs" className="block py-2">Safety Signs</Link></li>
              <li><Link to="/category/safety-charts" className="block py-2">Safety Charts</Link></li>
              <li><Link to="/category/corporate" className="block py-2">Corporate & Bulk</Link></li>
              <li><Link to="/category/best-sellers" className="block py-2">Best Sellers</Link></li>
              {isAuthenticated ? (
                <li>
                  <button onClick={handleLogout} className="block py-2 text-red-600">
                    Logout
                  </button>
                </li>
              ) : (
                <li><Link to="/auth" className="block py-2">Login / Signup</Link></li>
              )}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}