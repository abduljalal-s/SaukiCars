// types/index.ts
export interface NavItem {
  label: string;
  href: string;
}

export interface Car {
  id: number;
  name: string;
  price: string;
  priceNumeric: number;
  image: string;
  year: number;
  mileage: string;
  transmission: 'Automatic' | 'Manual';
  fuel: string;
  brand: string;
  model: string;
  featured: boolean;
  description?: string;
  features?: string[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}