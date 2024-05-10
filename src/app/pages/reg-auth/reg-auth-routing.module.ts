import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegAuthComponent} from "./reg-auth.component";

const routes: Routes = [
  { path: "", component: RegAuthComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegAuthRoutingModule { }
