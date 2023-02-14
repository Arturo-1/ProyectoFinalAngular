import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IncripcionI } from 'src/app/models/inscripciones.interface';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent  {

  InscripcionForm:FormGroup;
  public error:string ='';

  constructor(
    private readonly dialogRef: MatDialogRef<InscripcionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IncripcionI | null,  
    private fb: FormBuilder,
  ) {

    this.InscripcionForm = this.fb.group({
      id: [''],
      nombre_alumno: ['', [Validators.required]],
      apellidos_alumno: ['', [Validators.required]],
      nombre_curso: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      telefono: ['', [Validators.required]]
     
    })

    console.log("info de data:", data)
    if(data){
      this.InscripcionForm.patchValue(data)
    }
  }

 

}
