import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';
import { Observable, catchError, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient){}

  getPokemonList(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    )
  }

  getPokemonById(pokemonId : number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
  }

  searchPokemonList(term: string): Observable<Pokemon[]>{
    if(term.length <= 1){
      return of([]);
    }
    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    )
  }

  updatePokemon(pokemon: Pokemon) : Observable<Pokemon|undefined> {
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type':'application/json'})
    }
    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))  
    )
  }

  createPokemon(pokemon: Pokemon) : Observable<Pokemon> {
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type':'application/json'})
    }
    return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))  
    )
  }

  deletePokemonById(pokemonId: number) : Observable<null>{
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
  }

  private log(response: any){
    console.table(response);
  }

  private handleError(error: Error, errorReturn: any){
    console.table(error);
    return of(errorReturn);
  }

  getPokemonTypeList(): string[]{
    return [
      'Plante',
      'Poison',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Vol'
    ];
  }

}
