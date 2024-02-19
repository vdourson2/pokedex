import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
})
export class DetailsPokemonComponent implements OnInit {

  listPokemons : Pokemon[];
  pokemon : Pokemon | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService : PokemonService
  ) { }

  ngOnInit(): void {
    const id : string|null = this.route.snapshot.paramMap.get('id');
    if (id){
      this.pokemon = this.pokemonService.getPokemonById(+id);
    }
  }

  goToListPokemon() {
    this.router.navigate(['pokemons']); 
  }

  goToEditPokemon(pokemon : Pokemon){
    this.router.navigate(['edit/pokemon', pokemon.id]);
  }

}
