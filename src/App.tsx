import { useState } from "react";
import "./App.css";

import PokemonCard from "./components/PokemonCard";

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "charmander",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
		name: "squirtle",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
		name: "pikachu",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
	{
		name: "mew",
	},
];
function App() {
	const [pokemonName, setPokemonName] = useState(pokemonList[0].name);

	const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

	if (pokemon == null) {
		throw new Error("Invalid pokemon name");
	}

	return (
		<div>
			<nav>
				<ul className="AppUl">
					{pokemonList.map((pokemon) => (
						<li key={pokemon.name}>
							<button
								type="button"
								onClick={() => setPokemonName(pokemon.name)}
							>
								{pokemon.name}
							</button>
						</li>
					))}
				</ul>
			</nav>
			<PokemonCard pokemon={pokemon} />
		</div>
	);
}

export default App;
