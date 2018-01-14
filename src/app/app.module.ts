import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderModule } from './header.module';
import { SearchModule } from './search.module';
import { PokemonCardModule } from './pokemon-card.module';
import { BuscarPokemonService } from './services/BuscarPokemon.service';

import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
      BrowserModule,
      HeaderModule,
      SearchModule,
      PokemonCardModule,
      HttpModule
    ],
  declarations: [ AppComponent ],
  providers: [
    BuscarPokemonService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


