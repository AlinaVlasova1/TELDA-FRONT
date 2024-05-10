import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegAuthRoutingModule } from './reg-auth-routing.module';
import { RegAuthComponent } from './reg-auth.component';
import {TabViewModule} from "primeng/tabview";
import {ToastModule} from "primeng/toast";
import {RegistrationComponent} from "./registration/registration.component";
import {AuthorizationComponent} from "./authorization/authorization.component";
import {RegistrationRoutingModule} from "./registration/registration-routing.module";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {CheckboxModule} from "primeng/checkbox";
import {MessagesModule} from "primeng/messages";
import {HttpClientModule} from "@angular/common/http";
import {MessageService} from "primeng/api";


@NgModule({
  declarations: [
    RegAuthComponent,
    RegistrationComponent,
    AuthorizationComponent
  ],
  imports: [
    CommonModule,
    RegAuthRoutingModule,
    TabViewModule,
    ToastModule,
    CommonModule,
    RegistrationRoutingModule,
    FormsModule,
    TabViewModule,
    InputTextModule,
    CheckboxModule,
    ToastModule,
    MessagesModule,
    HttpClientModule
  ],
  providers: [MessageService]
})
export class RegAuthModule { }
