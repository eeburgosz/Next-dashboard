"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
	const favoritePokemos = useAppSelector((state) => state.pokemons);
	//! La siguiente línea es porque en el state no tengo almacenado los pokemones favoritos como un array sino como objetos y PokemonGrid me pide un array, así que transforomo la data que me llega del state (objetos) como un array de objetos.

	//! También se puede hacer así:
	//* const favoritePokemos = useAppSelector((state) => Object.values(state.pokemons));
	//! Y pasar directamente favoritePokemos
	const arrFavoritePokemons = Object.values(favoritePokemos);

	const [pokemons, setPokemons] = useState(arrFavoritePokemons);

	return (
		// <PokemonGrid pokemons={arrFavoritePokemons} />
		<>
			{pokemons.length === 0 ? (
				<NoFavorites />
			) : (
				<PokemonGrid pokemons={pokemons} />
			)}
		</>
	);
};

export const NoFavorites = () => {
	return (
		<div className="flex flex-col h-[50vh] items-center justify-center">
			<IoHeartOutline size={100} className="text-red-500" />
			<span>No hay favoritos</span>
		</div>
	);
};
