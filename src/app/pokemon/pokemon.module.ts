import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailsPokemonComponent } from './details-pokemon/details-pokemon.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { BorderCardDirective } from './border-card.directive';
import { PokemonService } from './pokemon.service';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { FormsModule } from '@angular/forms';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ListPokemonComponent,
        DetailsPokemonComponent,
        PokemonTypeColorPipe,
        BorderCardDirective,
        PokemonFormComponent,
        EditPokemonComponent,
        AddPokemonComponent,
        SearchPokemonComponent,
        LoaderComponent
    ],
    providers: [PokemonService]
})
export class PokemonModule { }
