import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { CursosService } from '../../../services/cursos.service';
import { Curso } from 'src/app/models/curso';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-edit-curso',
  templateUrl: './edit-curso.component.html',
  styleUrls: ['./edit-curso.component.css']
})
export class EditCursoComponent implements OnInit {

  cursoForm:FormGroup;
  arrayData:Curso[] | undefined
  
  resdata:any
  data$: any;
  dataCurso: any;
  constructor( 
    private fb:FormBuilder,
    private serviceCurso: CursosService,
    private router:Router
    // private readonly data: AddCursoComponent,
  //  public data: Curso | null,  
   
    ) {
      console.log()

      this.cursoForm = this.fb.group({
        id: [''],
        nombre: ['', [Validators.required]],
        area: ['', [Validators.required]],
        tutor: ['', [Validators.required]],
        fecha_inicio: ['', [Validators.required]],
        codigo:['', [Validators.required]],
        precio:['', [Validators.required]],
        descripcion:['', [Validators.required]],
  
      })

      


   }

  ngOnInit(): void {
    this.cargarDatos();
  }
  cargarDatos(){
    this.data$ =this.serviceCurso.CursoObserbable;
      this.dataCurso= this.data$.source._value;
      console.log("data de service:",this.data$.source._value)
        // this.arrayData = data
        if(this.dataCurso){
          console.log("entre")
          this.cursoForm.patchValue(this.dataCurso)
          console.log("info dddd:",this.cursoForm)
        }
  }

  UpdateCurso(form:any){
    this.serviceCurso.updateCurso(form).subscribe(data =>{
      
    })
  }

  clear(){
    this.cursoForm.reset();
  }

  ValidCursoForm(f:NgForm){
    console.log("data de form:", f)
  }

}
