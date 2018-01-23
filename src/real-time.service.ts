import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class RealTimeService {
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  queryUrl = '';

  constructor(private http: Http) { }

  search(terms: Observable<string>) {
    return terms.debounceTime(500)
      .distinctUntilChanged()
      .switchMap(term =>
        this.searchEntries(term));
  }

  searchEntries(term: string) {
    // tslint:disable-next-line:no-unused-expression
    const formatedText = term.charAt(0).toUpperCase() + term.substr(1).toLowerCase();

    return this.http
      .get(this.baseUrl + this.queryUrl + formatedText)
      .map(res => res.json());
  }
}
