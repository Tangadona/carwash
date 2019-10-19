import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
  },
  {
    path: 'userlogin',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'servicecenterlogin',
    loadChildren: () => import('./servicecenter/servicecenter.module').then(m => m.ServicecenterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
