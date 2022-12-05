import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfertaLaboralService {

   url:string="http://localhost:8084/api/ofertaLaboral";

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer'
    })
  };

  constructor(private http:HttpClient) {


  }

  searchOfertaLaboral(){

    let urlEndPoint=this.url+"/getAll"

    console.log(urlEndPoint)


    return this.http.get(urlEndPoint);

  }



}
