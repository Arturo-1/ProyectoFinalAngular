import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
// import { AppCommon } from '../../../../../../../../../Proyectos/Genomi-k/FrontEnd/admin-genomik-ng/src/modules/app-common/models/app-common.model';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

constructor() { }

  ngOnInit(): void {
  }
  confirmDelete():void{
    alert("Producto Eliminado exitosamente")
  }
}
