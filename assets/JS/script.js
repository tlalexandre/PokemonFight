//Je veux recuperer les donnees depuis l'API,
// le nom, l'image (avant/arrière), et les deux abilites du Pokemon, et ses stats(puissance d'attaque, defense, vie).
//je dois affcher les donnees recuperees.
//le nom, l'image , les deux abilites, et ses stats(puissance d'attaque, defense, vie)

// Je veux afficher un Pokemon adverse possedant ses propres donnees.
//Je veux pouvoir interagir avec les donnees des deux Pokemons, et les modifier.
//Je veux afficher ses modifications.
// Je veux une augmentation du level du Pokemon en fonction de la victoire du combat.
//Je veux une condition de victoire basee sur le level du Pokemon.
// je veux une condition de defaite si le Pokemon est KO.
// Je veux un systeme de soins base sur un choix entre une prise de level ou se soigner.

// Je veux une selection entre 3 Pokemons predefinis au depart.
let pokemonID = 1;
async function getPokemon(pokemonID, position, identity) {
  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error" + response.status);
      }
    })
    .then((data) => {
      generatePokemon(data, position, identity);
      console.log(data, position);
    })
    .catch((error) => {
      console.error("Error: " + error);
    });
}

function generatePokemon(data, position, identity) {
  // Create the pokemon div element
  let pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");
  let targetElement = document.querySelector(position);
  targetElement.appendChild(pokemon);
  // Create the pokemon image and append it to the pokemon div element
  let pokemonImg = document.createElement("img");
  pokemonImg.classList.add("pokemonImg");
  pokemonImg.src = data.sprites.front_default;
  pokemon.appendChild(pokemonImg);

  // Create the pokemon name and append it to the pokemon div element
  let pokemonName = document.createElement("span");
  pokemonName.classList.add("pokemonName");
  pokemonName.textContent = data.name;
  pokemon.appendChild(pokemonName);

  // Create the ability container
  let abilityContainer = document.createElement("div");
  abilityContainer.classList.add("abilityContainer");
  pokemon.appendChild(abilityContainer);

  // Create the two abilities and append them to the ability container
  let pokemonFirstAbility = document.createElement("span");
  pokemonFirstAbility.classList.add("ability1");
  abilityContainer.appendChild(pokemonFirstAbility);
  let pokemonSecondAbility = document.createElement("span");
  pokemonSecondAbility.classList.add("ability2");
  abilityContainer.appendChild(pokemonSecondAbility);

  // Create the health bar and append it to the pokemon div element
  let healthBar = document.createElement("span");
  healthBar.classList.add("healthBar");
  healthBar.textContent = data.stats[0].base_stat;
  pokemon.appendChild(healthBar);

  // Create the attack bar and append it to the pokemon div element
  let attack = document.createElement("span");
  attack.classList.add("attack");
  attack.textContent = data.stats[1].base_stat;
  pokemon.appendChild(attack);

  // Create the defense bar and append it to the pokemon div element
  let defense = document.createElement("span");
  defense.classList.add("defense");
  defense.textContent = data.stats[2].base_stat;
  pokemon.appendChild(defense);

  let pokemonAbilities = data.abilities;
  let ability1 = pokemonAbilities[0].ability.name;
  let ability2 = pokemonAbilities[1].ability.name;
  pokemonFirstAbility.textContent = ability1;
  pokemonSecondAbility.textContent = ability2;

  // Create a button to select the pokemon
  let selectButton = document.createElement("button");
  selectButton.classList.add("selectButton");
  selectButton.textContent = "Select";

  selectButton.addEventListener("click", () => {
    pokemonID = data.id;
    // Add the pokemon div element to the battle area
    getPokemon(pokemonID, ".battleArea", identity);
    var clicked = true;
    // Make the select button disappear
    selectButton.remove();

    // Create a variable to access all the select buttons
    let selectButtons = document.querySelectorAll(".selectButton");

    selectButtons.forEach((selectButton) => {
      selectButton.addEventListener("click", () => {
        if (!clicked) {
          selectButtons.style.display = "none";
        }
      });
    });
  });

  pokemon.appendChild(selectButton);
}

let pokemon1 = getPokemon(1, ".pokemon-container", "Je suis le 1");
let pokemon2 = getPokemon(4, ".pokemon-container", "Je suis le 2");
let pokemon3 = getPokemon(7, ".pokemon-container", "Je suis le 3");

console.log(pokemon1, pokemon2, pokemon3);
pokemon1.addEventListener("click", () => {
  console.log("test");
});
