"use client";
import { Car, ChevronRight, Facebook, Instagram, Mail, MapPin, Menu, Phone, Twitter, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

const CarLandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: 'Inventory', href: '#inventory' },
    { label: 'Buy', href: '#buy' },
    { label: 'Sell', href: '#sell' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer group">
             
              <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                SaukiCars
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <button className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-red-500/50 transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/98 backdrop-blur-lg">
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-900 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="w-full bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition-all">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

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
              <button className="group bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-red-500/50 transition-all transform hover:scale-105 flex items-center justify-center">
                Browse Inventory
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all transform hover:scale-105">
                Sell Your Car
              </button>
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
            {[
              {
                id: 1,
                name: '2024 Porsche 911',
                price: '$125,000',
                image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
                year: 2024,
                mileage: '1,200 mi',
                transmission: 'Automatic',
                fuel: 'Premium'
              },
              {
                id: 2,
                name: '2023 BMW M4',
                price: '$89,500',
                image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
                year: 2023,
                mileage: '8,500 mi',
                transmission: 'Manual',
                fuel: 'Premium'
              },
              {
                id: 3,
                name: '2024 Mercedes AMG GT',
                price: '$145,000',
                image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
                year: 2024,
                mileage: '2,100 mi',
                transmission: 'Automatic',
                fuel: 'Premium'
              }
            ].map((car) => (
              <div key={car.id} className="group bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-red-500/50">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
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
                  <button className="w-full bg-gradient-to-r from-red-600 to-orange-500 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-red-500 px-8 py-3 rounded-full font-semibold hover:bg-red-500 transition-all transform hover:scale-105">
              View All Inventory
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">AutoElite</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience the difference with our premium service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
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
            ].map((feature, idx) => (
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
            <button className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Browse Inventory
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-red-600 transition-all transform hover:scale-105">
              Schedule a Test Drive
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-red-600 to-orange-500 p-2 rounded-lg">
                  <Car className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold">SaukiCars</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Your trusted partner in finding the perfect vehicle. Quality, service, and excellence.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="bg-gray-800 p-2 rounded-full hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-500 transition-all transform hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About Us', 'Inventory', 'Financing', 'Trade-In', 'Testimonials'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {['Buy a Car', 'Sell Your Car', 'Car Maintenance', 'Insurance', 'Warranty'].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-gray-400 text-sm">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-500" />
                  <span>Sultan road, Kaduna , CC 12345</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400 text-sm">
                  <Phone className="w-5 h-5 flex-shrink-0 text-red-500" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400 text-sm">
                  <Mail className="w-5 h-5 flex-shrink-0 text-red-500" />
                  <span>SAUKICARS.NIGERIA@GMAIL.COM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 AutoElite. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

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
};

export default CarLandingPage;