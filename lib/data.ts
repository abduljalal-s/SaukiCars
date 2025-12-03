// lib/data.ts
import { Car, Feature, NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Inventory', href: '/inventory' },
  { label: 'Buy', href: '/buy' },
  { label: 'Sell', href: '/sell' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const featuredCars: Car[] = [
  {
    id: 1,
    name: '2024 Porsche 911',
    brand: 'Porsche',
    model: '911',
    price: '$125,000',
    priceNumeric: 125000,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    year: 2024,
    mileage: '1,200 mi',
    transmission: 'Automatic',
    fuel: 'Premium',
    featured: true,
    description: 'The iconic 911 delivers legendary performance and timeless design.',
    features: ['Leather Interior', 'Sport Chrono Package', 'Premium Sound System']
  },
  {
    id: 2,
    name: '2023 BMW M4',
    brand: 'BMW',
    model: 'M4',
    price: '$89,500',
    priceNumeric: 89500,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    year: 2023,
    mileage: '8,500 mi',
    transmission: 'Manual',
    fuel: 'Premium',
    featured: true,
    description: 'Pure driving excitement with precision handling and raw power.',
    features: ['Carbon Fiber Roof', 'M Sport Exhaust', 'Adaptive Suspension']
  },
  {
    id: 3,
    name: '2024 Mercedes AMG GT',
    brand: 'Mercedes',
    model: 'AMG GT',
    price: '$145,000',
    priceNumeric: 145000,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    year: 2024,
    mileage: '2,100 mi',
    transmission: 'Automatic',
    fuel: 'Premium',
    featured: true,
    description: 'Combining luxury and performance in a stunning package.',
    features: ['AMG Performance Exhaust', 'Burmester Sound', 'Dynamic Select']
  }
];

export const features: Feature[] = [
  {
    icon: '🏆',
    title: 'Premium Selection',
    description: 'Handpicked luxury and performance vehicles from top brands'
  },
  {
    icon: '✓',
    title: 'Certified Quality',
    description: 'Every vehicle undergoes rigorous inspection and certification'
  },
  {
    icon: '💰',
    title: 'Best Pricing',
    description: 'Competitive prices and flexible financing options available'
  },
  {
    icon: '🛡️',
    title: 'Warranty Coverage',
    description: 'Comprehensive warranty plans for peace of mind'
  }
];