import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css']
})
export class GrandChildComponent implements OnInit {
  @Input() public simpleText: string;
  constructor() { 
    console.log('this grandfather page',this.simpleText)
  }

  ngOnInit() {
    console.log('this grandfather page',this.simpleText)
  }

}
