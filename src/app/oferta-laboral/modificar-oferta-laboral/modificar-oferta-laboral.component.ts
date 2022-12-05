import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { OfertaLaboralService } from 'src/app/services/oferta-laboral.service';
import { PopUpOfertaLaboralComponent } from '../pop-up-oferta-laboral/pop-up-oferta-laboral.component';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-modificar-oferta-laboral',
  templateUrl: './modificar-oferta-laboral.component.html',
  styleUrls: ['./modificar-oferta-laboral.component.css']
})
export class ModificarOfertaLaboralComponent implements OnInit{

 // @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;


  constructor(private api:OfertaLaboralService,public dialog : MatDialog,private router:Router) { }

  ngOnInit(): void {


    console.log("holas")
    this.api.searchOfertaLaboral().subscribe(data => {
      console.log(data)
    })


  }

  openDialog(){
   // const dialogRef = this.dialog.open(PopUpComponent, {restoreFocus: false});
   this.dialog.open(PopUpOfertaLaboralComponent);
    //dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }




}





