import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  //input
  @Input()
  countI: number | undefined;


  //output
  countO = 5;
  @Output()
  countChanged: EventEmitter<number> = new EventEmitter<number>();

  increment() {
    this.countO++;
    this.countChanged.emit(this.countO);
  }
  decrement() {
    this.countO--;
    this.countChanged.emit(this.countO);
  }

  constructor() {
  }

  ngOnInit() {
  }
}
