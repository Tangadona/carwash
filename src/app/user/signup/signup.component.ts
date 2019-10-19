import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  signupForm : FormGroup;

  
  constructor(public http: HttpClient,public fb: FormBuilder,private router:Router   ) { 
    this.signupForm = this.fb.group({
      name: [],
      mobile: [],
      otp:[],
      pwd:[] 
    })
  }
  ngOnInit() {
  }
  url = "https://api.mlab.com/api/1/databases/tshaikshavali/collections/students?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz";
  
  def(){
    
   this.http.post(this.url,this.signupForm.value).subscribe((b)=>{console.log(b)})
  }
  
}
  

