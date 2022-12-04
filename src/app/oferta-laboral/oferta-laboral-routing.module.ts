import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarOfertaLaboralComponent } from './listar-oferta-laboral/listar-oferta-laboral.component';
import { ModificarOfertaLaboralComponent } from './modificar-oferta-laboral/modificar-oferta-laboral.component';

const routes: Routes = [{path:"modificarOfertaLaboral",component:ModificarOfertaLaboralComponent},{path:"listarOferta",component:ListarOfertaLaboralComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfertaLaboralRoutingModule { }
