import { Component, OnInit,Input, Output,EventEmitter, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
// import { ModalsComponent } from '../components/modals/modals.component';
// import { AddAlumnoComponent } from '../components/modals/add-alumno/add-alumno.component';
import { MatDialogRef, MatDialog  } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { alumno } from 'src/app/models/alumno.models';
import { MatSelectModule } from '@angular/material/select';
import { AddAlumnoComponent } from '../modals/add-alumno/add-alumno.component';
import { DataSource } from '@angular/cdk/collections';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  

  displayedColumns = [
    'id',
    'nombre',
    'edad',
    'carrera',
    'institucion',
    'star',
  ];
  

  // displayedColumns: string[] = ['id', 'nombre', 'edad', 'carrera', 'institucion'];
  // dataSource = alumnos;
  
  @ViewChild('closeModal') closeModal!: ElementRef;
  @ViewChild('fCLick') fCLick!: ElementRef<HTMLElement>;
  
  formularioPrincipal:any
  textoDeInput = new FormControl('');
  public colorFiltro:string ='';
  secContent:boolean = false;
dataArreglo:any = []
alumnos: alumno[]=[];

datoValidate2:number = 0;
@Output() dataSource2 = new EventEmitter();
filtroBusqueda:boolean = false;
opcionSeleccionado:number = 0;
verSeleccion:number = 0;
valorFIltro:string = '';
valorInput: any;
valorPrueba:boolean = false;
  public dataSource:any = [];
  // public dataSource2:any = [];

  constructor(
    private fb: FormBuilder,
    private MatButtonModule:MatButtonModule,
    private ref: ChangeDetectorRef,
    private el: ElementRef,
    private readonly dialog: MatDialog,
    private serviceAlumno: AlumnosService 
    // private servicio: DataObservableService
    // private readonly dialogRef: MatDialog<AddAlumnoComponent>

  ) {
    this.formularioPrincipal = FormGroup;
  }

  ngOnInit(): void {
    this.cargarDatos();
    
    // this.servicio.getAlumnos().subscribe(valores =>{
    //   console.log("data valores:", valores)
    // });
    // this.servicio.getFecha().subscribe(valor =>{
    //   console.log("valor emitido:", valor)
    // })
    this.formularioPrincipal = this.fb.group
    this.dataSource =this.alumnos
    this.verSeleccion = 0;
    this.colorFiltro = 'color0';
  }

  cargarDatos(){
    this.serviceAlumno.getAlumnos().subscribe(data =>{
      this.alumnos= data
      this.dataSource = this.alumnos
      console.log("DATA CURSOS:",this.dataSource)
    })
  }

  triggerFalseClick() {
    let el: HTMLElement = this.fCLick.nativeElement;
    el.click();
  }

  capturar() {
    // this.valorEnviado.emit(this.datoPaso);
    console.log("entre")
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
    if(this.verSeleccion != 0){
      this.filtroBusqueda = true;
    }
    if(this.verSeleccion == 1){
      this.valorFIltro = 'Carrera'
      
    }else if(this.verSeleccion == 2){
      this.valorFIltro = 'Institucion'
    }else{
      this.valorFIltro = 'Nombre'
    }
    console.log("valor de select:",this.verSeleccion);
    console.log("valor de Busqueda:",this.valorFIltro)
   
  }

  nuevaBusqueda(){
    this.ngOnInit();
    this.opcionSeleccionado = 0;
    this.valorInput = '';
    this.filtroBusqueda = false;
    console.log("arreglo inicial:", this.dataSource)
  }

  ValorBusqueda() {
    let sol = this.textoDeInput.value;
    console.log("data obtenida final:", sol);
    this.valorPrueba = true;
    console.log("arreglo inicial:", this.dataSource)
    if(this.verSeleccion == 3){
      let busqueda = sol;
      let expresion = new RegExp(`${busqueda}.*`, "i");
      this.dataSource=this.alumnos.filter(alumno => expresion.test(alumno.nombre));
      this.dataSource=this.alumnos.filter(alumno => expresion.test(alumno.apellidos));
      // this.dataArreglo=this.alumnos.filter(alumno => alumno.nombre === sol )
      this.colorFiltro = 'color1';
      console.log("data filtro like:", this.dataSource);
      console.log("arreglo inicial:", this.dataSource)
    }
    if(this.verSeleccion == 2){

      let busqueda = sol;
      let expresion = new RegExp(`${busqueda}.*`, "i");
      this.dataSource=this.alumnos.filter(alumno => expresion.test(alumno.institucion));
      // this.dataArreglo = this.alumnos.filter(alumno => alumno.institucion === sol.trim())
      this.colorFiltro = 'color2';
      console.log("data nueva institucion:",this.dataSource)
    }
    if(this.verSeleccion == 1){
      let busqueda = sol;
      let expresion = new RegExp(`${busqueda}.*`, "i");
      this.dataSource=this.alumnos.filter(alumno => expresion.test(alumno.carrera));
      // this.dataArreglo = this.alumnos.filter(alumno => alumno.carrera === sol.trim())
      this.colorFiltro = 'color3';
      console.log("data nueva institucion:",this.dataSource)
    }
    if(this.dataSource.length == 0){
      alert("Busqueda no encontrada, seleccione nuevamente");
      this.nuevaBusqueda();
    }
  }

  

  DetailAlumno(alumno:alumno){
    this.serviceAlumno.AlumnoObservableData = alumno;
  }
   
  AddAlumno() {
    const dialog = this.dialog.open(AddAlumnoComponent, {
      data: alumno,
    })
    dialog.afterClosed().subscribe((data) => {
      
      this.serviceAlumno.AddAlumno(data).subscribe(data =>{
        this.cargarDatos();
      })
    })
  }

  updateAlumno(alumno: alumno) {
    const dialog = this.dialog.open(AddAlumnoComponent, {
      data: alumno,
    })
    dialog.afterClosed().subscribe((data) => {
      
      this.serviceAlumno.updateAlumno(data).subscribe(data =>{
        this.cargarDatos();
      })
    })
  }

  deleteAlumno(id:number){
    let alumnoId = id
    this.serviceAlumno.deleteAlumno(alumnoId).subscribe(data =>{
      this.cargarDatos();
    }
      
    )
    
  }

}