import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from  '@angular/material/dialog' ;
import { alumno } from 'src/app/models/alumno.models';



@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css']
})
export class AddAlumnoComponent implements OnInit {
  studentForm:FormGroup;
  public error:string ='';
  // nombreControl = new FormControl('',[Validators.required]);
  // edadControl = new FormControl('',[Validators.required]);
  // carreraControl = new FormControl('',[Validators.required]);
  // institucionControl = new FormControl('',[Validators.required]);

  constructor(
    private readonly dialogRef: MatDialogRef<AddAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: alumno | null,  
    private fb: FormBuilder,
  ) {

    this.studentForm = this.fb.group({
      id: [''],
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      carrera: ['', [Validators.required]],
      institucion:['', [Validators.required]],
    })

    console.log("info de data:", data)
    if(data){
      this.studentForm.patchValue(data)
    }
  }

  ngOnInit(): void {
    this.error = 'error';
  }
  

}
