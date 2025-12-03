// app/buy/page.tsx
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import React from 'react';

export default function BuyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Buy a <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Vehicle</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Financing options and buying guide coming soon!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}