import { AppState } from "../AppState.js";
import { api, pokeApi } from "./AxiosService.js";

class SandboxApiService {

    constructor() {
        console.log('s api ser init');
    }

    async savePokemon() {
        let activePokemon = AppState.activePokemon
        console.log('saving mon');
        let response = await api.post(activePokemon)
        console.log(response);
    }
}

export const sandboxApiService = new SandboxApiService()