import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/users.module';
import * as UsuariosActions from './usuarios.actions';

export const usuariosFeatureKey = 'usuarios';

export interface State {
  data: User[]; totalUsuarios: number;
}

export const initialState: State = {
  data: [], totalUsuarios: 0,
};

export const reducer = createReducer(
  initialState,

  on(UsuariosActions.loadUsuarioss, state => state),
  on(UsuariosActions.loadUsuariossSuccess, (state, action) => {
    return {
      ...state,
      data: action.data,
      totalUsuarios: action.totalUsuarios,
    }
  }),
  on(UsuariosActions.loadUsuariossFailure, (state, action) => state),

);
