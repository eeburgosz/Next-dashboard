"use client";
import { useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget";
import { IoCafeOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
	const { count } = useAppSelector((state) => state.counter);

	return (
		<div className="flex flex-wrap p-2 justify-center">
			<SimpleWidget
				title={`${count}`}
				subtitle="Carrito de compras"
				label="Contador"
				href="/dashboard/counter"
				icon={<IoCafeOutline size={50} className="text-blue-500" />}
			/>
		</div>
	);
};
