import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {
degree;
amars_data1={};

  constructor() { 
    //localStorage.setItem('qualification', 'MCA');

    //this.degree = JSON.parse(localStorage.getItem('qualification'));
    this.degree = localStorage.getItem('qualification');
    this.amars_data1 = JSON.parse(localStorage.getItem('amars_data'));


  }

  ngOnInit() {
  }

}
