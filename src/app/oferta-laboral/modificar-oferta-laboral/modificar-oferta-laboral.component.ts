import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PopUpOfertaLaboralComponent } from '../pop-up-oferta-laboral/pop-up-oferta-laboral.component';




@Component({
  selector: 'app-modificar-oferta-laboral',
  templateUrl: './modificar-oferta-laboral.component.html',
  styleUrls: ['./modificar-oferta-laboral.component.css']
})
export class ModificarOfertaLaboralComponent {

 // @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;


  constructor(public dialog : MatDialog) { }

  openDialog(){
   // const dialogRef = this.dialog.open(PopUpComponent, {restoreFocus: false});
   this.dialog.open(PopUpOfertaLaboralComponent);
    //dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }
}





