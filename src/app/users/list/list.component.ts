import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { UserModel } from './../../models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [],
})
export class ListComponent implements OnInit {
  users: UserModel[] = [];

  constructor() {}

  ngOnInit(): void {
    /* this.usersService.getUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    }); */
  }
}
