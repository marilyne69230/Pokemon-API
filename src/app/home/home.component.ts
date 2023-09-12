import { Component, OnInit } from '@angular/core';
import { PokemonInterface } from '../pokemon.interface';
import { PokemonService } from './../pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemon: PokemonInterface | undefined;
  pokemons: PokemonInterface[] = [];

  constructor(private PokemonService: PokemonService) {}

  ngOnInit() {
    this.PokemonService.getPokemon().subscribe(data => {
      this.pokemons = data;
    })
  }
}
