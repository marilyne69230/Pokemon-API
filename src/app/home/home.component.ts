import { Component, OnInit } from '@angular/core';
import { PokemonInterface } from '../pokemon.interface';
import { PokemonService } from './../pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemonsList: PokemonInterface[] = [];
  pokemonSelected:PokemonInterface[] | undefined;

  constructor(private service: PokemonService) {}

  ngOnInit() {
    this.service.getPokemons().subscribe(pokemonListResult => {
      this.pokemonsList = pokemonListResult;
      console.table(this.pokemonsList);
    });

  }
  viewOnePokemn(id:number) {
    this.service.getPokemonhById(id).subscribe(data => {
      this.pokemonsList = data;
    })
  }
}
