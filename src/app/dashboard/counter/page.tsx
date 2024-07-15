import { CartCounter } from "@/shoping-cart";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Shopping Cart",
	description: "Probando el useState",
};

export default function CounterPage() {
	return (
		<div className="flex flex-col items-center justify-center w-full h-full">
			<span>Productos en el carrito de compras</span>
			<CartCounter value={20} />
		</div>
	);
}