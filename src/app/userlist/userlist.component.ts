import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private http: HttpClient) { }
  error_message='';
  users = [];
  get_user_list = function() {
    this.http.get("http://localhost:3000/user/").subscribe(
      (result : any[]) => {
        this.users = result;
        this.error_message = ""
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  ngOnInit() {
    this.get_user_list();
  }

}
