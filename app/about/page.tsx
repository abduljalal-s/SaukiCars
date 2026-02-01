/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import {
    Award,
    Calendar,
    CheckCircle,
    Eye,
    Handshake,
    Heart,
    MapPin,
    Shield,
    Star,
    Target,
    TrendingUp,
    Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function About() {
	const milestones = [
		{
			year: "2019",
			title: "SaukiCARS Founded",
			description:
				"Started with a vision to revolutionize car dealership in Nigeria",
		},
		{
			year: "2020",
			title: "First 1,000 Cars Sold",
			description: "Reached our first major milestone within 12 months",
		},
		{
			year: "2022",
			title: "Expanded Services",
			description: "Added financing, insurance, and maintenance services",
		},
		{
			year: "2024",
			title: "Multiple Locations",
			description: "Opened our second showroom to serve more customers",
		},
		{
			year: "2025",
			title: "Award-Winning Dealership",
			description: "Recognized as one of Abuja's top automotive dealers",
		},
	];

	const values = [
		{
			icon: <Shield className='w-10 h-10' />,
			title: "Integrity",
			description:
				"We believe in transparent dealings and honest communication with every customer. No hidden fees, no surprises.",
		},
		{
			icon: <Heart className='w-10 h-10' />,
			title: "Customer Focus",
			description:
				"Your satisfaction is our priority. We go above and beyond to ensure you have the best car buying experience.",
		},
		{
			icon: <Award className='w-10 h-10' />,
			title: "Quality",
			description:
				"Every vehicle in our inventory is thoroughly inspected and certified. We only sell cars we'd drive ourselves.",
		},
		{
			icon: <Handshake className='w-10 h-10' />,
			title: "Trust",
			description:
				"Building long-term relationships based on trust and reliability. We're here for you even after the sale.",
		},
		{
			icon: <TrendingUp className='w-10 h-10' />,
			title: "Innovation",
			description:
				"Constantly improving our services and adopting new technologies to serve you better.",
		},
		{
			icon: <Users className='w-10 h-10' />,
			title: "Community",
			description:
				"We're proud to be part of the Abuja community and contribute to its growth and development.",
		},
	];

	const team = [
		{
			name: "Musa Ibrahim",
			role: "Chief Executive Officer",
			image: "https://randomuser.me/api/portraits/men/1.jpg",
			bio: "15+ years in automotive industry",
		},
		{
			name: "Chiamaka Okafor",
			role: "Sales Director",
			image: "https://randomuser.me/api/portraits/women/2.jpg",
			bio: "Expert in customer relations",
		},
		{
			name: "Tunde Adeyemi",
			role: "Finance Manager",
			image: "https://randomuser.me/api/portraits/men/3.jpg",
			bio: "Specialist in auto financing",
		},
		{
			name: "Fatima Hassan",
			role: "Service Manager",
			image: "https://randomuser.me/api/portraits/women/4.jpg",
			bio: "Certified automotive technician",
		},
	];

	const stats = [
		{ number: "5,000+", label: "Cars Sold" },
		{ number: "3,500+", label: "Happy Customers" },
		{ number: "50+", label: "Expert Staff" },
		{ number: "98%", label: "Satisfaction Rate" },
	];

	const achievements = [
		"Best Car Dealership Abuja 2024",
		"Customer Service Excellence Award",
		"Top Rated Dealer - Nigeria",
		"5-Star Google Reviews",
		"Certified Quality Vehicles",
		"Trusted by Thousands",
	];

	return (
		<div className='min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white'>
			<Navbar />

			{/* Hero Section */}
			<section className='relative py-20 bg-gradient-to-br from-sauki-navy via-sauki-navy-light to-sauki-navy overflow-hidden'>
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
					<div className='max-w-3xl'>
						<div className='inline-block mb-6'>
							<span className='px-4 py-2 bg-sauki-orange/20 border border-sauki-orange/30 rounded-full text-sauki-orange text-sm font-medium backdrop-blur-sm'>
								About SaukiCARS
							</span>
						</div>

						<h1 className='text-5xl md:text-6xl font-bold mb-6 text-white'>
							Driving Excellence Since{" "}
							<span className='text-sauki-orange'>2019</span>
						</h1>

						<p className='text-xl text-gray-200 leading-relaxed mb-8'>
							We're more than just a car dealership. We're your trusted partner
							in finding the perfect vehicle and maintaining it for years to
							come. Our commitment to quality, transparency, and customer
							satisfaction has made us one of Abuja's most trusted automotive
							dealers.
						</p>

						<div className='flex flex-col sm:flex-row gap-4'>
							<Link href='/inventory'>
								<button className='bg-sauki-orange hover:bg-sauki-orange-dark px-8 py-4 rounded-xl font-semibold text-white transition-all transform hover:scale-105 shadow-lg'>
									View Our Cars
								</button>
							</Link>
							<Link href='/contact'>
								<button className='border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-sauki-navy transition-all'>
									Contact Us
								</button>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className='py-16 bg-white dark:bg-gray-900'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
						{stats.map((stat, idx) => (
							<div key={idx} className='text-center'>
								<div className='text-4xl md:text-5xl font-bold text-sauki-orange mb-2'>
									{stat.number}
								</div>
								<div className='text-gray-600 dark:text-gray-400 font-medium'>
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Mission & Vision */}
			<section className='py-20 bg-gray-50 dark:bg-black'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
						<div className='bg-white dark:bg-gray-800 p-10 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-sauki-orange transition-all'>
							<div className='w-16 h-16 bg-sauki-orange/10 rounded-full flex items-center justify-center mb-6'>
								<Target className='w-8 h-8 text-sauki-orange' />
							</div>
							<h2 className='text-3xl font-bold mb-4 text-gray-900 dark:text-white'>
								Our Mission
							</h2>
							<p className='text-gray-600 dark:text-gray-400 text-lg leading-relaxed'>
								To provide exceptional automotive solutions that exceed customer
								expectations through quality vehicles, transparent pricing, and
								outstanding service. We aim to make car ownership accessible,
								affordable, and enjoyable for every Nigerian.
							</p>
						</div>

						<div className='bg-white dark:bg-gray-800 p-10 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-sauki-orange transition-all'>
							<div className='w-16 h-16 bg-sauki-orange/10 rounded-full flex items-center justify-center mb-6'>
								<Eye className='w-8 h-8 text-sauki-orange' />
							</div>
							<h2 className='text-3xl font-bold mb-4 text-gray-900 dark:text-white'>
								Our Vision
							</h2>
							<p className='text-gray-600 dark:text-gray-400 text-lg leading-relaxed'>
								To become Nigeria's most trusted and innovative automotive
								dealership, setting new standards in customer service,
								transparency, and quality. We envision a future where every
								Nigerian has access to reliable, affordable vehicles and
								exceptional automotive services.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Our Values */}
			<section className='py-20 bg-white dark:bg-gray-900'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<span className='px-4 py-2 bg-sauki-orange/10 border border-sauki-orange/20 rounded-full text-sauki-orange text-sm font-medium inline-block mb-4'>
							What Drives Us
						</span>
						<h2 className='text-4xl md:text-5xl font-bold mb-4'>
							Our Core <span className='text-sauki-orange'>Values</span>
						</h2>
						<p className='text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto'>
							These principles guide everything we do and how we serve you
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{values.map((value, idx) => (
							<div
								key={idx}
								className='bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-sauki-orange hover:shadow-xl transition-all group'
							>
								<div className='text-sauki-orange mb-6 group-hover:scale-110 transition-transform'>
									{value.icon}
								</div>
								<h3 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
									{value.title}
								</h3>
								<p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
									{value.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Our Journey */}
			<section className='py-20 bg-gray-50 dark:bg-black'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<span className='px-4 py-2 bg-sauki-orange/10 border border-sauki-orange/20 rounded-full text-sauki-orange text-sm font-medium inline-block mb-4'>
							Our Story
						</span>
						<h2 className='text-4xl md:text-5xl font-bold mb-4'>
							The <span className='text-sauki-orange'>Journey</span>
						</h2>
						<p className='text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto'>
							From humble beginnings to becoming one of Abuja's leading
							dealerships
						</p>
					</div>

					<div className='relative'>
						{/* Timeline Line */}
						<div className='hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-sauki-orange to-sauki-navy'></div>

						<div className='space-y-12'>
							{milestones.map((milestone, idx) => (
								<div
									key={idx}
									className={`flex flex-col lg:flex-row gap-8 items-center ${
										idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
									}`}
								>
									<div className='flex-1 lg:text-right'>
										{idx % 2 === 0 && (
											<div className='bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-sauki-orange transition-all'>
												<div className='flex items-center gap-3 mb-4 lg:justify-end'>
													<Calendar className='w-5 h-5 text-sauki-orange' />
													<span className='text-2xl font-bold text-sauki-orange'>
														{milestone.year}
													</span>
												</div>
												<h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
													{milestone.title}
												</h3>
												<p className='text-gray-600 dark:text-gray-400'>
													{milestone.description}
												</p>
											</div>
										)}
									</div>

									<div className='relative flex-shrink-0'>
										<div className='w-16 h-16 bg-gradient-to-br from-sauki-orange to-sauki-orange-dark rounded-full flex items-center justify-center shadow-xl'>
											<CheckCircle className='w-8 h-8 text-white' />
										</div>
									</div>

									<div className='flex-1'>
										{idx % 2 !== 0 && (
											<div className='bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-sauki-orange transition-all'>
												<div className='flex items-center gap-3 mb-4'>
													<Calendar className='w-5 h-5 text-sauki-orange' />
													<span className='text-2xl font-bold text-sauki-orange'>
														{milestone.year}
													</span>
												</div>
												<h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
													{milestone.title}
												</h3>
												<p className='text-gray-600 dark:text-gray-400'>
													{milestone.description}
												</p>
											</div>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>{/* Our Team */}
			<section className='py-20 bg-white dark:bg-gray-900'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<span className='px-4 py-2 bg-sauki-orange/10 border border-sauki-orange/20 rounded-full text-sauki-orange text-sm font-medium inline-block mb-4'>
							Meet the Team
						</span>
						<h2 className='text-4xl md:text-5xl font-bold mb-4'>
							Expert <span className='text-sauki-orange'>Leadership</span>
						</h2>
						<p className='text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto'>
							Dedicated professionals committed to your satisfaction
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{team.map((member, idx) => (
							<div
								key={idx}
								className='bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-sauki-orange hover:shadow-xl transition-all group'
							>
								<div className='aspect-square overflow-hidden'>
									<img
										src={member.image}
										alt={member.name}
										className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
									/>
								</div>
								<div className='p-6 text-center'>
									<h3 className='text-xl font-bold mb-1 text-gray-900 dark:text-white'>
										{member.name}
									</h3>
									<p className='text-sauki-orange font-semibold mb-2'>
										{member.role}
									</p>
									<p className='text-gray-600 dark:text-gray-400 text-sm'>
										{member.bio}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Achievements */}
			<section className='py-20 bg-gray-50 dark:bg-black'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl md:text-5xl font-bold mb-4'>
							Awards & <span className='text-sauki-orange'>Recognition</span>
						</h2>
						<p className='text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto'>
							Proud to be recognized for our commitment to excellence
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{achievements.map((achievement, idx) => (
							<div
								key={idx}
								className='bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center gap-4 hover:border-sauki-orange transition-all'
							>
								<div className='flex-shrink-0'>
									<div className='w-12 h-12 bg-sauki-orange/10 rounded-full flex items-center justify-center'>
										<Star className='w-6 h-6 text-sauki-orange' />
									</div>
								</div>
								<p className='text-gray-900 dark:text-white font-semibold'>
									{achievement}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-20 bg-gradient-to-r from-sauki-orange to-sauki-orange-dark'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
						Join Our Family
					</h2>
					<p className='text-xl mb-8 text-white/90'>
						Experience the SaukiCARS difference. Visit our showroom or browse
						our inventory online today.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link href='/inventory'>
							<button className='bg-white text-sauki-orange px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl'>
								Browse Inventory
							</button>
						</Link>
						<Link href='/contact'>
							<button className='border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-sauki-orange transition-all transform hover:scale-105'>
								Visit Us Today
							</button>
						</Link>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
