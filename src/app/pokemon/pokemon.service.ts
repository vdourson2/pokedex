import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Injectable()
export class PokemonService {

  getPokemonList(): Pokemon[]{
    return POKEMONS;
  }

  getPokemonById(pokemonId : number): Pokemon | undefined{
    return POKEMONS.find(pokemon => pokemon.id == pokemonId);
  }

  getPokemonTypeList(): string[]{
    return [
      'plante',
      'poison',
      'feu',
      'eau',
      'insecte',
      'normal',
      'vol'
    ];
  }

}
