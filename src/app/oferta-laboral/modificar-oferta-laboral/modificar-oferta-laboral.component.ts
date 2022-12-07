import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { OfertaLaboralService } from 'src/app/services/oferta-laboral.service';
import { PopUpOfertaLaboralComponent } from '../pop-up-oferta-laboral/pop-up-oferta-laboral.component';
import { ActivatedRoute, Router } from '@angular/router';
import { OfertaLaboral } from 'src/app/domain/ofertaLaboral/oferta-laboral';




@Component({
  selector: 'app-modificar-oferta-laboral',
  templateUrl: './modificar-oferta-laboral.component.html',
  styleUrls: ['./modificar-oferta-laboral.component.css']
})

export class ModificarOfertaLaboralComponent implements OnInit{


 @Input()
   ofertaLaboral:OfertaLaboral;

 //ofertaLaboral={nombrePuesto:'',numeroVacantes:'',disponibleHasta:'',tipoHornada:'',extensionContrato:'',enlaceInscripcion:'',nombreOrganizacion:'',
  //              contacto:'',idiomas:'',habilidades:'',habilidadesBlandas:};

 hola:String;


 //@Output() event = new EventEmitter<OfertaLaboral>();



  constructor(private service:OfertaLaboralService,public dialog : MatDialog,private router:Router) {



  }

  ngOnInit(): void {



    /*this.api.searchOfertaLaboral().subscribe(data => {
      console.log(data)
    })*/


    this.service.searchOfertaLaboralID(1).subscribe(data => {
      console.log(data)
      this.ofertaLaboral=data;
    })


  }

 /* openDialog(){
   // const dialogRef = this.dialog.open(PopUpComponent, {restoreFocus: false});
   let dialogRef=this.dialog.open(PopUpOfertaLaboralComponent);
     dialogRef.componentInstance.guardarDatos;
  }*/

  openDialog(){
    // const dialogRef = this.dialog.open(PopUpComponent, {restoreFocus: false});
    let dialogRef=this.dialog.open(PopUpOfertaLaboralComponent);

   /* const dialogSubmitSubscription = dialogRef.componentInstance.guardarDatos.subscribe(data => {
    console. log('Got the data!', data);
    // do something here with the data
    dialogSubmitSubscription.unsubscribe();

   });*/

  }


  saveUpdate(){


    this.service.setData(this.ofertaLaboral).subscribe(data => {
      console.log(data)

    });


  }




}





