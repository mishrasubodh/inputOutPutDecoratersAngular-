import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output()numberGenerated = new EventEmitter<number>();
  someText: any
  generateNumber() { 
  this.someText = 'Here we go with some text';
  const randomNumber = Math.random();
  this.numberGenerated.emit(randomNumber); 
  }
  constructor() {

   }

  ngOnInit() {
  }

}
