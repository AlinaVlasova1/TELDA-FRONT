import { Component, OnInit } from '@angular/core';
import {IAuthUser, IUser} from "../../../model/user";
import {AuthorizationService} from "../../../services/authorization/authorization.service";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  login: string;
  password: string;
  authUser: IUser;
  constructor(private authService: AuthorizationService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit(): void {
  }

  authorizationUser(ev: Event) {

    const userObj: IAuthUser = {
      login: this.login,
      password: this.password
    }

     this.authService.authorizationUser(userObj).subscribe((data) => {
       this.authUser = data;
       if (userObj.login == this.authUser.login){
         this.router.navigate(['home'])
           .then(r => localStorage.setItem('user-private-token', this.authUser.token));
       }
       else {
         this.messageService.add({severity: 'error', summary: 'Неверный логин или пароль'});
       }
    });

  }

}
