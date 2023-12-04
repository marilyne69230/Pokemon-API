import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonInterface } from './pokemon.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  export class PokemonService {

    constructor(private http: HttpClient) { }

    getPokemons(): Observable<PokemonInterface[]> {
      return this.http.get<PokemonInterface[]>('http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getAll')
    }

    getPokemonhById(id:number): Observable<PokemonInterface[]> {
      return this.http.get<PokemonInterface[]>('http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getById&id=' + id)
    }

    // SUPPRIMER UN POKEMON
    deletePokemon(id:number): Observable<string> {
      return this.http.get<string>('http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=deletePokemon&userApi=marilyne&id=' + id)
    }

    // CREER UN POKEMON
    addPokemon(pokemon: PokemonInterface): Observable<string> {
      const body = JSON.stringify(pokemon);
      const header = { 'content-type': 'application/json'};
      return this.http.post<string>("http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=createPokemon&userApi=Maxime", body, {'headers': header})
  
    }

    }
  }
