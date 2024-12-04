const pokemonData = {
    pikachu: {
        name: "Pikachu",
        description: "Pikachu is an Electric-type Pokémon known for its yellow fur and lightning-shaped tail. It's the mascot of the Pokémon franchise."
    },
    bulbasaur: {
        name: "Bulbasaur",
        description: "Bulbasaur is a Grass/Poison-type Pokémon. It is known for the plant bulb on its back, which grows as it evolves."
    },
    charmander: {
        name: "Charmander",
        description: "Charmander is a Fire-type Pokémon with a flame on its tail. It's known for its cheerful personality and fiery nature."
    }
};

function showModal(pokemon) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');

    title.textContent = pokemonData[pokemon].name;
    description.textContent = pokemonData[pokemon].description;

    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
