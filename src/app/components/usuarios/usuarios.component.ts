import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsuariosDataService } from '../../services/usuarios-data.service';
import { User } from '../../../../../../../../../Proyectos/Genomi-k/FrontEnd/admin-genomik-ng/src/modules/config/models/user.model';
import { UsersI } from 'src/app/models/user.interface';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  ELEMENT_DATA: UsersI[]= [];
  dataSource:any
  displayedColumns: string[] = ['id', 'nombre', 'correo','correo','usuario','contraseña','tipo usuario', 'Acciones'];
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    public servUser:UsuariosDataService
    ) {

    }

  ngOnInit(): void {
    this.servUser.getUsuarios().subscribe(data =>{
      let users:UsersI[] = data
      // console.log("gggggggg:",data)
      this.ELEMENT_DATA = users
      // console.log("ssss:", this.ELEMENT_DATA)
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      // console.log("DATA CURSOS:",this.dataSource)
    })
  }
  
}
