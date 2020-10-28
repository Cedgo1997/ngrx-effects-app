import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [],
})
export class ListComponent implements OnInit {
  constructor(public usersService: UserService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => console.log(users));
  }

  /*   getUsers() {
    this.usersService.getUsers()
    .subscribe((users) => console.log(users));
  } */
}
