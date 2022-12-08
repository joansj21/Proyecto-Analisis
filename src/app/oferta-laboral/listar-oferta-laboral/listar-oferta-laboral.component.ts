import { Component, OnInit } from '@angular/core';
import { OfertaLaboral } from 'src/app/domain/ofertaLaboral/oferta-laboral';
import { ActivatedRoute, Router } from '@angular/router';
import { OfertaLaboralService } from 'src/app/services/oferta-laboral.service';
import { ModificarOfertaLaboralComponent } from '../modificar-oferta-laboral/modificar-oferta-laboral.component';


@Component({
  selector: 'app-listar-oferta-laboral',
  templateUrl: './listar-oferta-laboral.component.html',
  styleUrls: ['./listar-oferta-laboral.component.css']
})
export class ListarOfertaLaboralComponent implements OnInit {

  ofertaLaboral : any=[];

  constructor(public rest:OfertaLaboralService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.get();
  }

  get(){
    this.ofertaLaboral= [];
    this.rest.getOfertasLaborales().subscribe((data:{})=>{
      console.log(data);
      this.ofertaLaboral=data;
      //this.ofertaLaboral=this.arrayRemove(this.ofertaLaboral,this.ofertaLaboral[0]);
    });
  }

  arrayRemove(arr:any, value:any) {

    return arr.filter(function (ele:any) {
        return ele != value;
    });

   }


   modificarOfertaLaboral(id:String){


    //alert(id)

    let modificar=this.router.navigate(['/modificarOfertaLaboral/'+id]);









   }

}

