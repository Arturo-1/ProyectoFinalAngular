import { Injectable } from '@angular/core';
import { interval, Observable, of} from 'rxjs';
import { map, take } from 'rxjs/operators';

import { alumno } from '../models/alumno.models';


@Injectable({
  providedIn: 'root'
})
export class DataObservableService {

  constructor() { }

  public getAlumnos(): Observable<alumno[]>{
    return of([
      {
        id: 1,
        nombre: 'arturo',
        apellidos: 'hernandez reyes',
        edad: 10,
        carrera: 'lic en admin',
        institucion: 'tec',
      }
    ]);
  }

  // public getFecha(): Observable<number>{
  //   return interval(1000).pipe(map( _ => new Date()));
  // }

}
