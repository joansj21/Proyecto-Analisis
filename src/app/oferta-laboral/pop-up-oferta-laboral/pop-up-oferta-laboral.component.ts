import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-up-oferta-laboral',
  templateUrl: './pop-up-oferta-laboral.component.html',
  styleUrls: ['./pop-up-oferta-laboral.component.css']
})
export class PopUpOfertaLaboralComponent implements OnInit {


  @Input() viejo:String;
  @Input() nuevo:String;


  constructor() { }

  ngOnInit(): void {
  }



  guardarDatos(){

   // console.log(this.viejo)
   // console.log(this.nuevo)

  }

}
