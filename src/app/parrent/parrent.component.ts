import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parrent',
  templateUrl: './parrent.component.html',
  styleUrls: ['./parrent.component.css']
})
export class ParrentComponent implements OnInit {
  randomNumber: number;
 
  constructor() { }

  ngOnInit() {
  }
 onNumberGenerated(event) {
    console.log('dfdfdfdfdf',event);
    this.randomNumber = event;
  }
}
