import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  UserloginForm: FormGroup;
constructor(public fb: FormBuilder, public http: HttpClient, public router: Router ) {
    this.UserloginForm = this.fb.group({
      mobile: [],
      pwd: [],
  }
  )
}
  baseUrl="https://api.mlab.com/api/1/databases/tshaikshavali/collections/students?";
  apiKey="&apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz";
  abc(){
    this.http.get(`${this.baseUrl}q=${JSON.stringify(this.UserloginForm.value)}${this.apiKey}`)
     .subscribe((res: any[]) => {
       
      if (res.length!= 0){
        alert("chal hat ");
        
      }
      else{
        this.router.navigate(["/userlogin/dashboard"])
      }
      })
      console.log(this.UserloginForm.value);
    }
    ngOnInit() {
    }
    }
