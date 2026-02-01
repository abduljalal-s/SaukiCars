// lib/data.ts
import { Car, Feature, NavItem } from "@/types";

export const navItems: NavItem[] = [
	{ label: "Home", href: "/" },
	{ label: "Services", href: "/services" },
	{ label: "About", href: "/about" },
];

export const featuredCars: Car[] = [
	{
		id: 1,
		name: "2024 Mpower",
		brand: "BMW",
		model: "911",
		price: "5M",
		priceNumeric: 125000,
		image: "/images/bmw/bm1.jpg",
		year: 2024,
		mileage: "1,200 mi",
		transmission: "Automatic",
		fuel: "Premium",
		featured: true,
		description:
			"The iconic 911 delivers legendary performance and timeless design.",
		features: [
			"Leather Interior",
			"Sport Chrono Package",
			"Premium Sound System",
		],
	},
	{
		id: 2,
		name: "2023 BMW M4",
		brand: "BMW",
		model: "M4",
		price: "$89,500",
		priceNumeric: 89500,
		image: "/images/Mask_25.webp",
		year: 2023,
		mileage: "8,500 mi",
		transmission: "Manual",
		fuel: "Premium",
		featured: true,
		description:
			"Pure driving excitement with precision handling and raw power.",
		features: ["Carbon Fiber Roof", "M Sport Exhaust", "Adaptive Suspension"],
	},
	{
		id: 3,
		name: "2024 Mercedes AMG GT",
		brand: "Mercedes",
		model: "AMG GT",
		price: "$145,000",
		priceNumeric: 145000,
		image: "/images/Mask_21.webp",
		year: 2024,
		mileage: "2,100 mi",
		transmission: "Automatic",
		fuel: "Premium",
		featured: true,
		description: "Combining luxury and performance in a stunning package.",
		features: ["AMG Performance Exhaust", "Burmester Sound", "Dynamic Select"],
	},
];

export const features: Feature[] = [
	{
		icon: "🏆",
		title: "Premium Selection",
		description: "Handpicked luxury and performance vehicles from top brands",
	},
	{
		icon: "✓",
		title: "Certified Quality",
		description:
			"Every vehicle undergoes rigorous inspection and certification",
	},
	{
		icon: "💰",
		title: "Best Pricing",
		description: "Competitive prices and flexible financing options available",
	},
	{
		icon: "🛡️",
		title: "Warranty Coverage",
		description: "Comprehensive warranty plans for peace of mind",
	},
];
