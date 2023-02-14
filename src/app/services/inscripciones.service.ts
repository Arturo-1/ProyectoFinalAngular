import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { IncripcionI } from '../models/inscripciones.interface';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  API_SERVER:string = environment.baseURL
  constructor(
    private http:HttpClient,
    ) {
  }

  getInscripciones():Observable<IncripcionI[]>{
    console.log(this.API_SERVER)
    return this.http.get<IncripcionI[]>(`${this.API_SERVER}inscripciones`);
  }

  AddInscripciones(form:any):Observable<any>{
    let rutaURL = `${this.API_SERVER}inscripciones` ;
    return this.http.post<any>(rutaURL, form)
  }
  
  updateInscripciones(form:any):Observable<IncripcionI>{
    let InscripId = form.id
    let rutaURL = `${this.API_SERVER}inscripciones/${InscripId}`
    return this.http.put<IncripcionI>(rutaURL, form)
  }

  
  deleteInscripciones(id:any): Observable<any>{
    let rutaURL = `${this.API_SERVER}inscripciones/${id}`  
    return this.http.delete<any>(rutaURL, id)
  }

}
