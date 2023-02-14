import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { AlumnoModule } from './alumno/alumno.module';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { EditCursoComponent } from './cursos/edit-curso/edit-curso.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AddCursoComponent } from './cursos/add-curso/add-curso.component';
import { DetalleCursoComponent } from './cursos/detalle-curso/detalle-curso.component';
import { DetailComponent } from './alumno/detail/detail.component';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';


const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        // loadChildren: () => import('./cursos/cursos.module').then((module) => module.CursosModule)
        // canActivate: [AuthGuard],
      },
      {
        path: 'cursos',
        component: CursosComponent,
        // loadChildren: () => import('./cursos/cursos.module').then((module) => module.CursosModule)
        // canActivate: [AuthGuard],
      },
      {
        path: 'cursos/editar',
        component: EditCursoComponent,
        // loadChildren: () => import('./cursos/cursos.module').then((module) => module.CursosModule)
      },
      {
        path: 'cursos/agregar',
        component: AddCursoComponent,
        // loadChildren: () => import('./cursos/cursos.module').then((module) => module.CursosModule)
      },
      {
        path: 'cursos/detalle',
        component: DetalleCursoComponent,
        // loadChildren: () => import('./cursos/cursos.module').then((module) => module.CursosModule)
      },
      {
        path: 'alumnos',
        component:AlumnoComponent
      },
      {
        path: 'alumnos/detalle',
        component:DetailComponent
      },
      {
        path: 'usuarios',
        canActivate: [AuthGuard],
        component:UsuariosComponent
      },
      {
        path: 'inscripciones',
        canActivate: [AuthGuard],
        component:InscripcionesComponent
      },
      {
        path: 'home',
        component: HomeComponent,
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ComponentsRoutingModule { }