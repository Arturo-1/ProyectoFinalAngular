
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersI } from '../models/user.interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuariosDataService {

  API_SERVER:string = environment.baseURL
  constructor(private httpClient: HttpClient) {

   }
  
  // getUsersFromApi(): Observable<Users[]>{
  //   return this.httpClient.get<Users[]>(`${environment.baseURL}users`);
  // }

  getUsuarios():Observable<UsersI[]>{
    // console.log(this.API_SERVER)
    return this.httpClient.get<UsersI[]>(`${this.API_SERVER}/usuarios`);
  }
  deleteUsuario(id:any): Observable<any>{
    
    let rutaURL = `${this.API_SERVER}usuarios/${id}`  
    return this.httpClient.delete<any>(rutaURL, id)
  }


}
