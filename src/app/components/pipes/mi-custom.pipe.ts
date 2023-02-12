import { Pipe, PipeTransform } from '@angular/core';
import { alumno } from 'src/app/models/alumno.models';

@Pipe({
  name: 'PipeAlumno',
})
export class MiCustomPipe implements PipeTransform {

  transform(value: alumno, ...args: string []): string {
    return value.nombre + " " + value.apellidos;
   
  }

}
