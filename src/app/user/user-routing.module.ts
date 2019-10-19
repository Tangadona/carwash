import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { BookingComponent } from './booking/booking.component';
import { HistoryComponent } from './history/history.component';
import { EditComponent } from './edit/edit.component';
import { ChangeComponent } from './change/change.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: UserloginComponent
  },
  {
  path: 'dashboard',
  component: DashboardComponent
  },
  {
  path: 'signup',
  component: SignupComponent
  },
  {
  path: 'signup/setpassword',
  component: SetpasswordComponent
  },
  {
  path: 'signup/setpassword/login',
  component: UserloginComponent
  },
  {
  path: 'forget',
  component: SetpasswordComponent
  },
  {
  path: 'dashboard/booking',
  component: BookingComponent
  },
  {
  path: 'forget/login',
  component: UserloginComponent
  },
  {
  path: 'dashboard/history',
  component: HistoryComponent
  },
  {
  path: 'dashboard/edit',
  component: EditComponent
  },
  {
  path: 'dashboard/change',
  component: ChangeComponent
  },
  {
  path: 'dashboard/logout',
  component: UserloginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
