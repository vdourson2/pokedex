import { Routes } from "@angular/router";
import { AuthGuard } from "../auth.guard";
import { PokemonService } from "./pokemon.service";

export const pokemonRoutes: Routes = [{
    path:'',
    providers: [PokemonService],
    children: [
        {
            path:'edit/pokemon/:id', 
            loadComponent: () => import('./edit-pokemon/edit-pokemon.component').then(module => module.EditPokemonComponent), 
        },
        {
            path:'pokemon/add', 
            title: 'Ajouter pokémon',
            loadComponent: () => import('./add-pokemon/add-pokemon.component').then(module => module.AddPokemonComponent),
        },
        {
            path:'pokemons', 
            title: 'Pokédex',
            loadComponent: () => import('./list-pokemon/list-pokemon.component').then(module => module.ListPokemonComponent),
        },
        {
            path:'pokemon/:id',
            loadComponent: () => import('./details-pokemon/details-pokemon.component').then(module => module.DetailsPokemonComponent),
        },
    ]
}];