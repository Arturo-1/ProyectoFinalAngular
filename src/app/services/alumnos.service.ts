import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { alumno } from '../models/alumno.models';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  API_SERVER:string = environment.baseURL

  public dispAlumnoPrivate:BehaviorSubject<alumno> = new BehaviorSubject<alumno>({
    id: 1, 
    nombre:'prueba', 
    apellidos: "prueba",
    edad: 0,
    carrera: "carrera",
    institucion: "institucion",
  })
  
  constructor(private http:HttpClient) { }

  get AlumnoObserbable(){
    return this.dispAlumnoPrivate.asObservable();
  }
  set AlumnoObservableData(data:alumno){
    this.dispAlumnoPrivate.next(data)
  }

  getAlumnos():Observable<alumno[]>{
    console.log(this.API_SERVER)
    return this.http.get<alumno[]>(`${this.API_SERVER}/alumnos`);
  }
  AddAlumno(form:any):Observable<alumno[]>{
    let rutaURL = `${this.API_SERVER}/alumnos` ;
    return this.http.post<any>(rutaURL, form)
  }
  

  updateAlumno(dataUpdate:any):Observable<alumno>{
    let alumnoId = dataUpdate.id
    let rutaURL = `${this.API_SERVER}alumnos/${alumnoId}`
    return this.http.put<alumno>(rutaURL, dataUpdate)
  }

  deleteAlumno(id:any): Observable<any>{
    let rutaURL = `${this.API_SERVER}alumnos/${id}`  
    return this.http.delete<any>(rutaURL, id)
  }


}
