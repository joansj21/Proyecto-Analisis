import {Component, Input, OnInit} from '@angular/core';
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


 @Input() ofertaLaboral:OfertaLaboral;



  constructor(private api:OfertaLaboralService,public dialog : MatDialog,private router:Router) {



  }

  ngOnInit(): void {



    /*this.api.searchOfertaLaboral().subscribe(data => {
      console.log(data)
    })*/


    this.api.searchOfertaLaboralID(1).subscribe(data => {
      console.log(data)
      //this.OfertaLaboral=data;
    })


  }

  openDialog(){
   // const dialogRef = this.dialog.open(PopUpComponent, {restoreFocus: false});
   let dialogRef=this.dialog.open(PopUpOfertaLaboralComponent);
     // dialogRef.componentInstance.
  }

  guardarOfertaLaboral(){




  }




}





