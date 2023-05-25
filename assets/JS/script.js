const myPokemonName = document.querySelector(".name");
let randomPokemon = Math.floor(Math.random() * 20 + 1);
fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    myPokemonName.innerHTML = data.name;
  });
