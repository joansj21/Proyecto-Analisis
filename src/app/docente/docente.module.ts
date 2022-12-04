import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocenteRoutingModule } from './docente-routing.module';
import { ListarDocentesComponent } from './listar-docentes/listar-docentes.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../app-material/app-material.module';


@NgModule({
  declarations: [
    ListarDocentesComponent
  ],
  imports: [
    CommonModule,
    DocenteRoutingModule,
    FlexLayoutModule,
    AppMaterialModule
  ]
})
export class DocenteModule { }
