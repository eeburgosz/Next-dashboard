"use client";

import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store, useAppDispatch } from "./";
import { setFavoritePokemons } from "./pokemons/pokemonsSlice";

interface Props {
	children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
	// const dispatch = useAppDispatch();
	useEffect(() => {
		const favorites = JSON.parse(
			localStorage.getItem("favorite-pokemons") ?? "{}"
		);
		// dispatch(setFavoritePokemons(favorites));
		store.dispatch(setFavoritePokemons(favorites));
	}, []);
	return <Provider store={store}>{children}</Provider>;
};
