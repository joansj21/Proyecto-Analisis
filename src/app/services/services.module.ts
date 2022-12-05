import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocenteService } from './docente.service';
import { OfertaLaboralService } from './oferta-laboral.service';



@NgModule({
  providers:[DocenteService,OfertaLaboralService],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { }
