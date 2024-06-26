import { sandboxApiService } from "../services/SandboxApiService.js";
import { Pop } from "../utils/Pop.js";

export class SandboxApiController {
    constructor() {
        console.log('s api cont init');
    }

    async savePokemon(){
        try {
            await sandboxApiService.savePokemon()
        } catch (error) {
            Pop.error(error)
        }
    }
}