import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderModule } from './header.module';
import { SearchModule } from './search.module';
import { PokemonCardModule } from './pokemon-card.module';
import { BuscarPokemonService } from './services/BuscarPokemon.service';

import { HttpModule } from '@angular/http';
import { RealTimeModule } from './real-time.module';
import { RealTimeService } from '../real-time.service';


@NgModule({
  imports: [
      BrowserModule,
      HeaderModule,
      SearchModule,
      PokemonCardModule,
      HttpModule,
      RealTimeModule
    ],
  declarations: [ AppComponent ],
  providers: [
    BuscarPokemonService,
    RealTimeService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


