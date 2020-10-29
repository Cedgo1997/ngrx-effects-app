import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usersActions from './../actions/users.actions';
import { mergeMap, tap } from 'rxjs/operators';
import { UserService } from './../../services/user.service';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.loadUsers),
      tap((data) => console.log('effects tap', data)),
      mergeMap(() =>
        this.userService
          .getUsers()
          .pipe(tap((data) => console.log('service tap', data)))
      )
    )
  );
}
