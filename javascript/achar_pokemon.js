//Ligação com as TAGS em HTML.

let pesquisa_pokemon = document.querySelector("#pokemon");
let pokemon_imagem = document.querySelector("#pokemon_img");
let nome_pokemon = document.querySelector("#pokemon_name");
let id_pokemon = document.querySelector("#pokemon_id");
let tipo_pokemon = document.querySelector("#pokemon_type");
let altura_pokemon = document.querySelector("#pokemon_height");
let peso_pokemon = document.querySelector("#pokemon_weight");

//Por padrão deixa os campos em branco com um -.

pokemon_imagem.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";
nome_pokemon.innerHTML = "-";
id_pokemon.innerHTML = "-";
tipo_pokemon.innerHTML = "-";
altura_pokemon.innerHTML = "-";
peso_pokemon.innerHTML = "-";

//Função pra consultar a API e trazer os resultados para o usuário.

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

    //Faz o fetch na API.

    fetch(`https://pokeapi.co/api/v2/pokemon/${pesquisa_pokemon_valor}`)
        .then((res) => {
            return res.json();
        })
        .then((res_json) => {
            pokemon_imagem.src = res_json.sprites.front_default;
            nome_pokemon.innerHTML = res_json.name;
            id_pokemon.innerHTML = res_json.id;
            let tipo = res_json.types[0].type.name;
            tipo_pokemon.innerHTML = `<span class="tipo-badge ${tipo}"> ${tipo}</span>`;
            altura_pokemon.innerHTML = `${res_json.height}m`;
            peso_pokemon.innerHTML = res_json.weight;
        })

        //Msg caso de algo errado.

        .catch(() => {
            pokemon_imagem.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";
            nome_pokemon.innerHTML = "Não encontrado";
            id_pokemon.innerHTML = "-";
            tipo_pokemon.innerHTML = "-";
            altura_pokemon.innerHTML = "-";
            peso_pokemon.innerHTML = "-";
        });
}