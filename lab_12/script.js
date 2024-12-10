const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=12";
const pokemonContainer = document.getElementById("pokemon-container");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeModal = document.getElementById("close-modal");

async function fetchPokemons() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    const pokemonList = data.results;

    for (const pokemon of pokemonList) {
      const pokemonDetails = await fetchPokemonDetails(pokemon.url);
      displayPokemon(pokemonDetails);
    }
  } catch (error) {
    console.error("Помилка при отриманні даних:", error);
  }
}


async function fetchPokemonDetails(url) {
  const response = await fetch(url);
  return response.json();
}


function displayPokemon(pokemon) {
  const card = document.createElement("div");
  card.className = "pokemon-card";
  card.innerHTML = `
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
    <p>Вага: ${pokemon.weight} кг</p>
    <p>Тип: ${pokemon.types.map(t => t.type.name).join(", ")}</p>
  `;

  card.addEventListener("click", () => openModal(pokemon));
  pokemonContainer.appendChild(card);
}


function openModal(pokemon) {
  modalBody.innerHTML = `
    <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <p><strong>Вага:</strong> ${pokemon.weight} кг</p>
    <p><strong>Зріст:</strong> ${pokemon.height} м</p>
    <p><strong>Тип:</strong> ${pokemon.types.map(t => t.type.name).join(", ")}</p>
    <p><strong>Досвід:</strong> ${pokemon.base_experience}</p>
  `;
  modal.style.display = "flex";
}


closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});


fetchPokemons();
