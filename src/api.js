
import axios from "axios";

const instance=axios.create({
    baseURL: 'https://pokeapi.co/api/v2',

});

export const GetPokemons = async () => {
    const url = '/pokemon?offset=0&limit=151'; 
    const response = await instance.get(url);
    const pokemonUrls = response.data.results.map((element) => element.url);    
    const pokemonData = [];  
    for (const url of pokemonUrls) {
            const pokemonResponse = await instance.get(url);
            pokemonData.push(pokemonResponse.data);
        }
    return pokemonData;
}

export const GetPokemonDetalle = async(pokemonId) =>{
    const url= `/pokemon/${pokemonId}`;
    const response = await instance.get(url);
    return response.data;
}

export const GetPokemonItem = async() =>{
    const endpoint="/item?offset=0&limit=30";
    const response = await instance.get(endpoint);
    const pokemonUrlItem = response.data.results.map((element) => element.url);
    const pokemonDataItem = [];

    for (const url of pokemonUrlItem) {
        const itemResponse = await instance.get(url);
        pokemonDataItem.push(itemResponse.data);
    }
    return pokemonDataItem;
}