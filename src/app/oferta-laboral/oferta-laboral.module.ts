import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertaLaboralRoutingModule } from './oferta-laboral-routing.module';
import { ModificarOfertaLaboralComponent} from './modificar-oferta-laboral/modificar-oferta-laboral.component';
import { ListarOfertaLaboralComponent } from './listar-oferta-laboral/listar-oferta-laboral.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PopUpOfertaLaboralComponent } from './pop-up-oferta-laboral/pop-up-oferta-laboral.component';



@NgModule({
  declarations: [
    ModificarOfertaLaboralComponent,
    ListarOfertaLaboralComponent,
    PopUpOfertaLaboralComponent


  ],
  imports: [
    CommonModule,
    OfertaLaboralRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
  ]
})
export class OfertaLaboralModule { }
