import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authorization',
    loadChildren: () => import('./pages/authorization/authorization.module').then(m => m.AuthorizationModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  { path: '**',
    redirectTo: 'authorization'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
