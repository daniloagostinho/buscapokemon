import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealTimeComponent } from './busca-real-time.component';

@NgModule({
  imports: [ CommonModule],
  declarations: [ RealTimeComponent ],
  exports: [ RealTimeComponent ]
})
export class RealTimeModule {

}
