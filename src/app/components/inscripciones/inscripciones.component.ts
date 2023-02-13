import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';




@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {

  displayedColumns = [
    'item',
    'Nombre Alumno',
    'Curso',
    'Fecha Inscripcion',
  ];
  public dataSource:any = [];
  constructor(){
    
  }

  ngOnInit(): void {
   
  }

}
