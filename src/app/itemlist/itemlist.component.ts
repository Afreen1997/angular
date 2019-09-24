import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {
  token;
  constructor(private http: HttpClient) { 
    //localStorage.setItem('token', result);
    //this.token = JSON.parse(localStorage.getItem('token'));
    this.token = localStorage.getItem('token');
//    this.token = localStorage.getItem('token')+"abc";
  }

  error_message;
  items = [];
  get_item_list = function() {
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 
                                    "Authorization": this.token});
    //headers.set("Authorization", "Bearer " + this.token);
    //headers.set("Authorization", this.token);
    console.log(this.token)

//    this.http.get("http://localhost:3000/item/").subscribe(
//  this.http.get("http://localhost:3000/itemdev/", {headers: headers}).subscribe(
    this.http.get("http://localhost:3000/itemdev/", {headers: headers}).subscribe(
      (result : any[]) => {
        this.items = result;
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running! or " + error.error.text;
        console.log(error)
      }
    )
  }

  ngOnInit() {
    this.get_item_list();
  }

}