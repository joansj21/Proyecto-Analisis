import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { catchError, Observable, of, tap } from 'rxjs';
import { OfertaLaboral } from '../domain/ofertaLaboral/oferta-laboral';

const url:string="/api/ofertaLaboral";

const requestOptions = {
  method: 'get',
  headers: {'Content-Type': 'application/json' },

};

@Injectable({
  providedIn: 'root'
})

export class OfertaLaboralService {


  constructor(private http:HttpClient) {}



  searchOfertaLaboral():Observable<any>{

    let urlEndPoint=url+"/getAll"


    return  this.http.get<any>(urlEndPoint,requestOptions);

  }


  searchOfertaLaboralID(id:number):Observable<OfertaLaboral>{

    let urlEndPoint=url+"/getOfertaLaboral/"+id


    return  this.http.get<OfertaLaboral>(urlEndPoint,requestOptions);

  }





}
