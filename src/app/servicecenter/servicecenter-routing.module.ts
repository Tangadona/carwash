import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicecenterloginComponent } from './servicecenterlogin/servicecenterlogin.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from '../servicecenter/dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: ServicecenterloginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicecenterRoutingModule { }
