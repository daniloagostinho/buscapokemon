import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderModule } from './header.module';
import { SearchModule } from './search.module';
import { PokemonCardModule } from './pokemon-card.module';
import { BuscarPokemonService } from './services/BuscarPokemon.service';

import { HttpModule } from '@angular/http';
import { RealTimeModule } from './real-time.module';
import { RealTimeService } from '../real-time.service';
import { FooterModule } from './footer.module';



@NgModule({
  imports: [
      BrowserModule,
      HeaderModule,
      SearchModule,
      PokemonCardModule,
      HttpModule,
      RealTimeModule,
      FooterModule
    ],
  declarations: [ AppComponent ],
  providers: [
    BuscarPokemonService,
    RealTimeService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


