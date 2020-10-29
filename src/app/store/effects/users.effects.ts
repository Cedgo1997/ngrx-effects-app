import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usersActions from './../actions/users.actions';
import { map, mergeMap, tap } from 'rxjs/operators';
import { UserService } from './../../services/user.service';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.loadUsers),
      mergeMap(() =>
        this.userService
          .getUsers()
          .pipe(map((users) => usersActions.loadUsersSuccess({ users })))
      )
    )
  );
}
