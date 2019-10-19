import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicecenterRoutingModule } from './servicecenter-routing.module';
import { ServicecenterloginComponent } from './servicecenterlogin/servicecenterlogin.component';
import { SignupComponent } from './signup/signup.component';
import { ServicesignupComponent } from './servicesignup/servicesignup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ServicecenterloginComponent, SignupComponent, ServicesignupComponent, ContactComponent, DashboardComponent],
  imports: [
    CommonModule,
    ServicecenterRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule
  ]
})
export class ServicecenterModule { }
