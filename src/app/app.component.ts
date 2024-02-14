import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import * as li from './mock-pokemon-list';

@Component({
  selector: 'app-root',
  template: `<h1>Liste de Pokémons</h1>`,
  styles: []
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[];

  ngOnInit(): void {
    this.pokemonList = [];
    this.pokemonList.push(...li.POKEMONS);
    console.table(this.pokemonList);
  }

  selectPokemon(pokemon: Pokemon){
    console.log(`Selected Pokémon ${pokemon.name}`);
    
  }
}
