import { Component, OnInit } from '@angular/core';
import { OfertaLaboral } from 'src/app/domain/ofertaLaboral/oferta-laboral';


@Component({
  selector: 'app-listar-oferta-laboral',
  templateUrl: './listar-oferta-laboral.component.html',
  styleUrls: ['./listar-oferta-laboral.component.css']
})
export class ListarOfertaLaboralComponent implements OnInit {

    listaOfertaLaboral  : OfertaLaboral[] = [
    {nombrePuesto: "dsadsa", nombreOrganizacion: 'Hydrogen', contacto: "dsdsadsa", fecha: 'H',lugarResidencia:"sdadsa"},
    {nombrePuesto: "dsadsa2", nombreOrganizacion: 'Hydrogen2', contacto: "dsdsadsa2", fecha: 'H2',lugarResidencia:"sdadsa2"}

  ];

  displayedColumns: string[] = ['nombrePuesto', 'nanombreOrganizacionme', 'contacto', 'fecha','lugarResidencia'];
  columnas: string[] = ['nombrePuesto', 'nanombreOrganizacionme', 'contacto', 'fecha','lugarResidencia'];


  constructor() { }

  ngOnInit(): void {
  }

}


