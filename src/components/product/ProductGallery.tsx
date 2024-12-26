import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProductImage {
  url: string;
  alt: string;
}

interface ProductGalleryProps {
  images: ProductImage[];
  addToCart: (productId: string) => void;
  addToWishlist: (productId: string) => void;
  shareProduct: (productId: string) => void;
}

export default function ProductGallery({ images, addToCart, addToWishlist, shareProduct }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // Assuming productId is available in the images array or elsewhere in the component
    // Replace 'productId' with the actual productId or a function to get it
    addToCart('productId');
  };

  const handleAddToWishlist = () => {
    // Assuming productId is available in the images array or elsewhere in the component
    // Replace 'productId' with the actual productId or a function to get it
    addToWishlist('productId');
  };

  const handleShareProduct = () => {
    // Assuming productId is available in the images array or elsewhere in the component
    // Replace 'productId' with the actual productId or a function to get it
    shareProduct('productId');
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="aspect-w-3 aspect-h-2">
        <img
          src={images[selectedImage].url}
          alt={images[selectedImage].alt}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="flex justify-between items-center mt-4">
          <button onClick={handleAddToCart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
          <button onClick={handleAddToWishlist} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Add to Wishlist
          </button>
          <button onClick={handleShareProduct} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Share
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative ${
              selectedImage === index
                ? 'ring-2 ring-blue-500'
                : 'hover:opacity-75'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-24 object-cover rounded-lg"
            />
          </button>
        ))}
      </div>
    </div>
  );
}