import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { IncripcionI } from 'src/app/models/inscripciones.interface';
import { inscripcion } from 'src/app/models/inscripciones.model';
import {  } from 'src/app/models/user.interface';
import { InscripcionesService } from '../../services/inscripciones.service';
import { InscripcionComponent } from '../modals/inscripcion/inscripcion.component';




@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {

  public dataSource:any = [];
  ELEMENT_DATA: IncripcionI[] = [];
  displayedColumns: string[] = ['Item', 'Nombre Alumno', 'Nombre Curso','correo','telefono','Acciones'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
      private ServiceInscrip:InscripcionesService,
      private readonly dialog: MatDialog
    )
  {}

  ngOnInit(): void {
    this.cargarDatos();
   
  }

  cargarDatos(){
    this.ServiceInscrip.getInscripciones().subscribe(data =>{
      this.dataSource = data 
    })
  }


  AddInscripcion() {
    const dialog = this.dialog.open(InscripcionComponent, {
      data: inscripcion,
    })
    dialog.afterClosed().subscribe((data) => {
      
      this.ServiceInscrip.AddInscripciones(data).subscribe(data =>{
        this.cargarDatos();
      })
    })
  }
  updateInscripcion(inscripcion: inscripcion) {
    const dialog = this.dialog.open(InscripcionComponent, {
      data: inscripcion,
    })
    dialog.afterClosed().subscribe((data) => {
      
      this.ServiceInscrip.updateInscripciones(data).subscribe(data =>{
        this.cargarDatos();
      })
    })
  }

  deleteInscripciones(id:Number){
    let InscripId = id
    this.ServiceInscrip.deleteInscripciones(InscripId).subscribe(data =>{
      this.cargarDatos();
    })  
  }



}
