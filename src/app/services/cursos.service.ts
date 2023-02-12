import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { BehaviorSubject, Observable } from 'rxjs';

import { ResponseI } from '../models/response.interface';
import { Curso } from '../models/curso';


@Injectable({
  providedIn: 'root'
})
export class CursosService {
  public dispCursoPrivate:BehaviorSubject<Curso> = new BehaviorSubject<any>({})

   

  API_SERVER:string = environment.baseURL
  constructor(
    private http:HttpClient,
    ) {
  }
get CursoObserbable(){
  return this.dispCursoPrivate.asObservable();
}
set CursoObservableData(data:Curso){
  this.dispCursoPrivate.next(data)
}

  getCursos():Observable<Curso[]>{
    console.log(this.API_SERVER)
    return this.http.get<Curso[]>(`${this.API_SERVER}/cursos`);
  }

  AddCurso(form:any):Observable<any>{
    let rutaURL = `${this.API_SERVER}/cursos` ;
    return this.http.post<any>(rutaURL, form)
  }
  
  updateCurso(form:any):Observable<Curso>{
    let cursoId = form.id
    let rutaURL = `${this.API_SERVER}cursos/${cursoId}`
    return this.http.put<Curso>(rutaURL, form)
  }

  
  deleteCurso(id:any): Observable<any>{
    let rutaURL = `${this.API_SERVER}cursos/${id}`  
    return this.http.delete<any>(rutaURL, id)
  }
  
}
