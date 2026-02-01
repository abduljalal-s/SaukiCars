// types/index.ts
export interface Car {
	id: number;
	make: string;
	model: string;
	name: string;
	brand: string;
	year: number;
	price: string | number; // Can be either string or number
	priceNumeric: number;
	mileage: string | number; // Can be either string or number
	transmission: string;
	fuelType: string;
	fuel: string;
	bodyType: string;
	condition: string;
	image: string;
	featured: boolean;
	description: string;
	color?: string;
	engineSize?: string;
	drivetrain?: string;
	features?: string[];
}

export interface Feature {
	icon: string;
	title: string;
	description: string;
}

export interface NavItem {
	label: string;
	href: string;
}
