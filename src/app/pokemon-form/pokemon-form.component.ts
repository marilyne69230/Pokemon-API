import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PokemonService } from '../pokemon.service';
import { PokemonInterface } from '../pokemon.interface';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent {

  constructor(private service: PokemonService) {}

  ngOnInit() {

  }

  onSubmmit(form:NgForm) {

  }
}
