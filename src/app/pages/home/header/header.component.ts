import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenuItem} from "primeng/api";
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];
  @Output() public userLogin: EventEmitter<string> = new EventEmitter();
  userName: string;

  constructor(private userService: UserService) {
  }


  ngOnInit(): void {
    this.items = [
      {
        label: 'Выйти',
        routerLink: ['authorization']
      }
    ]

    this.userService.getUser().subscribe((data) => {
      this.userLogin.emit(data.login);
      this.userName = data.userName;
    })
  }

}
