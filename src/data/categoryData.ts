export interface CategoryHero {
  title: string;
  description: string;
  image: string;
}

export const categoryHeroes: Record<string, CategoryHero> = {
  'safety-signs': {
    title: 'Safety Signs Collection',
    description: 'Professional safety signage for every workplace requirement',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1920&q=80'
  },
  'safety-charts': {
    title: 'Safety Charts & Guidelines',
    description: 'Comprehensive safety information displays and charts',
    image: 'https://images.unsplash.com/photo-1587582345426-bf07f534b063?auto=format&fit=crop&w=1920&q=80'
  },
  'corporate': {
    title: 'Corporate & Bulk Solutions',
    description: 'Custom safety solutions for large-scale implementations',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80'
  },
  'best-sellers': {
    title: 'Best Selling Products',
    description: 'Our most popular safety solutions trusted by thousands',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80'
  }
};