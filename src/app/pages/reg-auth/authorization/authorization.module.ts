import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthorizationRoutingModule} from './authorization-routing.module';
import {AuthorizationComponent} from './authorization.component';
import {FormsModule} from "@angular/forms";
import {TabViewModule} from "primeng/tabview";
import {InputTextModule} from "primeng/inputtext";
import {CheckboxModule} from "primeng/checkbox";
import {ToastModule} from "primeng/toast";
import {MessagesModule} from "primeng/messages";
import {HttpClientModule} from "@angular/common/http";
import {MessageService} from "primeng/api";


@NgModule({
  declarations: [
    AuthorizationComponent
  ],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    CommonModule,
    FormsModule,
    TabViewModule,
    InputTextModule,
    CheckboxModule,
    ToastModule,
    MessagesModule,
    HttpClientModule
  ],
  exports: [
    AuthorizationComponent
  ],
  providers: [MessageService]
})
export class AuthorizationModule {
}
