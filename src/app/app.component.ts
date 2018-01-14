import { Component } from '@angular/core';

import { BuscarPokemonService } from './services/BuscarPokemon.service';

@Component({
  selector: 'my-app',
  templateUrl: './app-template.html',
  styleUrls: ['./app.css']
})
export class AppComponent  {
  pokemonPesquisado = new Array();
  clicado: boolean = false;
  isLoading: boolean = false;

  constructor(private pokeService: BuscarPokemonService) {}

  pesquisarPokemon(texto: string) {
    this.isLoading = true;
    this.clicado = true;
    this.pokeService.procurarPokemon(texto).subscribe( response => {
      this.isLoading = false;
      this.pokemonPesquisado = JSON.parse(response._body);
      console.log(this.pokemonPesquisado);
    } );
  }
}
