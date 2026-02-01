// app/inventory/[id]/page.tsx
"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { useCart } from "@/contexts/CartContext";
import { allCars } from "@/lib/data";
import { ArrowLeft, Calendar, Check, Heart, Mail, Phone } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CarDetailPage() {
	const params = useParams();
	const router = useRouter();
	const [activeTab, setActiveTab] = useState<
		"overview" | "features" | "contact"
	>("overview");

	// Cart/Favorites functionality
	const { addToCart, removeFromCart, isInCart } = useCart();

	// Find car from allCars instead of just featuredCars
	const car = allCars.find((c) => c.id === Number(params.id));

	if (!car) {
		return (
			<div className='min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white'>
				<Navbar />
				<div className='flex items-center justify-center min-h-screen'>
					<div className='text-center'>
						<h1 className='text-4xl font-bold mb-4'>Vehicle Not Found</h1>
						<button
							onClick={() => router.push("/inventory")}
							className='px-6 py-3 bg-gradient-to-r from-sauki-orange to-sauki-orange-dark text-white rounded-lg font-semibold'
						>
							Back to Inventory
						</button>
					</div>
				</div>
				<Footer />
			</div>
		);
	}

	const inCart = isInCart(car.id);

	const handleFavoriteClick = () => {
		if (inCart) {
			removeFromCart(car.id);
		} else {
			addToCart(car);
		}
	};

	// Format price - handle both string and number
	const formatPrice = (price: string | number): string => {
		if (typeof price === "string") {
			return price;
		}
		return `₦${(price / 1000000).toFixed(1)}M`;
	};

	// Format mileage - handle both string and number
	const formatMileage = (mileage: string | number): string => {
		if (typeof mileage === "string") {
			return mileage;
		}
		return `${mileage.toLocaleString()} km`;
	};

	return (
		<div className='min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white'>
			<Navbar />

			<div className='pt-24 pb-12'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					{/* Back Button */}
					<button
						onClick={() => router.back()}
						className='flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors'
					>
						<ArrowLeft className='w-5 h-5' />
						<span>Back to Inventory</span>
					</button>

					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
						{/* Image */}
						<div>
							<div className='relative h-96 lg:h-full rounded-2xl overflow-hidden'>
								<img
									src={car.image}
									alt={car.name}
									className='w-full h-full object-cover'
								/>
								{car.featured && (
									<div className='absolute top-4 right-4 bg-sauki-orange text-white px-4 py-2 rounded-full font-semibold'>
										Featured
									</div>
								)}
							</div>
						</div>

						{/* Details */}
						<div>
							<h1 className='text-4xl md:text-5xl font-bold mb-4'>
								{car.name}
							</h1>
							<p className='text-5xl font-bold text-sauki-orange mb-6'>
								{formatPrice(car.price)}
							</p>

							{/* Tabs */}
							<div className='flex gap-4 mb-8 border-b border-gray-200 dark:border-gray-800'>
								{(["overview", "features", "contact"] as const).map((tab) => (
									<button
										key={tab}
										onClick={() => setActiveTab(tab)}
										className={`pb-4 px-2 font-semibold capitalize transition-colors relative ${
											activeTab === tab
												? "text-gray-900 dark:text-white"
												: "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
										}`}
									>
										{tab}
										{activeTab === tab && (
											<div className='absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sauki-orange to-sauki-orange-dark'></div>
										)}
									</button>
								))}
							</div>

							{/* Tab Content */}
							<div className='space-y-6'>
								{activeTab === "overview" && (
									<div>
										<h3 className='text-2xl font-bold mb-4'>
											Vehicle Overview
										</h3>
										<p className='text-gray-600 dark:text-gray-400 mb-6'>
											{car.description}
										</p>

										<div className='grid grid-cols-2 gap-4 bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800'>
											<div className='border-b border-gray-200 dark:border-gray-800 pb-3'>
												<p className='text-gray-500 dark:text-gray-400 text-sm'>
													Year
												</p>
												<p className='text-xl font-semibold'>{car.year}</p>
											</div>
											<div className='border-b border-gray-200 dark:border-gray-800 pb-3'>
												<p className='text-gray-500 dark:text-gray-400 text-sm'>
													Mileage
												</p>
												<p className='text-xl font-semibold'>
													{formatMileage(car.mileage)}
												</p>
											</div>
											<div className='border-b border-gray-200 dark:border-gray-800 pb-3'>
												<p className='text-gray-500 dark:text-gray-400 text-sm'>
													Transmission
												</p>
												<p className='text-xl font-semibold'>
													{car.transmission}
												</p>
											</div>
											<div className='border-b border-gray-200 dark:border-gray-800 pb-3'>
												<p className='text-gray-500 dark:text-gray-400 text-sm'>
													Fuel Type
												</p>
												<p className='text-xl font-semibold'>{car.fuel}</p>
											</div>
											<div>
												<p className='text-gray-500 dark:text-gray-400 text-sm'>
													Brand
												</p>
												<p className='text-xl font-semibold'>{car.brand}</p>
											</div>
											<div>
												<p className='text-gray-500 dark:text-gray-400 text-sm'>
													Model
												</p>
												<p className='text-xl font-semibold'>{car.model}</p>
											</div>
										</div>
									</div>
								)}

								{activeTab === "features" && (
									<div>
										<h3 className='text-2xl font-bold mb-4'>
											Features & Options
										</h3>
										{car.features && car.features.length > 0 ? (
											<div className='space-y-3'>
												{car.features.map((feature, idx) => (
													<div
														key={idx}
														className='flex items-center gap-3 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-800'
													>
														<div className='bg-green-500/20 p-2 rounded-full'>
															<Check className='w-5 h-5 text-green-500' />
														</div>
														<span className='text-lg'>{feature}</span>
													</div>
												))}
											</div>
										) : (
											<p className='text-gray-600 dark:text-gray-400'>
												Contact us for a complete list of features for this
												vehicle.
											</p>
										)}
									</div>
								)}

								{activeTab === "contact" && (
									<div>
										<h3 className='text-2xl font-bold mb-4'>Contact Us</h3>
										<p className='text-gray-600 dark:text-gray-400 mb-6'>
											Interested in this vehicle? Get in touch with our sales
											team.
										</p>

										<div className='space-y-4'>
											<a
												href='tel:+2348012345678'
												className='flex items-center gap-4 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-sauki-orange transition-colors'
											>
												<Phone className='w-6 h-6 text-sauki-orange' />
												<div>
													<p className='font-semibold'>Call Us</p>
													<p className='text-gray-600 dark:text-gray-400'>
														+234 801 234 5678
													</p>
												</div>
											</a>

											<a
												href='mailto:sales@saukicars.com'
												className='flex items-center gap-4 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-sauki-orange transition-colors'
											>
												<Mail className='w-6 h-6 text-sauki-orange' />
												<div>
													<p className='font-semibold'>Email Us</p>
													<p className='text-gray-600 dark:text-gray-400'>
														sales@saukicars.com
													</p>
												</div>
											</a>

											<button className='w-full flex items-center justify-center gap-4 bg-gradient-to-r from-sauki-orange to-sauki-orange-dark text-white p-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-sauki-orange/50 transition-all'>
												<Calendar className='w-6 h-6' />
												<span>Schedule Test Drive</span>
											</button>
										</div>
									</div>
								)}
							</div>

							{/* Action Buttons */}
							<div className='mt-8 flex gap-4'>
								<button className='flex-1 bg-gradient-to-r from-sauki-orange to-sauki-orange-dark text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-sauki-orange/50 transition-all'>
									Make an Offer
								</button>
								<button
									onClick={handleFavoriteClick}
									className={`flex-1 border-2 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
										inCart
											? "border-sauki-orange bg-sauki-orange text-white"
											: "border-sauki-orange text-sauki-orange hover:bg-sauki-orange hover:text-white"
									}`}
								>
									<Heart
										className={`w-5 h-5 ${inCart ? "fill-current" : ""}`}
									/>
									{inCart ? "Saved" : "Save Vehicle"}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
