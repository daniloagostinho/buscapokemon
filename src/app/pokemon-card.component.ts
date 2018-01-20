import { Component, Input } from '@angular/core';

export interface Pokemon {
  name: string;
  result: string;
  moves: string;
  sprites: string;
  front_default;
  pokemon: string;
  base_experience: string;
  id: string;
}

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card-template.html',
  styleUrls: ['./card.scss']
})
export class PokemonCardComponent {
  @Input() pokemon: Pokemon;

  premiado(nome: string) {
    if ( nome === 'charizard' ) {
       return true;
    }

    return false;
  }
}
