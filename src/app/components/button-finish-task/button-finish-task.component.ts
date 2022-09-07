import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-finish-task',
  templateUrl: './button-finish-task.component.html',
  styleUrls: ['./button-finish-task.component.css']
})
export class ButtonFinishTaskComponent implements OnInit {

  @Output() btnClick = new EventEmitter() 

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit()
  }

}
