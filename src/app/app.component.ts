import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html' ,
  styles: []
})
export class AppComponent implements OnInit {

  pokemonList: Pokemon[] = POKEMONS;
  selectedPokemon: Pokemon | undefined;

  showPokemon(selectedId : string) {
    const id = +selectedId;
    const pokemon : Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == id); 
    if (pokemon){
      console.log(`Le pokemon selectionné est ${pokemon.name}`);
      this.selectedPokemon = pokemon;
    }
    else {
      console.log('Il n\'y a pas de pokémon sélectionné');
      this.selectedPokemon = pokemon;
    }
  }

  ngOnInit(): void {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon: Pokemon){
    console.log(`Selected Pokémon ${pokemon.name}`);
    
  }
}
