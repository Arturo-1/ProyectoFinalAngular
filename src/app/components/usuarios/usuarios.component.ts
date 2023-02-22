import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsuariosDataService } from '../../services/usuarios-data.service';
import { UsersI } from 'src/app/models/user.interface';
import { Store } from '@ngrx/store';
import { loadUsuarioss } from './store/usuarios.actions';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  ELEMENT_DATA: UsersI[]= [];
  dataSource:any
  displayedColumns: string[] = ['id', 'nombre', 'correo','correo','usuario','contraseña','tipo usuario', 'Acciones'];
  UsuariosDataService: any;
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    public servUser:UsuariosDataService,
    private store: Store
    ) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsuarioss({page:1 , per_page:2 }));
    this.cargarDatos();
  }

  cargarDatos(){
    this.servUser.getUsuarios().subscribe(data =>{
      let users:UsersI[] = data;
      this.ELEMENT_DATA = users;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
     
    })

  }

  deleteUsuario(id:number){
    console.log("entre");
    let usuarioId = id
    console.log("data que vienen de button delete::::", usuarioId);
    this.servUser.deleteUsuario(usuarioId).subscribe(data =>{
      this.cargarDatos();
    });
  }
  
}
