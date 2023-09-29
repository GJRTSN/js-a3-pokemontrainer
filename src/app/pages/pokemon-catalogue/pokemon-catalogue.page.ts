import { Component } from '@angular/core';
import { DUMMY_DATA } from 'src/app/api/dummyData'; // Import DUMMY_DATA from the dummyData.ts file

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.page.html',
  styleUrls: ['./pokemon-catalogue.page.scss'],
})
export class PokemonCataloguePage {
  allPokemon = DUMMY_DATA; // Assign DUMMY_DATA to the allPokemon array

  collectPokemon(pokemon: any) {
    // Your logic to collect the Pokemon goes here
  }
}
