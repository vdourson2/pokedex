import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls:['pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

  types: string[];
  @Input()pokemon : Pokemon;
  isAdd: boolean;
  
  constructor(private pokemonService : PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypeList();
    this.isAdd = this.router.url.includes('add');
  }

  hasType(type : string){
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string){
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    if (isChecked){
      this.pokemon.types.push(type);
    } else {
      //this.pokemon.types = this.pokemon.types.filter(t => t == type);
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index,1);
    }
  }

  onSubmit(){
    console.log('Form submited');
    if (this.isAdd){
      this.pokemonService.createPokemon(this.pokemon)
        .subscribe((pokemon: Pokemon) => this.router.navigate(['/pokemon', pokemon.id])
      );
    } else{
      this.pokemonService.updatePokemon(this.pokemon)
        .subscribe(() => this.router.navigate(['/pokemon', this.pokemon.id])
      );
    }
  }

  isTypesValid(type: string) {
    if (this.pokemon.types.length == 1 && this.hasType(type)){
      return false;
    } 
    if (this.pokemon.types.length > 2 && !this.hasType(type)){
      return false;
    }
    else {
      return true;
    }
    
  }


}
