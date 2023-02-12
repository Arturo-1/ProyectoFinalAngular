import { Component,  } from "@angular/core";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "ComponentHernandezReyes";
  pruebaNumber:number=0;
  PruebaDiv:boolean=false;
  divlogin:boolean = true;
  valorPrueba1:boolean = false;
  
  constructor(

  ) { }

  ngOnInit(): void {

  }
  funCambio(e:any){
    this.pruebaNumber = e;
    console.log("dato que viene de componente login:", this.pruebaNumber)
    if(this.pruebaNumber==1){
      this.PruebaDiv = true;
      this.divlogin = false;
      this.valorPrueba1=true;
    }
  }
}

