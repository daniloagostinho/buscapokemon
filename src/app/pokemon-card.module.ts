import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonCardComponent } from './pokemon-card.component';

import { OpcoesImagemDirective } from './opcoes-imagem.directive';

@NgModule({
  imports: [ CommonModule ],
  exports: [ PokemonCardComponent ],
  declarations: [ PokemonCardComponent, OpcoesImagemDirective ]
})
export class PokemonCardModule {

}
