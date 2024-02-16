import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailsPokemonComponent } from './details-pokemon/details-pokemon.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { BorderCardDirective } from './border-card.directive';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';

const pokemonRoutes: Routes = [
  {path:'pokemons', component:ListPokemonComponent},
  {path:'pokemon/:id', component:DetailsPokemonComponent},
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailsPokemonComponent,
    PokemonTypeColorPipe,
    BorderCardDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes)
  ]
})
export class PokemonModule { }