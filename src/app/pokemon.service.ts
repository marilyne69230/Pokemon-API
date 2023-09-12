import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonInterface } from './pokemon.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<PokemonInterface[]> {
    return this.http.get<PokemonInterface[]>('http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getAll')
  }

  fetchById(): Observable<PokemonInterface[]> {
    return this.http.get<PokemonInterface[]>('http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getAll')
  }
}
