// app/layout.tsx
import Toaster from "@/components/ui/Toaster";
import { CartProvider } from "@/contexts/CartContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
	title: "Sauki Cars",
	description:
		"Find your dream car with SaukiCars Kaduna - Quality vehicles at",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<CartProvider>
					{children}
					<Toaster />
				</CartProvider>
			</body>
		</html>
	);
}
