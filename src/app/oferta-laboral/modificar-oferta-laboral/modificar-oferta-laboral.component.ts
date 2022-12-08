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

    let data=this.ofertaLaboral.idiomas;
    dialogRef.componentInstance.nombre="Idioma";

    if (data!== undefined) {
    dialogRef.componentInstance.viejo=data;
    dialogRef.componentInstance.nuevo=data;

    }



    const dialogSubmitSubscription = dialogRef.componentInstance.submitClicked
    .subscribe(result => {
      console.log('Got the data!', result);

      this.ofertaLaboral.idiomas=result;
      dialogSubmitSubscription.unsubscribe();
    });

  }


  openDialogHabilidades(){

    let dialogRef=this.dialog.open(PopUpOfertaLaboralComponent);

    let data=this.ofertaLaboral.habilidadesTecnicas;
    dialogRef.componentInstance.nombre="Habilidades Tecnicas";
    if (data!== undefined) {
    dialogRef.componentInstance.viejo=data;
    dialogRef.componentInstance.nuevo=data;

    }



    const dialogSubmitSubscription = dialogRef.componentInstance.submitClicked
    .subscribe(result => {
      console.log('Got the data!', result);

      this.ofertaLaboral.habilidadesTecnicas=result;
      dialogSubmitSubscription.unsubscribe();
    });

  }



  openDialogHabilidadesBlandas(){

    let dialogRef=this.dialog.open(PopUpOfertaLaboralComponent);

    let data=this.ofertaLaboral.habilidadesBlandas;
    dialogRef.componentInstance.nombre="Habilidades Blandas";
    if (data!== undefined) {
    dialogRef.componentInstance.viejo=data;
    dialogRef.componentInstance.nuevo=data;

    }



    const dialogSubmitSubscription = dialogRef.componentInstance.submitClicked
    .subscribe(result => {
      console.log('Got the data!', result);
      this.ofertaLaboral.habilidadesBlandas=result;
      dialogSubmitSubscription.unsubscribe();
    });

  }

  openDialogCertificados(){

    let dialogRef=this.dialog.open(PopUpOfertaLaboralComponent);

    let data=this.ofertaLaboral.certificaciones;
    dialogRef.componentInstance.nombre="Certificados";
    if (data!== undefined) {
    dialogRef.componentInstance.viejo=data;
    dialogRef.componentInstance.nuevo=data;

    }



    const dialogSubmitSubscription = dialogRef.componentInstance.submitClicked
    .subscribe(result => {
      console.log('Got the data!', result);

      this.ofertaLaboral.certificaciones=result;
      dialogSubmitSubscription.unsubscribe();
    });

  }

  openDialogCertificadosExperienciaLaboral(){

    let dialogRef=this.dialog.open(PopUpOfertaLaboralComponent);

    let data=this.ofertaLaboral.experienciaLaboral;

    dialogRef.componentInstance.nombre="ExperienciaLaboral";
    if (data!== undefined) {
    dialogRef.componentInstance.viejo=data;
    dialogRef.componentInstance.nuevo=data;

    }



    const dialogSubmitSubscription = dialogRef.componentInstance.submitClicked
    .subscribe(result => {
      console.log('Got the data!', result);
      this.ofertaLaboral.experienciaLaboral=result;
      dialogSubmitSubscription.unsubscribe();
    });

  }



  saveUpdate(){


    this.service.setData(this.ofertaLaboral).subscribe(data => {
      console.log(data)

    });


  }




}





