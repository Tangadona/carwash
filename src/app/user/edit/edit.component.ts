import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  data;
  constructor(public fb: FormBuilder,public http: HttpClient) { }
  editForm = this. fb.group({ 
    name: [''],
    add:  [ ''], 
    pin: [ ''],
    number: ['' ],
    email: [ ' ']
  })

  ngOnInit() {
  }
  url = "https://api.mlab.com/api/1/databases/tshaikshavali/collections/ssv?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz";
  def(){
   this.http.post(this.url,this.editForm.value).subscribe((b)=>{console.log(b)})
  }
}




