import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigieAlumniHeaderComponent } from './sigie-alumni-header/sigie-alumni-header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SigieNavbarComponent } from './sigie-navbar/sigie-navbar.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { DocenteModule } from '../docente/docente.module';
import { DocenteRoutingModule } from '../docente/docente-routing.module';
import { AppRoutingModule } from '../app-routing.module';
import { OfertaLaboralModule } from '../oferta-laboral/oferta-laboral.module';
import { OfertaLaboralRoutingModule } from '../oferta-laboral/oferta-laboral-routing.module';
import { SigieFooterComponent } from './sigie-footer/sigie-footer.component';




@NgModule({
  declarations: [
    SigieAlumniHeaderComponent,
    SigieNavbarComponent,
    SigieFooterComponent,
    SigieFooterComponent


  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AppMaterialModule,
    OfertaLaboralModule,
    OfertaLaboralRoutingModule,

  ],
  exports:[
SigieAlumniHeaderComponent,
SigieNavbarComponent,
OfertaLaboralModule,
OfertaLaboralRoutingModule,
SigieFooterComponent

  ]
})
export class CoreModule { }
