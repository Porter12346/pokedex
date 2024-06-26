import { AccountController } from "./controllers/AccountController.js";
import { PokemonApiController } from "./controllers/PokemonApiController.js";
import { SandboxApiController } from "./controllers/SandboxApiController.js";

import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [PokemonApiController, SandboxApiController],
    view: 'app/views/HomeView.html'
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




