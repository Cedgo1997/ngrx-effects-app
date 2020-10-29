import { Component, OnInit } from '@angular/core';
import { UserModel } from './../../models/user.model';
import { Store } from '@ngrx/store';
import { loadUsers } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [],
})
export class ListComponent implements OnInit {
  users: UserModel[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('users').subscribe(({ users }) => (this.users = users));
    this.store.dispatch(loadUsers());
  }
}
