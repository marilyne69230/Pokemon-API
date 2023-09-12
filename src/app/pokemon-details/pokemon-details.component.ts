import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { PokemonInterface } from '../pokemon.interface';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent {

  pokemon: PokemonInterface | undefined;
  pokemons: PokemonInterface[] = [];

  constructor(private PokemonService: PokemonService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      const pokemonId = +params['id'];
      this.getPokemonById(pokemonId -1);
    })

  }

  ngOneInit(): void {
    this.PokemonService.fetchById().subscribe(data => {
      this.pokemons = data;
    })
  }
  
}
