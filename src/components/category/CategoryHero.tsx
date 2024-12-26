import React from 'react';
import { CategoryHero } from '../../data/categoryData';

interface CategoryHeroProps extends CategoryHero {}

export default function CategoryHeroSection({ title, description, image }: CategoryHeroProps) {
  return (
    <div className="relative h-[400px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl md:text-2xl">{description}</p>
        </div>
      </div>
    </div>
  );
}