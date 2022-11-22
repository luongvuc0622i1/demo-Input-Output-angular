import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-child-out',
  templateUrl: './child-out.component.html',
  styleUrls: ['./child-out.component.css']
})
export class ChildOutComponent implements OnInit {
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
