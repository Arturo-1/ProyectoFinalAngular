import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlumnoComponent } from "./components/alumno/alumno.component";
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { CursosComponent } from './components/cursos/cursos.component';
// import { HomeComponent } from './components/home/home.component';
import { CursosModule } from './components/cursos/cursos.module';
// import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from './auth/pages/login/login.component';
import { ContenidoComponent } from './components/Layout/contenido/contenido.component';

const routes: Routes = [
    {
      path:'login',
      component: LoginComponent
    },
    {
      path:'dashboard',
      // component: HomeComponent,
      loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule),
    },
    {
      path:'',
      component: LoginComponent
    },
    {
      path:'**',
      redirectTo: 'login'
    }
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {}

  ngOnInit(): void {
  }
}