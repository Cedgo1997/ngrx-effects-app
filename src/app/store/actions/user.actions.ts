import { createAction, props } from '@ngrx/store';
import { UserModel } from './../../models/user.model';

export const loadUser = createAction(
  '[User] Load User',
  props<{ id: string }>()
);

export const loadUserSuccess = createAction(
  '[User] Load User Success',
  props<{ user: UserModel }>()
);
export const loadUserError = createAction(
  '[User] Load User Error',
  props<{ payload: any }>()
);
