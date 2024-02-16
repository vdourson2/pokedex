import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
  styles: [
  ]
})
export class DetailsPokemonComponent implements OnInit {


  listPokemons : Pokemon[];
  pokemon : Pokemon | undefined;
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.listPokemons = POKEMONS;
    const id : string|null = this.route.snapshot.paramMap.get('id');
    if (id){
      this.pokemon = this.listPokemons.find(pokemon => pokemon.id == +id);
    }
  }

  goToListPokemon() {
    this.router.navigate(['pokemons']); 
  }

}
