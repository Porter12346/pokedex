import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js";
import { api, pokeApi } from "./AxiosService.js";

class SandboxApiService {

    constructor() {
        console.log('s api ser init');
    }

    async getOwnedPokemon() {
        try {
            let response = await api.get('/api/pokemon')
            console.log(response)
        } catch (error) {
            Pop.error(error)
        }
    }

    async savePokemon() {
        try {
            let activePokemon = AppState.activePokemon
            console.log('saving mon');
            let response = await api.post('api/pokemon', activePokemon)
            console.log(response);
        } catch (error) {
            Pop.error(error)
            console.log('failed to save');
        }

    }
}

export const sandboxApiService = new SandboxApiService()