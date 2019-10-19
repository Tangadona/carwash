import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-servicecenterlogin',
  templateUrl: './servicecenterlogin.component.html',
  styleUrls: ['./servicecenterlogin.component.css']
})
export class ServicecenterloginComponent implements OnInit {
  userloginForm: FormGroup;

  constructor(public fb: FormBuilder, public http: HttpClient, public router:Router ) { 
    this.userloginForm = this.fb.group({
      username: [],
      pwd: [],
      tick:[]  
    })
  }
  
  ngOnInit() {
  }
url = "https://api.mlab.com/api/1/databases/tshaikshavali/collections/ssv?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz";
 baseUrl="https://api.mlab.com/api/1/databases/tshaikshavali/collections/ssv?" 
 apiKey=""
  abc(){
   this.http.post(this.url,this.userloginForm.value).subscribe((res: any[]) => {
    if (res.length!= 0){
      alert("chal hat ");
      
    }
    else{
      this.router.navigate(["/userlogin/dashboard"])
    }
    })
    console.log(this.userloginForm.value);
  }
  
}



  
  