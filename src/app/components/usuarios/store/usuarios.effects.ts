import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as UsuariosActions from './usuarios.actions';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/users.module';

export interface UsersListResponse {
  page:        number;
  per_page:    number;
  total:       number;
  total_pages: number;
  data:        User[];
  support:     Support;
}

export interface Support {
  url:  string;
  text: string;
}

@Injectable()
export class UsuariosEffects {

  loadUsuarioss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(UsuariosActions.loadUsuarioss),
      concatMap((action) =>
       
        this.getUsersFromApi(action.page, action.per_page).pipe(
          map(response => UsuariosActions.loadUsuariossSuccess({data: response.data,  totalUsuarios: response.total })),
          catchError(error => of(UsuariosActions.loadUsuariossFailure({ error }))))
      )
    );
  });
  
  private getUsersFromApi(page: number, per_page: number): Observable<UsersListResponse> {
    return this.httpClient.get<UsersListResponse>('https://reqres.in/api/users', {
      params: {
        page,
        per_page
      },
    });
  }


  constructor(
    private actions$: Actions,
    private httpClient:HttpClient
    ) {}
}
