import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import ProductGrid from '../components/home/ProductGrid';
import QualityAssurance from '../components/home/QualityAssurance';
import CompanyStats from '../components/home/CompanyStats';
import Newsletter from '../components/home/Newsletter';

export default function HomePage() {
  return (
    <div>
      <HeroSlider />
      <QualityAssurance />
      <ProductGrid />
      <CompanyStats />
      <Newsletter />
    </div>
  );
}