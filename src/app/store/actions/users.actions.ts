import { createAction, props } from '@ngrx/store';
import { UserModel } from './../../models/user.model';

export const loadUsers = createAction('[Users] Load Users');
export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: UserModel[] }>()
);
export const loadUsersError = createAction(
  '[Users] Load Users Error',
  props<{ payload: any }>()
);
