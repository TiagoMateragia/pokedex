let pesquisa_pokemon = document.querySelector("#pokemon");
let pokemon_imagem = document.querySelector("#pokemon_img");
let nome_pokemon = document.querySelector("#pokemon_name");
let id_pokemon = document.querySelector("#pokemon_id");
let tipo_pokemon = document.querySelector("#pokemon_type");
let altura_pokemon = document.querySelector("#pokemon_height");
let peso_pokemon = document.querySelector("#pokemon_weight");

pokemon_imagem.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";
nome_pokemon.innerHTML = "-";
id_pokemon.innerHTML = "-";
tipo_pokemon.innerHTML = "-";
altura_pokemon.innerHTML = "-";
peso_pokemon.innerHTML = "-";

function achar() {
    let pesquisa_pokemon_valor = pesquisa_pokemon.value.trim().toLowerCase();

    if (pesquisa_pokemon_valor === "") {
        pokemon_imagem.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";
        nome_pokemon.innerHTML = "-";
        id_pokemon.innerHTML = "-";
        tipo_pokemon.innerHTML = "-";
        altura_pokemon.innerHTML = "-";
        peso_pokemon.innerHTML = "-";
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pesquisa_pokemon_valor}`)
        .then((res) => {
            return res.json();
        })
        .then((res_json) => {
            pokemon_imagem.src = res_json.sprites.front_default;
            nome_pokemon.innerHTML = res_json.name;
            id_pokemon.innerHTML = res_json.id;
            tipo_pokemon.innerHTML = res_json.types[0].type.name;
            altura_pokemon.innerHTML = `${res_json.height}m`;
            peso_pokemon.innerHTML = res_json.weight;
        })
        .catch(() => {
            pokemon_imagem.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";
            nome_pokemon.innerHTML = "Não encontrado";
            id_pokemon.innerHTML = "-";
            tipo_pokemon.innerHTML = "-";
            altura_pokemon.innerHTML = "-";
            peso_pokemon.innerHTML = "-";
        });
}