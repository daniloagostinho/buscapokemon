import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { RealTimeService } from '../real-time.service';

import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'search',
  moduleId: module.id,
  templateUrl: './search-template.html',
  styleUrls: ['./search.css']
})
export class SearchComponent {
  textoPesquisadoModel: string;
  formGroup: FormGroup;

  @Output() clicouEmPesquisar: EventEmitter<any> = new EventEmitter();

  resultadoPokemon = [];
  searchTerm$ = new Subject<string>();

  constructor(
    private fb: FormBuilder,
    private realTimeBusca: RealTimeService) {
    this.formGroup = this.fb.group({
      textoPesquisado: ['']
    });

    this.realTimeBusca.search(this.searchTerm$)
    .subscribe(hero => {
      this.resultadoPokemon = hero;
    });  
  }

  verObj() {
    console.log('valor do objeto: ', this.resultadoPokemon);
  }

  quandoPrecionarEnter(event) {
    const enterKey = event.keyCode;

    if ( enterKey == 13 ) {
      console.log('vc digitou ENTER');
      this.clicouEmPesquisar.emit(this.textoPesquisadoModel);
    }

  }
  quandoClicarPesquisar() {
    this.clicouEmPesquisar.emit(this.textoPesquisadoModel);
  }
}
