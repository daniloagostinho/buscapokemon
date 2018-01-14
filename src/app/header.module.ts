import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';


@NgModule({
  exports: [ HeaderComponent ],
  declarations: [ HeaderComponent ],
  imports: [ CommonModule ]
})
export class HeaderModule {

}
