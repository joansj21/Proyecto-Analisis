import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { OfertaLaboral } from 'src/app/domain/ofertaLaboral/oferta-laboral';

@Component({
  selector: 'app-pop-up-oferta-laboral',
  templateUrl: './pop-up-oferta-laboral.component.html',
  styleUrls: ['./pop-up-oferta-laboral.component.css']
})
export class PopUpOfertaLaboralComponent {


  @Input() viejo:String;
  @Input() nuevo:String;
  @Input() nombre:String;
  @Output() submitClicked = new EventEmitter<any>();


  constructor(public dialogRef: MatDialogRef<PopUpOfertaLaboralComponent>) {

  }




  guardarDatos(){

   let data={
      dataNuevo:this.nuevo,
      dataviejo:this.viejo,
    }
   this.submitClicked.emit(this.nuevo);

   this.dialogRef.close();
  }


salir(){
  this.dialogRef.close();
}

}
