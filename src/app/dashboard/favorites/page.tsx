import { SimplePokemon, PokemonsResponse, PokemonGrid } from "@/pokemons";

export const metadata = {
	title: "Favoritos",
	description:
		"Tempor sunt voluptate anim voluptate magna sit est labore quis.",
};

export default async function FavoritesPage() {
	return (
		<div className="flex flex-col">
			<span className="text-5xl mr-2">
				Pokemons Favoritos<small className="text-blue-500">Global state</small>
				<hr />
			</span>
			<PokemonGrid pokemons={[]} />
		</div>
	);
}
