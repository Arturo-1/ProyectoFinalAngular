import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { DetalleCursoComponent } from './detalle-curso/detalle-curso.component';
import { EditCursoComponent } from './edit-curso/edit-curso.component';
import { AddCursoComponent } from './add-curso/add-curso.component';


const routes: Routes = [
  {
  path: '',
  component: CursosComponent,

  children: [
  {
    path: 'agregar',
    component: AddCursoComponent
  },
  {
    path: 'detalle',
    component: DetalleCursoComponent
  },
  {
    path: 'editar',
    component: EditCursoComponent
  }
  
]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
	
