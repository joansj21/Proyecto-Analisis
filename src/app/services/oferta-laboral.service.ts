import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { catchError, Observable, of, tap } from 'rxjs';
import { OfertaLaboral } from '../domain/ofertaLaboral/oferta-laboral';

//const url:string="/api/ofertaLaboral";
const url:string="http://localhost:8084/api/ofertaLaboral";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer'
  })
};

@Injectable({
  providedIn: 'root'
})

export class OfertaLaboralService {


  constructor(private http:HttpClient) {}



  searchOfertaLaboral():Observable<any>{

    let urlEndPoint=url+"/getAll"


    return  this.http.get<any>(urlEndPoint,httpOptions);

  }


  searchOfertaLaboralID(id:number):Observable<OfertaLaboral>{

    let urlEndPoint=url+"/getOfertaLaboral/"+id


    return  this.http.get<OfertaLaboral>(urlEndPoint,httpOptions);

  }


  setData(ofertaLaboral:OfertaLaboral){

    let urlEndPoint=url+'/update';
    console.log(urlEndPoint)
    console.log(ofertaLaboral)

    return this.http.put<OfertaLaboral>(urlEndPoint,ofertaLaboral,httpOptions);

  }




}
