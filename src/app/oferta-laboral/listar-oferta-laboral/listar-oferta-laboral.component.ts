import { Component, OnInit } from '@angular/core';
import { OfertaLaboral } from 'src/app/domain/ofertaLaboral/oferta-laboral';
import { ActivatedRoute, Router } from '@angular/router';
import { OfertaLaboralService } from 'src/app/services/oferta-laboral.service';
import { ModificarOfertaLaboralComponent } from '../modificar-oferta-laboral/modificar-oferta-laboral.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-listar-oferta-laboral',
  templateUrl: './listar-oferta-laboral.component.html',
  styleUrls: ['./listar-oferta-laboral.component.css']
})

export class ListarOfertaLaboralComponent implements  AfterViewInit, OnInit {

  displayedColumns: string[] = [
    'puesto_ofertado',
    'organizacion',
    'contacto',
    'fecha_caducidad',
    'action',
  ];

  dataSource = new MatTableDataSource();

  //ofertaLaboral : any=[];

  constructor(public rest:OfertaLaboralService,private route:ActivatedRoute,private router:Router) { }

  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.get();
  }

  applyFilter(event: Event) {
    this.get();
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  get(){
    //this.ofertaLaboral= [];
    this.rest.getOfertasLaborales().subscribe((dataS)=>{
      this.dataSource.data = dataS;
      //this.ofertaLaboral=this.arrayRemove(this.ofertaLaboral,this.ofertaLaboral[0]);
    });
  }

  arrayRemove(arr:any, value:any) {

    return arr.filter(function (ele:any) {
        return ele != value;
    });

   }


   modificarOfertaLaboral(id:String){

    let modificar=this.router.navigate(['/modificarOfertaLaboral/'+id]);
   }


}
