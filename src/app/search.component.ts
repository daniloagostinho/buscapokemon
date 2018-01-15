import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      textoPesquisado: ['']
    });
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
