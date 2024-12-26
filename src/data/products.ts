export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Workplace Safety First",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=400&q=80",
    category: "Safety Signs",
    description: "Essential workplace safety poster highlighting key safety protocols."
  },
  {
    id: "2",
    title: "Emergency Exit",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=400&q=80",
    category: "Safety Signs",
    description: "Clear emergency exit signage for workplace safety compliance."
  },
  {
    id: "3",
    title: "PPE Requirements",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1587582345426-bf07f534b063?auto=format&fit=crop&w=400&q=80",
    category: "Safety Charts",
    description: "Comprehensive PPE requirements chart for different work areas."
  },
  {
    id: "4",
    title: "Chemical Safety Guide",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=400&q=80",
    category: "Safety Charts",
    description: "Detailed chemical safety guidelines and handling procedures."
  },
  {
    id: "5",
    title: "Corporate Safety Bundle",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80",
    category: "Corporate",
    description: "Complete safety signage bundle for corporate environments."
  },
  {
    id: "6",
    title: "Bulk Safety Signs Pack",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80",
    category: "Corporate",
    description: "Bulk pack of essential safety signs for large facilities."
  }
];