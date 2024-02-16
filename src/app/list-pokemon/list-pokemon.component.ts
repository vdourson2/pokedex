import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent {

  pokemonList: Pokemon[] = POKEMONS;

  constructor(private router: Router){}

  goToDetailsPokemon(pokemon: Pokemon){
    this.router.navigate(['pokemon', pokemon.id]);
  }

}
