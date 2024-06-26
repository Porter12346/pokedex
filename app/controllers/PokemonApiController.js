import { AppState } from "../AppState.js"
import { api } from "../services/AxiosService.js"
import { pokemonApiService } from "../services/PokemonApiService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class PokemonApiController {
    constructor() {
        AppState.on('pokemon', this.drawPokemon)
        this.getPokemon()
    }

    drawPokemon() {
        let htmlInject = ''
        AppState.pokemon.forEach((pokemon) => htmlInject += `<button onclick="app.PokemonApiController.setActivePokemon('${pokemon.name}')" class="btn btn-info rounded mt-2 w-75 mx-2 text-center">${pokemon.name}</button>`)
        setHTML('pokemon-list', htmlInject)
    }

    async setActivePokemon(idNum) {
        try {
            await pokemonApiService.setActivePokemon(idNum)
        } catch (error) {
            Pop.error(error);
        }

    }

    async getPokemon() {
        try {
            await pokemonApiService.getPokemon()
            console.log('drawing mons');
        } catch (error) {
            Pop.error(error)
        }

    }
 
    
    drawActivePokemon(){
        let activePokemon = AppState.activePokemon
        
    }
}