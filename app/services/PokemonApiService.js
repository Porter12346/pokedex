import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
import { pokeApi } from "./AxiosService.js";

class PokemonApiService {

    constructor() {
        console.log('p api ser init');
    }

    async setActivePokemon(idNum) {
        try {
            let response = await pokeApi.get(`pokemon/${idNum}`)
            console.log(response)
            let newPokemon = new Pokemon(response.data)
            console.log(newPokemon)
            AppState.activePokemon = newPokemon
        } catch (error) {
            Pop.error(error)
        }

    }

    async getPokemon() {
        try {
            let response = await pokeApi.get('pokemon?limit=25&offset=0')
            console.log(response.data.results)
            AppState.pokemon = response.data.results
            console.log(AppState.pokemon)
        } catch (error) {
            Pop.error(error)
        }

    }
}
export const pokemonApiService = new PokemonApiService()