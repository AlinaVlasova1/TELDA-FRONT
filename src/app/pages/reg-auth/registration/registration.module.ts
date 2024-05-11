import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegistrationRoutingModule} from './registration-routing.module';
import {RegistrationComponent} from './registration.component';
import {FormsModule} from "@angular/forms";
import {MessagesModule} from "primeng/messages";
import {ToastModule} from "primeng/toast";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";
import {TabViewModule} from "primeng/tabview";
import {MessageService} from "primeng/api";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
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
  exports: [
    RegistrationComponent
  ],
  providers: [MessageService]
})
export class RegistrationModule {
}
