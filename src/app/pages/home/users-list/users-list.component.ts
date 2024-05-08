import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../model/user";
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: IUser[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
    })
  }

}
