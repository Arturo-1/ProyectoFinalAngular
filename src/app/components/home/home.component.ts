import { Component, OnInit, NgModule } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterModule } from '@angular/router';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carousel:any[] = [
    {
      id:1,
      name: "Cursos",
      img:"../../../assets/img/cursos/img-cursos.jpg",
      desc:"Ven y aprende con nosotros"
      
    },
    {
      id:2,
      name: "Alumnos",
      img:"../../../assets/img/cursos/img-alumnos.jpeg",
      desc:"Forma parte del futuro"
      
    },
    {
      id:3,
      name: "Usuarios",
      img:"../../../assets/img/cursos/img.user.jpg",
      desc:"Ingresa y continuemos aprendiendo"
      
    },
  ]

  
  datoValidate:any
  constructor(
    private _config: NgbCarouselConfig,
    public router:Router,
    
    ) { 
      _config.interval = 4000;
      _config.pauseOnHover = true;
      _config.showNavigationArrows = true
    }

  ngOnInit(): void {

  }

  filterCorousel(id:number){
    console.log("dato id:",id)
    if(id == 1){
      this.router.navigate(['dashboard/cursos'])
    }
    if(id == 2){
      this.router.navigate(['dashboard/alumnos'])
    }
    if(id == 3){
      this.router.navigate(['dashboard/usuarios'])
    }
  }

}
