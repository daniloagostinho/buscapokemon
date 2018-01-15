import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';

@Injectable()
export class BuscarPokemonService {

  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  procurarPokemon(texto: string) {
    return this.getPokemon(texto);
  }

  getPokemon(texto: string): Observable<any> {
    let result = this.http
      .get(`https://pokeapi.co/api/v2/pokemon/${texto}`);

    return result;
  }
}
