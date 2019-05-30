import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output()numberGenerated = new EventEmitter<number>();
  public someText = 'Here we go with some text';
  generateNumber() { 
    console.log("generateNumber")
    const randomNumber = Math.random();
   // console.log("generateNumber",this.numberGenerated,randomNumber)
    this.numberGenerated.emit(randomNumber); 
  }
  constructor() {

   }

  ngOnInit() {
  }

}
