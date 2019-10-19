import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserloginComponent } from './userlogin/userlogin.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { BookingComponent } from './booking/booking.component';
import { HistoryComponent } from './history/history.component';
import { EditComponent } from './edit/edit.component';
import { ChangeComponent } from './change/change.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [UserloginComponent, DashboardComponent, SignupComponent, SetpasswordComponent, BookingComponent, HistoryComponent, EditComponent, ChangeComponent, LoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
     ReactiveFormsModule,
     HttpClientModule,
  ]
})
export class UserModule { }
