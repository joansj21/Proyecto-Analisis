import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { catchError, Observable, of, tap } from 'rxjs';

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




}
