import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  
  data;
  constructor(public fb: FormBuilder,public http: HttpClient) { }
  bookingForm = this. fb.group({ 
    vehiclename: [''],
    vehicletype:  [ ''], 
    contactname: [ ''],
    contactnumber: ['' ],
    servicetype: [ ''],
    requirement: ['' ],
    pickupyes: [ ''],
    arealocation: ['' ],
    pickupdate: [ ''],
    pickuplocation: ['' ],
    budgerprice: [ '']
   
  })

  ngOnInit() {
  }
  url = "https://api.mlab.com/api/1/databases/tshaikshavali/collections/ssv?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz";
  baseUrl="https://api.mlab.com/api/1/databases/tshaikshavali/collections/ssv?";
  apiKey="&apiKey"
  abc(){
   this.http.post(this.url,this.bookingForm.value).subscribe((b)=>{console.log(b)})
  }
}




