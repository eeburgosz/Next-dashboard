"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
	const { favorite: favoritePokemos } = useAppSelector(
		(state) => state.pokemons
	);
	//! La siguiente línea es porque en el state no tengo almacenado los pokemones favoritos como un array sino como objetos y PokemonGrid me pide un array, así que transforomo la data que me llega del state (objetos) como un array de objetos.

	//! También se puede hacer así:
	//* const favoritePokemons = useAppSelector((state) => Object.values(state.pokemons));
	//! Y pasar directamente favoritePokemos
	const arrFavoritePokemons = Object.values(favoritePokemos);

	return (
		<>
			{arrFavoritePokemons.length === 0 ? (
				<NoFavorites />
			) : (
				<PokemonGrid pokemons={arrFavoritePokemons} />
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
