"use client";
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import CarCard from '@/components/sections/CarCard';
import { featuredCars, features } from '@/lib/data';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80"
            alt="Luxury car"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Animated grid overlay */}
        <div className="absolute inset-0 z-10 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your Dream Car
              <br />
              <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent animate-gradient">
                Awaits You
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover premium vehicles, expert service, and unmatched deals. 
              Your journey to automotive excellence starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/inventory">
                <button className="group bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-red-500/50 transition-all transform hover:scale-105 flex items-center justify-center">
                  Browse Inventory
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/sell">
                <button className="border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all transform hover:scale-105">
                  Sell Your Car
                </button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            {[
              { label: 'Cars Sold', value: '5000+' },
              { label: 'Happy Clients', value: '3500+' },
              { label: 'Expert Staff', value: '50+' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Inventory Section */}
      <section id="inventory" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Vehicles</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore our handpicked selection of premium vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/inventory">
              <button className="border-2 border-red-500 px-8 py-3 rounded-full font-semibold hover:bg-red-500 transition-all transform hover:scale-105">
                View All Inventory
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">SaukiCARS</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience the difference with our premium service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-b from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-red-500/50 transition-all transform hover:scale-105">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Find Your Dream Car?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who found their perfect vehicle with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inventory">
              <button className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
                Browse Inventory
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-red-600 transition-all transform hover:scale-105">
                Schedule a Test Drive
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}