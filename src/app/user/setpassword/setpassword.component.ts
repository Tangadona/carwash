import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.component.html',
  styleUrls: ['./setpassword.component.css']
})
export class SetpasswordComponent implements OnInit {

  
  setForm: FormGroup;

  
  constructor(public fb: FormBuilder, public http: HttpClient ) { 
    this.setForm = this.fb.group({
      enter: [],
      confirm: []
      
    })
  }
  
  ngOnInit() {
  }
url = "https://api.mlab.com/api/1/databases/tshaikshavali/collections/students?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz";
  
  hij(){
    
   this.http.post(this.url,this.setForm.value).subscribe((b)=>{console.log(b)})
  }
}



