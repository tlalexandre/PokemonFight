const myPokemonName = document.querySelector(".name");
const myPokemonImg = document.querySelector(".pokemonImg");
let randomPokemon = Math.floor(Math.random() * 151 + 1);
let pokemonNumber = 7;
async function getPokemon() {
  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
    .then((res) => res.json())
    .then((data) => {
      generatePokemon(data);

      console.log(data);
    });
}

getPokemon();
const generatePokemon = (data) => {
  const result = data;
  myPokemonName.innerHTML = result.name;
  myPokemonImg.src = result.sprites.back_default;
  ability1.innerHTML = result.abilities[0].ability.name;
  ability2.innerHTML = result.abilities[1].ability.name;
};
