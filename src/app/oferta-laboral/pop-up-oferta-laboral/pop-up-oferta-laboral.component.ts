import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-oferta-laboral',
  templateUrl: './pop-up-oferta-laboral.component.html',
  styleUrls: ['./pop-up-oferta-laboral.component.css']
})
export class PopUpOfertaLaboralComponent {


  @Input() viejo:String;
  @Input() nuevo:String;
  @Output() submitClicked = new EventEmitter<any>();


  constructor(public dialogRef: MatDialogRef<PopUpOfertaLaboralComponent>) { }




  guardarDatos(){

   let data={
      dataNuevo:this.nuevo,
      dataviejo:this.viejo,
    }
   this.submitClicked.emit(data);

   this.dialogRef.close();
  }




}
