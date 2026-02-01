"use client";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CarCard from "@/components/sections/CarCard";
import {
  Calendar,
  ChevronDown,
  DollarSign,
  Fuel,
  Gauge,
  Grid3x3,
  List,
  Phone,
  Search,
  SlidersHorizontal,
  TrendingUp,
  X,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Inventory() {
	const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
	const [showFilters, setShowFilters] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	// Sample filters (you'll replace with actual data)
	const [filters, setFilters] = useState({
		make: "",
		model: "",
		yearMin: "",
		yearMax: "",
		priceMin: "",
		priceMax: "",
		bodyType: "",
		transmission: "",
		fuelType: "",
		condition: "",
		mileageMax: "",
	});

	// Sample car data (replace with actual data from your backend)
	const allCars = [
		{
			id: 1,
			make: "Toyota",
			model: "Camry",
			year: 2022,
			price: 18500000,
			mileage: 25000,
			transmission: "Automatic",
			fuelType: "Petrol",
			bodyType: "Sedan",
			condition: "Foreign Used",
			image:
				"https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800",
			featured: true,
		},
		{
			id: 2,
			make: "Mercedes-Benz",
			model: "GLE 450",
			year: 2021,
			price: 45000000,
			mileage: 18000,
			transmission: "Automatic",
			fuelType: "Petrol",
			bodyType: "SUV",
			condition: "Foreign Used",
			image:
				"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
			featured: true,
		},
		{
			id: 3,
			make: "Honda",
			model: "Accord",
			year: 2023,
			price: 22000000,
			mileage: 5000,
			transmission: "Automatic",
			fuelType: "Hybrid",
			bodyType: "Sedan",
			condition: "Brand New",
			image:
				"https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800",
			featured: false,
		},
		// Add more cars as needed
	];

	const makes = ["Toyota", "Honda", "Mercedes-Benz", "BMW", "Lexus", "Nissan"];
	const bodyTypes = ["Sedan", "SUV", "Truck", "Coupe", "Hatchback", "Van"];
	const transmissions = ["Automatic", "Manual"];
	const fuelTypes = ["Petrol", "Diesel", "Hybrid", "Electric"];
	const conditions = ["Brand New", "Foreign Used", "Nigerian Used"];

	const sortOptions = [
		{ value: "newest", label: "Newest First" },
		{ value: "price-low", label: "Price: Low to High" },
		{ value: "price-high", label: "Price: High to Low" },
		{ value: "year-new", label: "Year: Newest" },
		{ value: "mileage-low", label: "Mileage: Lowest" },
	];

	const quickFilters = [
		{ label: "All Cars", value: "all", active: true },
		{ label: "Brand New", value: "new", active: false },
		{ label: "Foreign Used", value: "foreign", active: false },
		{ label: "SUVs", value: "suv", active: false },
		{ label: "Sedans", value: "sedan", active: false },
		{ label: "Under ₦15M", value: "under15m", active: false },
	];

	return (
		<div className='min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white'>
			<Navbar />

			{/* Hero Section */}
			<section className='relative py-16 bg-gradient-to-br from-sauki-navy via-sauki-navy-light to-sauki-navy'>
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

				<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-8'>
						<h1 className='text-4xl md:text-5xl font-bold mb-4 text-white'>
							Browse Our <span className='text-sauki-orange'>Inventory</span>
						</h1>
						<p className='text-xl text-gray-200'>
							Find your perfect vehicle from our extensive collection
						</p>
					</div>

					{/* Search Bar */}
					<div className='max-w-4xl mx-auto'>
						<div className='bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl'>
							<div className='flex flex-col md:flex-row gap-4'>
								<div className='flex-1 relative'>
									<Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
									<input
										type='text'
										placeholder='Search by make, model, or keyword...'
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)}
										className='w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sauki-orange text-gray-900 dark:text-white'
									/>
								</div>
								<button
									onClick={() => setShowFilters(!showFilters)}
									className='flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-6 py-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all'
								>
									<SlidersHorizontal className='w-5 h-5' />
									<span className='font-semibold'>Filters</span>
								</button>
								<button className='bg-gradient-to-r from-sauki-orange to-sauki-orange-dark px-8 py-4 rounded-xl font-semibold text-white hover:shadow-lg transition-all'>
									Search
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Quick Filters */}
			<section className='py-6 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex flex-wrap gap-3'>
						{quickFilters.map((filter, idx) => (
							<button
								key={idx}
								className={`px-6 py-2 rounded-full font-medium transition-all ${
									filter.active
										? "bg-sauki-orange text-white shadow-lg"
										: "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-sauki-orange"
								}`}
							>
								{filter.label}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Advanced Filters Panel */}
			{showFilters && (
				<section className='py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800'>
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='flex justify-between items-center mb-6'>
							<h3 className='text-xl font-bold'>Advanced Filters</h3>
							<button
								onClick={() => setShowFilters(false)}
								className='text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
							>
								<X className='w-6 h-6' />
							</button>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
							{/* Make */}
							<div>
								<label className='block text-sm font-medium mb-2'>Make</label>
								<select className='w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sauki-orange'>
									<option value=''>All Makes</option>
									{makes.map((make) => (
										<option key={make} value={make}>
											{make}
										</option>
									))}
								</select>
							</div>

							{/* Body Type */}
							<div>
								<label className='block text-sm font-medium mb-2'>
									Body Type
								</label>
								<select className='w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sauki-orange'>
									<option value=''>All Types</option>
									{bodyTypes.map((type) => (
										<option key={type} value={type}>
											{type}
										</option>
									))}
								</select>
							</div>

							{/* Condition */}
							<div>
								<label className='block text-sm font-medium mb-2'>
									Condition
								</label>
								<select className='w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sauki-orange'>
									<option value=''>All Conditions</option>
									{conditions.map((condition) => (
										<option key={condition} value={condition}>
											{condition}
										</option>
									))}
								</select>
							</div>

							{/* Transmission */}
							<div>
								<label className='block text-sm font-medium mb-2'>
									Transmission
								</label>
								<select className='w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sauki-orange'>
									<option value=''>All Types</option>
									{transmissions.map((trans) => (
										<option key={trans} value={trans}>
											{trans}
										</option>
									))}
								</select>
							</div>

							{/* Year Range */}
							<div>
								<label className='block text-sm font-medium mb-2'>
									Year From
								</label>
								<input
									type='number'
									placeholder='2015'
									className='w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sauki-orange'
								/>
							</div>

							<div>
								<label className='block text-sm font-medium mb-2'>
									Year To
								</label>
								<input
									type='number'
									placeholder='2024'
									className='w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sauki-orange'
								/>
							</div>

							{/* Price Range */}
							<div>
								<label className='block text-sm font-medium mb-2'>
									Min Price (₦)
								</label>
								<input
									type='number'
									placeholder='5,000,000'
									className='w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sauki-orange'
								/>
							</div>

							<div>
								<label className='block text-sm font-medium mb-2'>
									Max Price (₦)
								</label>
								<input
									type='number'
									placeholder='50,000,000'
									className='w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-sauki-orange'
								/>
							</div>
						</div>

						<div className='flex gap-4 mt-6'>
							<button className='bg-sauki-orange text-white px-8 py-3 rounded-xl font-semibold hover:bg-sauki-orange-dark transition-all'>
								Apply Filters
							</button>
							<button className='border-2 border-gray-300 dark:border-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all'>
								Reset Filters
							</button>
						</div>
					</div>
				</section>
			)}

			{/* Results Bar */}
			<section className='py-6 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex flex-col md:flex-row justify-between items-center gap-4'>
						<div>
							<p className='text-gray-600 dark:text-gray-400'>
								Showing{" "}
								<span className='font-bold text-gray-900 dark:text-white'>
									36
								</span>{" "}
								of{" "}
								<span className='font-bold text-gray-900 dark:text-white'>
									152
								</span>{" "}
								vehicles
							</p>
						</div>

						<div className='flex items-center gap-4'>
							<div className='flex items-center gap-2'>
								<span className='text-sm text-gray-600 dark:text-gray-400'>
									Sort by:
								</span>
								<select className='px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sauki-orange'>
									{sortOptions.map((option) => (
										<option key={option.value} value={option.value}>
											{option.label}
										</option>
									))}
								</select>
							</div>

							<div className='flex gap-2 border border-gray-200 dark:border-gray-700 rounded-lg p-1'>
								<button
									onClick={() => setViewMode("grid")}
									className={`p-2 rounded ${
										viewMode === "grid"
											? "bg-sauki-orange text-white"
											: "text-gray-600 dark:text-gray-400"
									}`}
								>
									<Grid3x3 className='w-5 h-5' />
								</button>
								<button
									onClick={() => setViewMode("list")}
									className={`p-2 rounded ${
										viewMode === "list"
											? "bg-sauki-orange text-white"
											: "text-gray-600 dark:text-gray-400"
									}`}
								>
									<List className='w-5 h-5' />
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Inventory Grid/List */}
			<section className='py-12 bg-gray-50 dark:bg-gray-900'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div
						className={
							viewMode === "grid"
								? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
								: "space-y-6"
						}
					>
						{allCars.map((car) => (
							<CarCard key={car.id} car={car} viewMode={viewMode} />
						))}
					</div>

					{/* Pagination */}
					<div className='mt-12 flex justify-center'>
						<div className='flex gap-2'>
							<button className='px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all'>
								Previous
							</button>
							<button className='px-4 py-2 bg-sauki-orange text-white rounded-lg'>
								1
							</button>
							<button className='px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all'>
								2
							</button>
							<button className='px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all'>
								3
							</button>
							<button className='px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all'>
								Next
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className='py-20 bg-gradient-to-r from-sauki-orange to-sauki-orange-dark relative overflow-hidden'>
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

				<div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold mb-4 text-white'>
							Can't Find What You're Looking For?
						</h2>
						<p className='text-lg text-white/90 max-w-2xl mx-auto'>
							Get in touch with our sales team. We're here to help you find your
							perfect vehicle!
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
						{/* Phone */}
						<a
							href='tel:+2348012345678'
							className='bg-white/95 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white hover:scale-105 transition-all shadow-xl group'
						>
							<div className='w-16 h-16 bg-sauki-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sauki-orange/20 transition-all'>
								<Phone className='w-8 h-8 text-sauki-orange' />
							</div>
							<h3 className='font-bold text-gray-900 mb-2'>Call Us</h3>
							<p className='text-sauki-orange font-semibold text-sm'>
								+234 801 234 5678
							</p>
							<p className='text-gray-600 text-xs mt-1'>Mon-Sat: 8AM - 6PM</p>
						</a>

						{/* WhatsApp */}
						<a
							href='https://wa.me/2348012345678'
							target='_blank'
							rel='noopener noreferrer'
							className='bg-white/95 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white hover:scale-105 transition-all shadow-xl group'
						>
							<div className='w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-all'>
								<svg
									className='w-8 h-8 text-green-500'
									fill='currentColor'
									viewBox='0 0 24 24'
								>
									<path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' />
								</svg>
							</div>
							<h3 className='font-bold text-gray-900 mb-2'>WhatsApp</h3>
							<p className='text-green-500 font-semibold text-sm'>
								Chat with us
							</p>
							<p className='text-gray-600 text-xs mt-1'>Fast Response</p>
						</a>

						{/* Email */}
						<a
							href='mailto:sales@saukicars.com'
							className='bg-white/95 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white hover:scale-105 transition-all shadow-xl group'
						>
							<div className='w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-all'>
								<svg
									className='w-8 h-8 text-blue-500'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
									/>
								</svg>
							</div>
							<h3 className='font-bold text-gray-900 mb-2'>Email Us</h3>
							<p className='text-blue-500 font-semibold text-sm'>
								sales@saukicars.com
							</p>
							<p className='text-gray-600 text-xs mt-1'>24hr Response</p>
						</a>

						{/* Instagram */}
						<a
							href='https://instagram.com/saukicars'
							target='_blank'
							rel='noopener noreferrer'
							className='bg-white/95 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white hover:scale-105 transition-all shadow-xl group'
						>
							<div className='w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-500/20 transition-all'>
								<svg
									className='w-8 h-8 text-pink-500'
									fill='currentColor'
									viewBox='0 0 24 24'
								>
									<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
								</svg>
							</div>
							<h3 className='font-bold text-gray-900 mb-2'>Instagram</h3>
							<p className='text-pink-500 font-semibold text-sm'>@saukicars</p>
							<p className='text-gray-600 text-xs mt-1'>Follow Us</p>
						</a>
					</div>

					<div className='text-center'>
						<p className='text-white/90 mb-6'>
							Or visit our showroom at:{" "}
							<span className='font-bold'>
								123 Cadastral Zone, Abuja FCT, Nigeria
							</span>
						</p>
						<Link href='/sell'>
							<button className='bg-white text-sauki-orange px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all shadow-xl inline-flex items-center gap-2'>
								Sell Your Car
								<svg
									className='w-5 h-5'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M9 5l7 7-7 7'
									/>
								</svg>
							</button>
						</Link>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
