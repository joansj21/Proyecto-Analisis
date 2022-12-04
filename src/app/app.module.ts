import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DocenteModule } from './docente/docente.module';
import { DocenteRoutingModule } from './docente/docente-routing.module';
import { ServicesModule } from './services/services.module';
import { OfertaLaboralModule } from './oferta-laboral/oferta-laboral.module';
import { OfertaLaboralRoutingModule } from './oferta-laboral/oferta-laboral-routing.module';





@NgModule({
  declarations: [
    AppComponent
  ],

    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CoreModule,
        FlexLayoutModule,
        DocenteModule,
        DocenteRoutingModule,
        ServicesModule,
        OfertaLaboralModule,
        OfertaLaboralRoutingModule,


    ]
})
export class AppModule { }
