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



  getOfertasLaborales():Observable<any>{
    return  this.http.get(url+'/getAll', httpOptions).pipe(
      catchError(this.handleError('GetAllOfertaError'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
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
