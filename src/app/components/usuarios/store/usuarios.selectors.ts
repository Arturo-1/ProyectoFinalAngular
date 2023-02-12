import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsuarios from './usuarios.reducer';

export const selectUsuariosState = createFeatureSelector<fromUsuarios.State>(
  fromUsuarios.usuariosFeatureKey
);

export const selectUsersArray = createSelector(
  selectUsuariosState,
  (usersState) => usersState.data
);

export const selectTotalUsersNumber = createSelector(
  selectUsuariosState,
  (usersState) => usersState.totalUsuarios
);
