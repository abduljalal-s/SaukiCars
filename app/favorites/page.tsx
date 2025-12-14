/* eslint-disable @next/next/no-img-element */
// app/favorites/page.tsx
'use client';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import ComparisonTable from '@/components/sections/ComparisonTable';
import { useCart } from '@/contexts/CartContext';
import { GitCompare, ShoppingCart, Trash2 } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export default function FavoritesPage() {
  const { cartItems, removeFromCart, clearCart, cartCount } = useCart();
  const [showComparison, setShowComparison] = useState(false);

  const totalValue = cartItems.reduce((sum, car) => sum + car.priceNumeric, 0);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&q=80"
            alt="Favorites"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Your <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Favorites</span>
          </h1>
          <p className="text-gray-300 text-lg">
            {cartCount} {cartCount === 1 ? 'vehicle' : 'vehicles'} saved for comparison
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingCart className="w-24 h-24 mx-auto mb-6 text-gray-700" />
              <h2 className="text-3xl font-bold mb-4">No Favorites Yet</h2>
              <p className="text-gray-400 mb-8">
                Start adding vehicles to your favorites to compare and save them for later
              </p>
              <Link href="/inventory">
                <button className="bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all">
                  Browse Inventory
                </button>
              </Link>
            </div>
          ) : (
            <>
              {/* Summary Bar */}
              <div className="bg-gray-900 rounded-xl p-6 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <p className="text-gray-400 text-sm">Total Value</p>
                  <p className="text-3xl font-bold text-red-500">
                    ${totalValue.toLocaleString()}
                  </p>
                </div>
                <div className="flex gap-4">
                  {cartItems.length >= 2 && (
                    <button
                      onClick={() => setShowComparison(!showComparison)}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                    >
                      <GitCompare className="w-5 h-5" />
                      {showComparison ? 'Hide' : 'Compare'}
                    </button>
                  )}
                  <button
                    onClick={clearCart}
                    className="px-6 py-3 border-2 border-red-500 rounded-lg font-semibold hover:bg-red-500 transition-all"
                  >
                    Clear All
                  </button>
                  <Link href="/contact">
                    <button className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all">
                      Contact Sales
                    </button>
                  </Link>
                </div>
              </div>

              {/* Comparison Table */}
              {showComparison && cartItems.length >= 2 && (
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">
                    Vehicle <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Comparison</span>
                  </h2>
                  <ComparisonTable cars={cartItems} />
                </div>
              )}

              {/* Favorites Grid */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Saved <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Vehicles</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cartItems.map((car) => (
                    <div
                      key={car.id}
                      className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 group"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <button
                          onClick={() => removeFromCart(car.id)}
                          className="absolute top-4 right-4 bg-red-600 p-2 rounded-full hover:bg-red-700 transition-all"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
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
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}