import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { LoaderComponent } from '../loader/loader.component';
import { NgIf, NgFor, DatePipe } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-details-pokemon',
    templateUrl: './details-pokemon.component.html',
    standalone: true,
    imports: [NgIf, NgFor, LoaderComponent, DatePipe, PokemonTypeColorPipe]
})
export class DetailsPokemonComponent implements OnInit {

  pokemon : Pokemon | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService : PokemonService,
    private title: Title
  ) { }

  ngOnInit(): void {
    const id : string|null = this.route.snapshot.paramMap.get('id');
    if (id){
      this.pokemonService.getPokemonById(+id).subscribe(pokemon => {
        this.pokemon = pokemon;
        this.initTitle(pokemon);
      });
    }
  }

  initTitle(pokemon: Pokemon | undefined){
    if(!pokemon){
      this.title.setTitle('No such pokemon');
      return;
    }
    this.title.setTitle(pokemon.name);
  }

  deletePokemon(pokemonId : number){
    this.pokemonService.deletePokemonById(pokemonId).subscribe(
      () => this.goToListPokemon()
    )
  }

  goToListPokemon() {
    this.router.navigate(['pokemons']); 
  }

  goToEditPokemon(pokemon : Pokemon){
    this.router.navigate(['edit/pokemon', pokemon.id]);
  }

}
