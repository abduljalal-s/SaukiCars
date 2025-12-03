/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
// app/contact/page.tsx
'use client';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Get in <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-gray-300 text-lg">We're here to help you find your dream car</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-400">
                  Get in touch with us today. We're ready to help you with any questions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-red-600 to-orange-500 p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-400">123 Auto Street<br />Car City, CC 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-red-600 to-orange-500 p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-red-600 to-orange-500 p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">info@autoelite.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-red-600 to-orange-500 p-3 rounded-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-400">
                      Mon - Fri: 9:00 AM - 7:00 PM<br />
                      Sat: 10:00 AM - 6:00 PM<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                
                {submitted && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-500">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="buy">Buy a Vehicle</option>
                        <option value="sell">Sell My Vehicle</option>
                        <option value="service">Service Question</option>
                        <option value="financing">Financing Options</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-orange-500 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}