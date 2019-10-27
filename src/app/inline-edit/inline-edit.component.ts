import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.css']
})
export class InlineEditComponent implements OnInit {

  @Input() todoName: string;
  @Output() focusOut: EventEmitter<string> = new EventEmitter<string>();
  editMode = false;

  constructor() { }

  ngOnInit() { }

  onFocusOut() {
    this.focusOut.emit(this.todoName);
  }
}
