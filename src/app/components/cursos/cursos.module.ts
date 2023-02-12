import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { NgMaterialModule } from 'src/app/ng-material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditCursoComponent } from './edit-curso/edit-curso.component';
import { DetalleCursoComponent } from './detalle-curso/detalle-curso.component';
import { AddCursoComponent } from './add-curso/add-curso.component';
import { PipesComponent } from '../pipes/pipes.component';
import { MiCustomPipe } from '../pipes/mi-custom.pipe';
import { CursosService } from 'src/app/services/cursos.service';
import { MatCardContent } from '@angular/material/card';


@NgModule({
  declarations: [
    
    EditCursoComponent,
    DetalleCursoComponent,
    AddCursoComponent,
    CursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    NgMaterialModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  providers:[CursosService]
})
export class CursosModule { }
