// components/sections/CarCard.tsx
'use client';

import { useCart } from '@/contexts/CartContext';
import { Car } from '@/types';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const inCart = isInCart(car.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inCart) {
      removeFromCart(car.id);
    } else {
      addToCart(car);
    }
  };

  return (
    <div className="group bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-red-500/50">
      <div className="relative h-64 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {car.featured && (
          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
        
        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm p-2 rounded-full hover:bg-black/80 transition-all"
        >
          <Heart
            className={`w-6 h-6 transition-all ${
              inCart ? 'fill-red-500 text-red-500' : 'text-white'
            }`}
          />
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-red-500 transition-colors">
          {car.name}
        </h3>
        <p className="text-3xl font-bold text-red-500 mb-4">{car.price}</p>
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-gray-400">
          <div>Year: <span className="text-white">{car.year}</span></div>
          <div>Mileage: <span className="text-white">{car.mileage}</span></div>
          <div>Trans: <span className="text-white">{car.transmission}</span></div>
          <div>Fuel: <span className="text-white">{car.fuel}</span></div>
        </div>
        <Link href={`/inventory/${car.id}`}>
          <button className="w-full bg-gradient-to-r from-red-600 to-orange-500 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}