import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, FormsModule ],
  declarations: [ SearchComponent ],
  exports: [ SearchComponent ]
})
export class SearchModule {

}
