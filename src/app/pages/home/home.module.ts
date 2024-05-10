import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { UsersListComponent } from './users-list/users-list.component';
import {MenubarModule} from "primeng/menubar";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    UsersListComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MenubarModule,
        CardModule,
        TableModule
    ]
})
export class HomeModule { }
