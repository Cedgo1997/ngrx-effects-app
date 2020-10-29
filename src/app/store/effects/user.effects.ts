import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as userActions from './../actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from './../../services/user.service';
import { of } from 'rxjs';
import { UserModel } from '../../models/user.model';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadUser),
      mergeMap(( action ) =>
        this.userService.getUserById( action.id )
        .pipe(
            map( (user: UserModel) => userActions.loadUserSuccess({ user })),
            catchError((err) => of(userActions.loadUserError({ payload: err })))
        )
      )
    )
  );
}
