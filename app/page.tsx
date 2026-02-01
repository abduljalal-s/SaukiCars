/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CarCard from "@/components/sections/CarCard";
import { featuredCars, features } from "@/lib/data";
import {
	Award,
	ChevronRight,
	Clock,
	MapPin,
	Phone,
	Search,
	Shield,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Home() {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<div className='min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white'>
			<Navbar />

			{/* Hero Section - Premium & Clean */}
			<section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black'>
				{/* Background Image with Overlay */}
				<div className='absolute inset-0 z-0'>
					<div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10'></div>
					<img
						src='https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1920&q=80'
						alt='Premium luxury vehicle'
						className='w-full h-full object-cover opacity-90'
					/>
				</div>

				{/* Subtle Grid Pattern */}
				<div className='absolute inset-0 z-10 opacity-5'>
					<div
						className='absolute inset-0'
						style={{
							backgroundImage:
								"linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
							backgroundSize: "60px 60px",
						}}
					></div>
				</div>

				{/* Hero Content */}
				<div className='relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
					<div className='max-w-3xl animate-fade-in-up'>
						<div className='inline-block mb-4'>
							<span className='px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-red-600 dark:text-red-400 text-sm font-medium backdrop-blur-sm'>
								Nigeria's Trusted Car Dealership
							</span>
						</div>

						<h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
							Discover Your
							<br />
							<span className='bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent'>
								Perfect Vehicle
							</span>
						</h1>

						<p className='text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed'>
							Premium cars, transparent pricing, and exceptional service. Find
							quality vehicles you can trust at SaukiCARS.
						</p>

						{/* Search Bar */}
						<div className='bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl mb-8'>
							<div className='flex flex-col md:flex-row gap-4'>
								<div className='flex-1 relative'>
									<Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
									<input
										type='text'
										placeholder='Search by make, model, or keyword...'
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)}
										className='w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 dark:text-white'
									/>
								</div>
								<Link href='/inventory'>
									<button className='w-full md:w-auto bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-red-500/30 transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-white'>
										Search Cars
										<ChevronRight className='w-5 h-5' />
									</button>
								</Link>
							</div>
						</div>

						{/* CTA Buttons */}
						<div className='flex flex-col sm:flex-row gap-4'>
							<Link href='/inventory' className='flex-1 sm:flex-initial'>
								<button className='w-full group bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-700'>
									Browse Inventory
									<ChevronRight className='group-hover:translate-x-1 transition-transform w-5 h-5' />
								</button>
							</Link>
							<Link href='/sell' className='flex-1 sm:flex-initial'>
								<button className='w-full border-2 border-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105'>
									Sell Your Car
								</button>
							</Link>
						</div>
					</div>

					{/* Trust Indicators */}
					<div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl'>
						{[
							{
								icon: <Shield className='w-8 h-8' />,
								label: "Verified",
								value: "100%",
							},
							{
								icon: <Award className='w-8 h-8' />,
								label: "Cars Sold",
								value: "5,000+",
							},
							{
								icon: <Phone className='w-8 h-8' />,
								label: "Happy Clients",
								value: "3,500+",
							},
							{
								icon: <MapPin className='w-8 h-8' />,
								label: "Locations",
								value: "2",
							},
						].map((stat, idx) => (
							<div
								key={idx}
								className='bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all'
							>
								<div className='flex justify-center mb-3 text-red-500'>
									{stat.icon}
								</div>
								<div className='text-3xl font-bold text-white mb-1'>
									{stat.value}
								</div>
								<div className='text-gray-300 text-sm'>{stat.label}</div>
							</div>
						))}
					</div>
				</div>

				{/* Scroll Indicator */}
				<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce'>
					<div className='w-6 h-10 border-2 border-white/50 rounded-full flex justify-center'>
						<div className='w-1 h-3 bg-white rounded-full mt-2 animate-pulse'></div>
					</div>
				</div>
			</section>

			{/* Quick Services Bar */}
			<section className='bg-gray-900 dark:bg-black py-8 border-b border-gray-800'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{[
							{
								icon: <Clock className='w-6 h-6' />,
								title: "Open Hours",
								desc: "Mon-Sat: 8AM - 6PM",
							},
							{
								icon: <Phone className='w-6 h-6' />,
								title: "Call Us",
								desc: "+234 XXX XXX XXXX",
							},
							{
								icon: <MapPin className='w-6 h-6' />,
								title: "Visit Us",
								desc: "Abuja, Nigeria",
							},
						].map((item, idx) => (
							<div key={idx} className='flex items-center gap-4 text-white'>
								<div className='bg-red-600/20 p-3 rounded-lg text-red-500'>
									{item.icon}
								</div>
								<div>
									<div className='font-semibold'>{item.title}</div>
									<div className='text-gray-400 text-sm'>{item.desc}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Featured Inventory Section */}
			<section className='py-20 bg-white dark:bg-black'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<span className='px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-red-600 text-sm font-medium inline-block mb-4'>
							Our Collection
						</span>
						<h2 className='text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white'>
							Featured{" "}
							<span className='bg-linear-to-r from-red-600 to-orange-500 bg-clip-text text-transparent'>
								Vehicles
							</span>
						</h2>
						<p className='text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto'>
							Handpicked premium vehicles inspected and certified for your peace
							of mind
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{featuredCars.map((car) => (
							<CarCard key={car.id} car={car} />
						))}
					</div>

					<div className='text-center mt-12'>
						<Link href='/inventory'>
							<button className='group border-2 border-red-600 text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-600 hover:text-white transition-all transform hover:scale-105 inline-flex items-center gap-2'>
								View Full Inventory
								<ChevronRight className='group-hover:translate-x-1 transition-transform w-5 h-5' />
							</button>
						</Link>
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className='py-20 bg-gray-50 dark:bg-gray-900'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<span className='px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-red-600 text-sm font-medium inline-block mb-4'>
							Why SaukiCARS
						</span>
						<h2 className='text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white'>
							Your Trusted{" "}
							<span className='bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent'>
								Car Partner
							</span>
						</h2>
						<p className='text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto'>
							We go beyond just selling cars - we build lasting relationships
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{features.map((feature, idx) => (
							<div
								key={idx}
								className='bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-red-500 hover:shadow-xl transition-all transform hover:-translate-y-2 group'
							>
								<div className='text-5xl mb-6 group-hover:scale-110 transition-transform'>
									{feature.icon}
								</div>
								<h3 className='text-xl font-bold mb-3 text-gray-900 dark:text-white'>
									{feature.title}
								</h3>
								<p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className='py-20 bg-white dark:bg-black'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<span className='px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-red-600 text-sm font-medium inline-block mb-4'>
							Testimonials
						</span>
						<h2 className='text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white'>
							What Our{" "}
							<span className='bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent'>
								Clients Say
							</span>
						</h2>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{[
							{
								name: "Chukwudi Okonkwo",
								role: "Business Owner",
								text: "Exceptional service! Found my dream car within my budget. The team was professional and transparent throughout.",
								rating: 5,
							},
							{
								name: "Amina Mohammed",
								role: "Entrepreneur",
								text: "Best car buying experience in Abuja. No hidden fees, just honest dealing. Highly recommend SaukiCARS!",
								rating: 5,
							},
							{
								name: "Tunde Adeyemi",
								role: "Engineer",
								text: "Quality cars and excellent customer service. They made the entire process smooth and stress-free.",
								rating: 5,
							},
						].map((testimonial, idx) => (
							<div
								key={idx}
								className='bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700'
							>
								<div className='flex mb-4'>
									{[...Array(testimonial.rating)].map((_, i) => (
										<span key={i} className='text-yellow-400 text-xl'>
											★
										</span>
									))}
								</div>
								<p className='text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed'>
									{testimonial.text}
								</p>
								<div>
									<div className='font-bold text-gray-900 dark:text-white'>
										{testimonial.name}
									</div>
									<div className='text-gray-500 text-sm'>
										{testimonial.role}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-20 bg-gradient-to-r from-red-600 to-orange-500 relative overflow-hidden'>
				<div className='absolute inset-0 opacity-10'>
					<div
						className='absolute inset-0'
						style={{
							backgroundImage:
								"linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
							backgroundSize: "50px 50px",
						}}
					></div>
				</div>

				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
					<h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
						Ready to Drive Your Dream Car?
					</h2>
					<p className='text-xl mb-10 text-white/90 max-w-2xl mx-auto'>
						Join thousands of satisfied customers who found their perfect
						vehicle with us. Start your journey today!
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link href='/inventory'>
							<button className='bg-white text-red-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl'>
								Browse Inventory
							</button>
						</Link>
						<Link href='/contact'>
							<button className='border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-red-600 transition-all transform hover:scale-105'>
								Contact Us Today
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

				.animate-fade-in-up {
					animation: fade-in-up 1s ease-out;
				}
			`}</style>
		</div>
	);
}
