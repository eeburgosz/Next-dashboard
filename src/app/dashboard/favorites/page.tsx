import { FavoritePokemons, PokemonGrid } from "@/pokemons";
import { IoHeartOutline } from "react-icons/io5";

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
			<FavoritePokemons />
		</div>
	);
}
