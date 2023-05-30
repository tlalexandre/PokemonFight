let pokemonID = 1;
let selectedPokemonID = null;
async function getPokemon(pokemonID, position, identity, displayBackSprite) {
  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error" + response.status);
      }
    })
    .then((data) => {
      generatePokemon(data, position, identity, displayBackSprite);
      console.log(data, position);
    })
    .catch((error) => {
      console.error("Error: " + error);
    });
}

function generatePokemon(data, position, identity, displayBackSprite) {
  let pokemon = createPokemonElement(data);
  let targetElement = document.querySelector(position);
  targetElement.appendChild(pokemon);

  let statBox = createPokemonStatBox();
  pokemon.appendChild(statBox);

  let pokemonImg = createPokemonImage(
    displayBackSprite ? data.sprites.back_default : data.sprites.front_default
  );
  pokemon.appendChild(pokemonImg);

  let pokemonName = createPokemonName(data.name);
  statBox.appendChild(pokemonName);

  let abilityContainer = createAbilityContainer();
  pokemon.appendChild(abilityContainer);

  createAbilities(data.abilities, abilityContainer);

  let healthBar = createStatBar(
    "health",
    data.stats[0].base_stat,
    data.stats[0].base_stat
  );
  statBox.appendChild(healthBar);

  let attackBar = createStatBar("Attack", data.stats[1].base_stat);
  pokemon.appendChild(attackBar);

  let defenseBar = createStatBar("Defense", data.stats[2].base_stat);
  pokemon.appendChild(defenseBar);

  let selectButton = createSelectButton(data, pokemonImg, identity);
  pokemon.appendChild(selectButton);
}

function createPokemonElement(data) {
  let pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");
  return pokemon;
}

function createPokemonImage(src) {
  let pokemonImg = document.createElement("img");
  pokemonImg.classList.add("pokemonImg");
  pokemonImg.src = src;
  return pokemonImg;
}

function createPokemonStatBox(data) {
  let statBox = document.createElement("div");
  statBox.classList.add("statBox");
  return statBox;
}

function createPokemonName(name) {
  let pokemonName = document.createElement("span");
  pokemonName.classList.add("pokemonName");
  pokemonName.textContent = name;
  return pokemonName;
}

function createAbilityContainer() {
  let abilityContainer = document.createElement("div");
  abilityContainer.classList.add("abilityContainer");
  return abilityContainer;
}

function createAbilities(abilities, abilityContainer) {
  let ability1 = abilities[0].ability.name;
  let ability2 = abilities[1].ability.name;

  let pokemonFirstAbility = createAbilitySpan("ability1", ability1);
  abilityContainer.appendChild(pokemonFirstAbility);

  let pokemonSecondAbility = createAbilitySpan("ability2", ability2);
  abilityContainer.appendChild(pokemonSecondAbility);
}

function createAbilitySpan(className, ability) {
  let abilitySpan = document.createElement("span");
  abilitySpan.classList.add(className);
  abilitySpan.textContent = ability;
  return abilitySpan;
}

function createStatBar(label, value, maxValue = 255) {
  let statContainer = document.createElement("div");
  statContainer.classList.add(`${label}Container`);

  let statLabel = document.createElement("span");
  statLabel.classList.add(`${label}Label`);
  statLabel.textContent = label;
  statContainer.appendChild(statLabel);

  let statBar = document.createElement("div");
  statBar.classList.add(`${label}Bar`);
  let barWidth = (value / maxValue) * 255 + "%";
  statBar.style.width = barWidth;
  statBar.style.height = "10px";
  statBar.style.backgroundColor = "green";
  statContainer.appendChild(statBar);

  let statValue = document.createElement("span");
  statValue.classList.add(`${label}Value`);
  statValue.textContent = value;
  statContainer.appendChild(statValue);

  let slashBar = document.createElement("span");
  slashBar.classList.add(`${label}SlashBar`);
  slashBar.textContent = "/";
  statContainer.appendChild(slashBar);

  let statMaxValue = document.createElement("span");
  statMaxValue.classList.add(`${label}MaxValue`);
  statMaxValue.textContent = maxValue;
  statContainer.appendChild(statMaxValue);

  return statContainer;
}

function createSelectButton(data, pokemonImg, identity) {
  let selectButton = document.createElement("button");
  selectButton.classList.add("selectButton");
  selectButton.textContent = "Select";

  selectButton.addEventListener("click", () => {
    if (selectedPokemonID !== null) {
      // Another Pokemon is already selected, do nothing
      return;
    }
    selectedPokemonID = data.id; // Mark the current Pokemon as selected
    // pokemonImg.src = data.sprites.back_default;
    console.log(pokemonImg.src);
    let pokemonSelected = getPokemon(data.id, ".myPokemonArea", identity, true);
  });

  return selectButton;
}

function createHealthBar(value) {
  healthBar = d;
}

function comparePokemon(pokemonSelected, enemyPokemon) {
  console.log(pokemonSelected);
}

let randomPokemon = Math.floor(Math.random() * 151) + 1;

let pokemon1 = getPokemon(1, ".pokemon-container", "Je suis le 1");
let pokemon2 = getPokemon(4, ".pokemon-container", "Je suis le 2");
let pokemon3 = getPokemon(7, ".pokemon-container", "Je suis le 3");
let enemyPokemon = getPokemon(
  randomPokemon,
  ".enemyArea",
  "I'm a random pokemon"
);
