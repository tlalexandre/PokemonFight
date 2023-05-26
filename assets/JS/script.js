const pokemonName = document.querySelector(".name");
const pokemonImg = document.querySelector(".pokemonImg");
let randomPokemon = Math.floor(Math.random() * 151 + 1);
let pokemonNumber = 2;

class Pokemon {
  constructor(data, id, name, img, ability1, ability2) {
    this.id = data.id;
    this.name = data.name;
    this.img = data.img;
    this.ability1 = data.ability1;
    this.ability2 = data.ability2;
  }
}
async function getPokemon() {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`
    );
    if (response.ok) {
      const data = await response.json();
      const id = data.id;
      const name = data.name;
      const img = data.sprites.front_default;
      const ability1 = data.abilities[0].ability.name;
      const ability2 = data.abilities[1].ability.name;
    } else {
      throw new Error("something went wrong");
    }
  } catch (error) {
    console.error(error);
  }
}
getPokemon();

// let pokemon = new Pokemon(

// let mine = document.querySelector("#mine");

// let bulbasaur = new Pokemon(
//   data,
//   1,
//   data.name,
//   data.img,
//   data.abilities[0].ability.name,
//   data.abilities[1].ability.name
// );

// console.log(bulbasaur);
