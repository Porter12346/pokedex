import { sandboxApiService } from "../services/SandboxApiService.js";
import { Pop } from "../utils/Pop.js";

export class SandboxApiController {
    constructor() {
        console.log('s api cont init');
        this.getOwnedPokemon()
    }

    async getOwnedPokemon() {
        try {
            await sandboxApiService.getOwnedPokemon()
        } catch (error) {
            Pop.error(error)
        }
    }

    async savePokemon() {
        try {
            await sandboxApiService.savePokemon()
        } catch (error) {
            Pop.error(error)
            console.log('failed to save mon')
        }
    }
}