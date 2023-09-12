import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { DeletePokemonComponent } from './delete-pokemon/delete-pokemon.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'details', component: PokemonDetailsComponent},
  { path: 'delete', component: DeletePokemonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
