import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js";
import { api, pokeApi } from "./AxiosService.js";

class SandboxApiService {

    constructor() {
        console.log('s api ser init');
    }

    async savePokemon() {
        try {
                    let activePokemon = AppState.activePokemon
        console.log('saving mon');
        let response = await api.post(activePokemon)
        console.log(response);
        } catch (error) {
            Pop.error(error)
            console.log('failed to save');
        }

    }
}

export const sandboxApiService = new SandboxApiService()