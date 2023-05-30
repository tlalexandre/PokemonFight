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
      // console.log(data, position);
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

  let moveContainer = createMovesContainer();
  pokemon.appendChild(moveContainer);

  createMoves(data.moves, moveContainer);

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

function createMovesContainer() {
  let movesContainer = document.createElement("div");
  movesContainer.classList.add("moveContainer");
  return movesContainer;
}

function createMoves(moves, movesContainer) {
  let move1 = moves[0].move.name;
  let move2 = moves[1].move.name;

  let pokemonFirstMove = createMoveSpan("move1", move1);
  movesContainer.appendChild(pokemonFirstMove);

  let pokemonSecondMove = createMoveSpan("move2", move2);
  movesContainer.appendChild(pokemonSecondMove);
}

function createMoveSpan(className, move) {
  let moveSpan = document.createElement("span");
  moveSpan.classList.add(className);
  moveSpan.textContent = move;
  return moveSpan;
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
    return pokemonSelected;
  });

  return selectButton;
}

function createHealthBar(value) {
  healthBar = d;
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
console.log(enemyPokemon);
function comparePokemon(pokemonSelected, enemyPokemon) {
  console.log(pokemonSelected, enemyPokemon);
  let myHealth = enemyPokemon.abilities;
  console.log(myHealth);
}

comparePokemon(pokemonSelected, enemyPokemon);
