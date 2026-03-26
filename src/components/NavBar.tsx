interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	setPokemonName: (name: string) => void;
	pokemonList: Pokemon[];
}
function NavBar({ pokemonList, setPokemonName }: NavBarProps) {
	return (
		<nav>
			{pokemonList.map((onePokemonFromTheList) => (
				<button
					key={onePokemonFromTheList.name}
					type="button"
					onClick={() => {
						setPokemonName(onePokemonFromTheList.name);
						if (onePokemonFromTheList.name === "pikachu") {
							alert("pika pikachu !!!");
						}
					}}
				>
					{onePokemonFromTheList.name}
				</button>
			))}
		</nav>
	);
}

export default NavBar;
