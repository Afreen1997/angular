import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-trainerregister',
  templateUrl: './trainerregister.component.html',
  styleUrls: ['./trainerregister.component.css']
})
export class TrainerregisterComponent implements OnInit {

  user_name;
  email_id;
  exp;
  mob_num;
  timezone;
  pass_word;
  message='';
  last_name='';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  submit_form_data(){
    console.log("user_name : " + this.user_name);
    console.log("last_name : " + this.user_name);
    console.log("email_id : " + this.email_id);
    console.log("exp: " + this.exp);
    console.log("mob_num: " + this.mob_num);
    console.log("timezone: " + this.timezone);
    console.log("pass_word : " + this.pass_word);

    var body = "user_name=" + this.user_name 
        + "&email_id=" + this.email_id 
        + "&exp=" + this.exp
        + "&mob_num=" + this.mob_num
        + "&timezone=" + this.timezone
        + "&pass_word=" + this.pass_word;
	
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    this.http.post("http://localhost:3000/user/", body, 
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        this.message = "Congratulations, You had successfully registered"
      },
      (error) => {
        console.log(error)
        this.message = "Error : Backend is running? or Registered already?";
      }
    )
  }

}