import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnosService } from '../../../services/alumnos.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  data$: any;
  dataAlumno:any

  constructor(
    private serviceAlumno:AlumnosService,
    private router:Router
  ) {
    this.data$ =this.serviceAlumno.AlumnoObserbable;
      this.dataAlumno= this.data$.source._value;
      console.log("data de service:",this.dataAlumno)
        // this.arrayData = data
   }

  ngOnInit(): void {
  }

  returnAlumnos(){
    this.router.navigate(['dashboard/alumnos'])
  }

}
