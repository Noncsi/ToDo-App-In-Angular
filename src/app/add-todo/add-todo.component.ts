import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ToDo } from '../todo';
import { TODOS } from '../todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todoName: string ='';

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    TODOS.push({name: this.todoName, id: 21, isDone: false});
  }
}
