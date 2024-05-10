import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from "../../../model/user";
import {UserService} from "../../../services/user/user.service";
import {map, switchMap} from "rxjs";
import {DateTimeOptions} from "../../../services/date-time-options";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: IUser[] = [];
  @Input() currentUser: string ;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.updateUsers();
  }

  deleteUser(ev: IUser): void {
    this.userService.deleteUser(ev.id).subscribe(() => {
      this.updateUsers();
    });
  }

  updateUsers(): void {
    this.userService.getAllUsers().pipe(
      map((data: IUser[]) => {
        data.forEach((el) =>
          el.createdAt = new Date(el.createdAt)
            .toLocaleDateString('ru-RU', new DateTimeOptions()) )
        return data;
      })
    ).subscribe((data) => {
      this.users = data;
    })
  }

}
