// components/sections/CarCard.tsx
"use client";
import { useCart } from "@/contexts/CartContext";
import { Car } from "@/types";
import {
	Calendar,
	Fuel as FuelIcon,
	Gauge,
	Heart,
	Settings,
} from "lucide-react";
import Link from "next/link";
import React from "react";

interface CarCardProps {
	car: Car;
	viewMode?: "grid" | "list";
}

export default function CarCard({ car, viewMode = "grid" }: CarCardProps) {
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

	// Format price - handle both string and number
	const formatPrice = (price: string | number): string => {
		if (typeof price === "string") {
			return price; // Already formatted
		}
		return `₦${(price / 1000000).toFixed(1)}M`;
	};

	// Format mileage - handle both string and number
	const formatMileage = (mileage: string | number): string => {
		if (typeof mileage === "string") {
			return mileage; // Already formatted
		}
		return `${mileage.toLocaleString()} km`;
	};

	if (viewMode === "list") {
		return (
			<div className='group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800'>
				<div className='flex flex-col md:flex-row'>
					<div className='relative md:w-1/3 h-64 md:h-auto overflow-hidden'>
						<img
							src={car.image}
							alt={`${car.make} ${car.model}`}
							className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
						/>
						{car.featured && (
							<div className='absolute top-4 left-4 bg-sauki-orange text-white px-3 py-1 rounded-full text-sm font-semibold'>
								Featured
							</div>
						)}
						<button
							onClick={handleFavoriteClick}
							className='absolute top-4 right-4 bg-black/60 backdrop-blur-sm p-2 rounded-full hover:bg-black/80 transition-all'
						>
							<Heart
								className={`w-6 h-6 transition-all ${
									inCart ? "fill-sauki-orange text-sauki-orange" : "text-white"
								}`}
							/>
						</button>
					</div>
					<div className='flex-1 p-6'>
						<div className='flex justify-between items-start mb-4'>
							<div>
								<h3 className='text-2xl font-bold mb-1 text-gray-900 dark:text-white'>
									{car.make} {car.model}
								</h3>
								<p className='text-sm text-gray-500 dark:text-gray-400'>
									{car.condition}
								</p>
							</div>
							<p className='text-3xl font-bold text-sauki-orange'>
								{formatPrice(car.price)}
							</p>
						</div>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-6'>
							<div className='flex items-center gap-2 text-gray-600 dark:text-gray-400'>
								<Calendar className='w-5 h-5' />
								<span className='text-sm'>{car.year}</span>
							</div>
							<div className='flex items-center gap-2 text-gray-600 dark:text-gray-400'>
								<Gauge className='w-5 h-5' />
								<span className='text-sm'>{formatMileage(car.mileage)}</span>
							</div>
							<div className='flex items-center gap-2 text-gray-600 dark:text-gray-400'>
								<Settings className='w-5 h-5' />
								<span className='text-sm'>{car.transmission}</span>
							</div>
							<div className='flex items-center gap-2 text-gray-600 dark:text-gray-400'>
								<FuelIcon className='w-5 h-5' />
								<span className='text-sm'>{car.fuelType}</span>
							</div>
						</div>
						<Link href={`/inventory/${car.id}`}>
							<button className='w-full md:w-auto bg-gradient-to-r from-sauki-orange to-sauki-orange-dark text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all'>
								View Details
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className='group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-sauki-orange/50 hover:shadow-xl'>
			<div className='relative h-64 overflow-hidden'>
				<img
					src={car.image}
					alt={`${car.make} ${car.model}`}
					className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
				/>
				{car.featured && (
					<div className='absolute top-4 left-4 bg-sauki-orange text-white px-3 py-1 rounded-full text-sm font-semibold'>
						Featured
					</div>
				)}
				<button
					onClick={handleFavoriteClick}
					className='absolute top-4 right-4 bg-black/60 backdrop-blur-sm p-2 rounded-full hover:bg-black/80 transition-all'
				>
					<Heart
						className={`w-6 h-6 transition-all ${
							inCart ? "fill-sauki-orange text-sauki-orange" : "text-white"
						}`}
					/>
				</button>
			</div>
			<div className='p-6'>
				<h3 className='text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-sauki-orange transition-colors'>
					{car.make} {car.model}
				</h3>
				<p className='text-3xl font-bold text-sauki-orange mb-4'>
					{formatPrice(car.price)}
				</p>
				<div className='grid grid-cols-2 gap-3 mb-4 text-sm text-gray-600 dark:text-gray-400'>
					<div className='flex items-center gap-2'>
						<Calendar className='w-4 h-4' />
						<span className='text-gray-900 dark:text-white'>{car.year}</span>
					</div>
					<div className='flex items-center gap-2'>
						<Gauge className='w-4 h-4' />
						<span className='text-gray-900 dark:text-white'>
							{formatMileage(car.mileage)}
						</span>
					</div>
					<div className='flex items-center gap-2'>
						<Settings className='w-4 h-4' />
						<span className='text-gray-900 dark:text-white'>
							{car.transmission}
						</span>
					</div>
					<div className='flex items-center gap-2'>
						<FuelIcon className='w-4 h-4' />
						<span className='text-gray-900 dark:text-white'>
							{car.fuelType}
						</span>
					</div>
				</div>
				<Link href={`/inventory/${car.id}`}>
					<button className='w-full bg-gradient-to-r from-sauki-orange to-sauki-orange-dark text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-sauki-orange/50 transition-all'>
						View Details
					</button>
				</Link>
			</div>
		</div>
	);
}
