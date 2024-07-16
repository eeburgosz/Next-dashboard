import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonsState {
	favorite: { [key: string]: SimplePokemon };
}

// const getInitialState = (): PokemonsState => {
// 	// if (typeof localStorage === "undefined") return {};
// 	const favorites = JSON.parse(
// 		localStorage.getItem("favorite-pokemons") ?? "{}"
// 	);
// 	return favorites;
// };

const initialState: PokemonsState = {
	favorite: {},
	// ...getInitialState(),
};

const pokemonsSlice = createSlice({
	name: "pokemons",
	initialState,
	reducers: {
		toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
			const pokemon = action.payload;
			const { id } = pokemon;
			if (!!state.favorite[id]) {
				delete state.favorite[id];
				// return;
			} else {
				state.favorite[id] = pokemon;
			}
			localStorage.setItem("favorite-pokemons", JSON.stringify(state.favorite));
		},
		setFavoritePokemons(
			state,
			action: PayloadAction<{ [key: string]: SimplePokemon }>
		) {
			state.favorite = action.payload;
		},
	},
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
