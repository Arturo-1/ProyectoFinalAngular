import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgMaterialModule } from '../ng-material.module';
import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { TheadTableDirective } from './directivas/thead-table.directive';
import { HomeComponent } from './home/home.component';
import { ContenidoComponent } from './Layout/contenido/contenido.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { MenuLateralComponent } from './Layout/menu-lateral/menu-lateral.component';
import { ToolbarComponent } from './Layout/toolbar/toolbar.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    ComponentsComponent,
    ToolbarComponent,
    ContenidoComponent,
    FooterComponent,
    MenuLateralComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgMaterialModule,
    ComponentsRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports:[
    ComponentsComponent
  ]
})
export class ComponentsModule { }