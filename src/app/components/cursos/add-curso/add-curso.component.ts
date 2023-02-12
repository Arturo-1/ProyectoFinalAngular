import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { CursosService } from '../../../services/cursos.service';
import { Curso } from 'src/app/models/curso';


@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AddCursoComponent implements OnInit {

  cursoForm:FormGroup;
  
  
  resdata:any
  data$: any;
  dataCurso: any;
  constructor( 
    private fb:FormBuilder,
    private serviceCurso: CursosService,
    // private readonly data: AddCursoComponent,
  //  public data: Curso | null,  
   
    ) {
   

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
    
  }

  AddCurso(form:any){
    this.serviceCurso.AddCurso(form).subscribe(data =>{
    })
  }

  clear(){
    this.cursoForm.reset();
  }

  ValidCursoForm(f:NgForm){
    console.log("data de form:", f)
  }

}
