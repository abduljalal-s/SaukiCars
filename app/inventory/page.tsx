/* eslint-disable @next/next/no-img-element */
// app/inventory/page.tsx
'use client';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import CarCard from '@/components/sections/CarCard';
import { featuredCars } from '@/lib/data';
import { Car } from '@/types';
import { Search, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedTransmission, setSelectedTransmission] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique brands
  const brands = useMemo(() => {
    const uniqueBrands = Array.from(new Set(featuredCars.map(car => car.brand)));
    return ['all', ...uniqueBrands];
  }, []);

  // Filter cars
  const filteredCars = useMemo(() => {
    return featuredCars.filter((car: Car) => {
      const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           car.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand = selectedBrand === 'all' || car.brand === selectedBrand;
      const matchesTransmission = selectedTransmission === 'all' || car.transmission === selectedTransmission;
      
      let matchesPrice = true;
      if (priceRange !== 'all') {
        const price = car.priceNumeric;
        if (priceRange === 'under-50k') matchesPrice = price < 50000;
        else if (priceRange === '50k-100k') matchesPrice = price >= 50000 && price < 100000;
        else if (priceRange === '100k-150k') matchesPrice = price >= 100000 && price < 150000;
        else if (priceRange === 'over-150k') matchesPrice = price >= 150000;
      }

      return matchesSearch && matchesBrand && matchesTransmission && matchesPrice;
    });
  }, [searchTerm, selectedBrand, selectedTransmission, priceRange]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80"
            alt="Car inventory"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Inventory</span>
          </h1>
          <p className="text-gray-300 text-lg">Find your perfect vehicle from our premium collection</p>
        </div>
      </section>
      
      {/* Search and Filters */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by make or model..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg hover:border-red-500 transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-6 p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Brand Filter */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Brand</label>
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                  >
                    {brands.map((brand) => (
                      <option key={brand} value={brand}>
                        {brand === 'all' ? 'All Brands' : brand}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Transmission Filter */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Transmission</label>
                  <select
                    value={selectedTransmission}
                    onChange={(e) => setSelectedTransmission(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                  >
                    <option value="all">All Types</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-semibold mb-2">Price Range</label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                  >
                    <option value="all">All Prices</option>
                    <option value="under-50k">Under $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-150k">$100,000 - $150,000</option>
                    <option value="over-150k">Over $150,000</option>
                  </select>
                </div>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedBrand('all');
                  setSelectedTransmission('all');
                  setPriceRange('all');
                }}
                className="mt-4 text-red-500 hover:text-red-400 text-sm font-semibold"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-400">
              Showing <span className="text-white font-semibold">{filteredCars.length}</span> vehicles
            </p>
          </div>

          {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">No vehicles match your criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedBrand('all');
                  setSelectedTransmission('all');
                  setPriceRange('all');
                }}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}