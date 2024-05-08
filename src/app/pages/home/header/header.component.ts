import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];
  userLogin: string;
  constructor(private userService: UserService) { }


  ngOnInit(): void {
    this.items = [
      {
        label: 'Выйти',
        routerLink:['authorization']
      }
    ]

    this.userService.getUser().subscribe((data) => {
      this.userLogin = data.login
    })
  }

}
