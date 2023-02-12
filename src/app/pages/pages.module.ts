import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitucionesComponent } from './instituciones/instituciones.component';



@NgModule({
  declarations: [
    InstitucionesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    InstitucionesComponent
  ]
})
export class PagesModule { }
