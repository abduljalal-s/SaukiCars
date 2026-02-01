/* eslint-disable react/no-unescaped-entities */
"use client";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import {
  Award,
  Calendar,
  Car,
  CheckCircle,
  Clock,
  CreditCard,
  DollarSign,
  FileText,
  Phone,
  RefreshCcw,
  Shield,
  Truck,
  UserCheck,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Services() {
	const services = [
		{
			icon: <Car className='w-12 h-12' />,
			title: "Buy a Car",
			description:
				"Browse our extensive inventory of new and pre-owned vehicles. From compact sedans to luxury SUVs, we have the perfect car for every budget and lifestyle.",
			features: [
				"Wide selection of brands",
				"Competitive pricing",
				"Test drives available",
				"Trade-in options",
			],
			cta: "Browse Inventory",
			link: "/inventory",
		},
		{
			icon: <DollarSign className='w-12 h-12' />,
			title: "Sell Your Car",
			description:
				"Get the best value for your vehicle with our hassle-free selling process. We offer competitive prices and handle all the paperwork for you.",
			features: [
				"Free vehicle valuation",
				"Quick payment process",
				"No hidden fees",
				"Professional appraisal",
			],
			cta: "Get a Quote",
			link: "/sell",
		},
		{
			icon: <RefreshCcw className='w-12 h-12' />,
			title: "Car Swap",
			description:
				"Upgrade or switch your current vehicle with our convenient car swap service. Trade your old car for a newer model with minimal hassle.",
			features: [
				"Fair swap evaluations",
				"Wide range of options",
				"Transparent process",
				"Same-day approvals",
			],
			cta: "Start Swap",
			link: "/swap",
		},
		{
			icon: <CreditCard className='w-12 h-12' />,
			title: "Auto Financing",
			description:
				"Flexible financing options to help you drive your dream car today. We work with leading banks to get you the best rates and terms.",
			features: [
				"Low interest rates",
				"Flexible payment plans",
				"Quick approval",
				"Bad credit considered",
			],
			cta: "Apply Now",
			link: "/financing",
		},
		{
			icon: <Shield className='w-12 h-12' />,
			title: "Vehicle Insurance",
			description:
				"Comprehensive insurance coverage to protect your investment. We partner with top insurance companies to offer you the best protection.",
			features: [
				"Comprehensive coverage",
				"Competitive premiums",
				"Fast claims processing",
				"Multiple providers",
			],
			cta: "Get Quote",
			link: "/insurance",
		},
		{
			icon: <Wrench className='w-12 h-12' />,
			title: "Maintenance & Repairs",
			description:
				"Keep your vehicle in top condition with our expert maintenance and repair services. Our certified technicians use genuine parts.",
			features: [
				"Certified technicians",
				"Genuine spare parts",
				"Warranty on repairs",
				"Quick turnaround",
			],
			cta: "Book Service",
			link: "/service",
		},
		{
			icon: <FileText className='w-12 h-12' />,
			title: "Vehicle Documentation",
			description:
				"Complete assistance with all vehicle registration and documentation needs. We handle customs, registration, and transfer processes.",
			features: [
				"Customs clearance",
				"Vehicle registration",
				"Ownership transfer",
				"License renewal",
			],
			cta: "Learn More",
			link: "/documentation",
		},
		{
			icon: <Truck className='w-12 h-12' />,
			title: "Delivery Service",
			description:
				"Convenient nationwide delivery service. We bring your new car directly to your doorstep anywhere in Nigeria.",
			features: [
				"Nationwide coverage",
				"Insured transit",
				"Door-to-door delivery",
				"Real-time tracking",
			],
			cta: "Check Coverage",
			link: "/delivery",
		},
		{
			icon: <UserCheck className='w-12 h-12' />,
			title: "Pre-Purchase Inspection",
			description:
				"Professional vehicle inspection service to ensure you're making a smart purchase. Get a detailed report on the car's condition.",
			features: [
				"Comprehensive checks",
				"Mechanical inspection",
				"Detailed reports",
				"Expert recommendations",
			],
			cta: "Schedule Inspection",
			link: "/inspection",
		},
	];

	const process = [
		{
			step: "01",
			title: "Choose Your Service",
			description:
				"Select the service you need from our comprehensive range of automotive solutions.",
			icon: <CheckCircle className='w-8 h-8' />,
		},
		{
			step: "02",
			title: "Contact Our Team",
			description:
				"Reach out via phone, email, or visit our showroom. Our experts are ready to assist you.",
			icon: <Phone className='w-8 h-8' />,
		},
		{
			step: "03",
			title: "Get Professional Service",
			description:
				"Enjoy top-quality service from our experienced team with transparent pricing and processes.",
			icon: <Award className='w-8 h-8' />,
		},
		{
			step: "04",
			title: "Drive Happy",
			description:
				"Experience peace of mind knowing your automotive needs are handled by professionals.",
			icon: <Car className='w-8 h-8' />,
		},
	];

	const whyChoose = [
		{
			icon: <Award className='w-8 h-8' />,
			title: "5+ Years Experience",
			description: "Trusted automotive service provider in Abuja",
		},
		{
			icon: <UserCheck className='w-8 h-8' />,
			title: "Expert Team",
			description: "Certified professionals dedicated to excellence",
		},
		{
			icon: <Shield className='w-8 h-8' />,
			title: "Quality Guaranteed",
			description: "100% satisfaction on all our services",
		},
		{
			icon: <Clock className='w-8 h-8' />,
			title: "Fast Turnaround",
			description: "Quick and efficient service delivery",
		},
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

				<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<div className='inline-block mb-6'>
						<span className='px-4 py-2 bg-sauki-orange/20 border border-sauki-orange/30 rounded-full text-sauki-orange text-sm font-medium backdrop-blur-sm'>
							Comprehensive Automotive Solutions
						</span>
					</div>

					<h1 className='text-5xl md:text-6xl font-bold mb-6 text-white'>
						Our <span className='text-sauki-orange'>Services</span>
					</h1>

					<p className='text-xl text-gray-200 max-w-3xl mx-auto mb-8'>
						From buying and selling to financing and maintenance, we offer a
						complete range of automotive services to meet all your needs.
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link href='/contact'>
							<button className='bg-sauki-orange hover:bg-sauki-orange-dark px-8 py-4 rounded-xl font-semibold text-white transition-all transform hover:scale-105 shadow-lg'>
								Get Started
							</button>
						</Link>
						<Link href='#services'>
							<button className='border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-sauki-navy transition-all'>
								Explore Services
							</button>
						</Link>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section id='services' className='py-20 bg-gray-50 dark:bg-gray-900'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<span className='px-4 py-2 bg-sauki-orange/10 border border-sauki-orange/20 rounded-full text-sauki-orange text-sm font-medium inline-block mb-4'>
							What We Offer
						</span>
						<h2 className='text-4xl md:text-5xl font-bold mb-4'>
							Complete{" "}
							<span className='text-sauki-orange'>Automotive Solutions</span>
						</h2>
						<p className='text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto'>
							Everything you need for your vehicle journey, all in one place
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{services.map((service, idx) => (
							<div
								key={idx}
								className='bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-sauki-orange hover:shadow-2xl transition-all transform hover:-translate-y-2 group'
							>
								<div className='text-sauki-orange mb-6 group-hover:scale-110 transition-transform'>
									{service.icon}
								</div>

								<h3 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
									{service.title}
								</h3>

								<p className='text-gray-600 dark:text-gray-400 mb-6 leading-relaxed'>
									{service.description}
								</p>

								<ul className='space-y-3 mb-6'>
									{service.features.map((feature, fIdx) => (
										<li
											key={fIdx}
											className='flex items-start gap-2 text-gray-700 dark:text-gray-300'
										>
											<CheckCircle className='w-5 h-5 text-sauki-orange flex-shrink-0 mt-0.5' />
											<span className='text-sm'>{feature}</span>
										</li>
									))}
								</ul>

								<Link href={service.link}>
									<button className='w-full bg-sauki-orange/10 text-sauki-orange px-6 py-3 rounded-xl font-semibold hover:bg-sauki-orange hover:text-white transition-all'>
										{service.cta}
									</button>
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section className='py-20 bg-white dark:bg-black'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<span className='px-4 py-2 bg-sauki-orange/10 border border-sauki-orange/20 rounded-full text-sauki-orange text-sm font-medium inline-block mb-4'>
							Simple Process
						</span>
						<h2 className='text-4xl md:text-5xl font-bold mb-4'>
							How It <span className='text-sauki-orange'>Works</span>
						</h2>
						<p className='text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto'>
							Getting started with our services is easy and straightforward
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{process.map((item, idx) => (
							<div key={idx} className='relative text-center'>
								{/* Connector Line */}
								{idx < process.length - 1 && (
									<div className='hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-sauki-orange to-transparent'></div>
								)}

								<div className='relative'>
									<div className='w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-sauki-orange to-sauki-orange-dark rounded-full flex items-center justify-center text-white shadow-xl'>
										{item.icon}
									</div>
									<div className='absolute -top-2 -right-2 w-12 h-12 bg-sauki-navy rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg'>
										{item.step}
									</div>
								</div>

								<h3 className='text-xl font-bold mb-3 text-gray-900 dark:text-white'>
									{item.title}
								</h3>
								<p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className='py-20 bg-gray-50 dark:bg-gray-900'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl md:text-5xl font-bold mb-4'>
							Why Choose <span className='text-sauki-orange'>SaukiCARS</span>
						</h2>
						<p className='text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto'>
							We're committed to providing exceptional service at every step
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{whyChoose.map((item, idx) => (
							<div
								key={idx}
								className='bg-white dark:bg-gray-800 p-8 rounded-2xl text-center border border-gray-200 dark:border-gray-700 hover:border-sauki-orange transition-all'
							>
								<div className='w-16 h-16 mx-auto mb-4 bg-sauki-orange/10 rounded-full flex items-center justify-center text-sauki-orange'>
									{item.icon}
								</div>
								<h3 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
									{item.title}
								</h3>
								<p className='text-gray-600 dark:text-gray-400'>
									{item.description}
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
						Ready to Get Started?
					</h2>
					<p className='text-xl mb-8 text-white/90'>
						Contact us today and let our experts help you with all your
						automotive needs
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link href='/contact'>
							<button className='bg-white text-sauki-orange px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl'>
								Contact Us
							</button>
						</Link>
						<Link href='/inventory'>
							<button className='border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-sauki-orange transition-all transform hover:scale-105'>
								View Inventory
							</button>
						</Link>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
