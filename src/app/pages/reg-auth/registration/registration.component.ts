import {Component, OnInit} from '@angular/core';
import {RegistrationService} from "../../../services/registration/registration.service";
import {IRegUser} from "../../../model/user";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  userName: string;
  login: string;
  password: string;
  passwordRepeat: string;
  selectedValue: boolean = false;
  users = [1];

  constructor(private regService: RegistrationService,
              private messageService: MessageService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  registrationUser(ev: Event): void | boolean {

    const userObj: IRegUser = {
      userName: this.userName,
      login: this.login,
      password: this.password
    }
    if (this.password != this.passwordRepeat) {
      this.messageService.add({severity: 'error', summary: 'Пароли не совпадают'})
      return false;
    }
    this.regService.postUser(userObj).subscribe({
      next: data => {
        this.messageService.add({severity: 'success', summary: 'Регистрация прошла успешно'});
        this.router.navigate(['authorization']).then();
        return true;
      },
      error: data => {
        this.messageService.add({severity: 'error', summary: 'Ошибка регистрации'});
        return false;
      }
    });
  }


}
