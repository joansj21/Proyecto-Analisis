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
   @Input() id:any;


  constructor(private service:OfertaLaboralService,public dialog : MatDialog,private router:Router,private route:ActivatedRoute) {


    this.id=this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {




    this.service.searchOfertaLaboralID(this.id).subscribe(data => {
      console.log(data)
      this.ofertaLaboral=data;
    })


  }


  openDialogIdioma(){

    let dialogRef=this.dialog.open(PopUpOfertaLaboralComponent);

    let data=this.ofertaLaboral.nombrePuesto;

    if (data!== undefined) {
    dialogRef.componentInstance.viejo=data;
    dialogRef.componentInstance.nombre="Idioma";
    }



    const dialogSubmitSubscription = dialogRef.componentInstance.submitClicked
    .subscribe(result => {
      console.log('Got the data!', result);
      // do something here with the data
      dialogSubmitSubscription.unsubscribe();
    });

  }


  openDialogHabilidades(){

    let dialogRef=this.dialog.open(PopUpOfertaLaboralComponent);

    let data=this.ofertaLaboral.nombrePuesto;

    if (data!== undefined) {
    dialogRef.componentInstance.viejo=data;
    dialogRef.componentInstance.nombre="Habilidades";
    }



    const dialogSubmitSubscription = dialogRef.componentInstance.submitClicked
    .subscribe(result => {
      console.log('Got the data!', result);
      // do something here with the data
      dialogSubmitSubscription.unsubscribe();
    });

  }



  openDialogHabilidadesBlandas(){

    let dialogRef=this.dialog.open(PopUpOfertaLaboralComponent);

    let data=this.ofertaLaboral.nombrePuesto;

    if (data!== undefined) {
    dialogRef.componentInstance.viejo=data;
    dialogRef.componentInstance.nombre="Habilidades Blandas";
    }



    const dialogSubmitSubscription = dialogRef.componentInstance.submitClicked
    .subscribe(result => {
      console.log('Got the data!', result);
      // do something here with the data
      dialogSubmitSubscription.unsubscribe();
    });

  }

  openDialogCertificados(){

    let dialogRef=this.dialog.open(PopUpOfertaLaboralComponent);

    let data=this.ofertaLaboral.nombrePuesto;

    if (data!== undefined) {
    dialogRef.componentInstance.viejo=data;
    dialogRef.componentInstance.nombre="Certificados";
    }



    const dialogSubmitSubscription = dialogRef.componentInstance.submitClicked
    .subscribe(result => {
      console.log('Got the data!', result);
      // do something here with the data
      dialogSubmitSubscription.unsubscribe();
    });

  }

  openDialogCertificadosExperienciaLaboral(){

    let dialogRef=this.dialog.open(PopUpOfertaLaboralComponent);

    let data=this.ofertaLaboral.nombrePuesto;

    if (data!== undefined) {
    dialogRef.componentInstance.viejo=data;

    dialogRef.componentInstance.nombre="ExperienciaLaboral";
    }



    const dialogSubmitSubscription = dialogRef.componentInstance.submitClicked
    .subscribe(result => {
      console.log('Got the data!', result);
      // do something here with the data
      dialogSubmitSubscription.unsubscribe();
    });

  }



  saveUpdate(){


    this.service.setData(this.ofertaLaboral).subscribe(data => {
      console.log(data)

    });


  }




}





