import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/users.module';

export const loadUsuarioss = createAction(
  '[Usuarios] Load Usuarioss',
  props<{ page: number; per_page: number; }>()
);

export const loadUsuariossSuccess = createAction(
  '[Usuarios] Load Usuarioss Success',
  props<{ data: User[], totalUsuarios: number; }>()
);

export const loadUsuariossFailure = createAction(
  '[Usuarios] Load Usuarioss Failure',
  props<{ error: any }>()
);
