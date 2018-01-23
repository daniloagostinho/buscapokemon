import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { RealTimeService } from '../real-time.service';

import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'search',
  moduleId: module.id,
  templateUrl: './search-template.html',
  styleUrls: ['./search.scss']
})
export class SearchComponent {
  textoPesquisadoModel: string;
  formGroup: FormGroup;

  @Output() clicouEmPesquisar: EventEmitter<any> = new EventEmitter();

  resultadoPokemon = [];
  searchTerm$ = new Subject<string>();

  clicado: boolean = false;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private realTimeBusca: RealTimeService) {
    this.formGroup = this.fb.group({
      textoPesquisado: ['']
    });

    this.realTimeBusca.search(this.searchTerm$)
    .subscribe(hero => {
      this.isLoading = false;
      this.resultadoPokemon = hero;
    });
  }

  quandoPrecionarEnter(event) {
    const enterKey = event.keyCode;
    this.isLoading = true;
    this.clicado = true;
    if ( enterKey == 13 ) {
      console.log('vc digitou ENTER');
      console.log(this.textoPesquisadoModel);
      this.clicouEmPesquisar.emit(this.textoPesquisadoModel);
    }

  }
  quandoClicarPesquisar() {
    this.clicouEmPesquisar.emit(this.textoPesquisadoModel);
  }
}
