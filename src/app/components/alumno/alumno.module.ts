import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { NgMaterialModule } from '../../ng-material.module';



@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    NgMaterialModule
  ]
})
export class AlumnoModule { }
