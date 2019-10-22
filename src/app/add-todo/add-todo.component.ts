import { Component, OnInit } from '@angular/core';
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

  getTodoLargestId() {
    var largestNum = 0;
    for(var i = 0, len = TODOS.length; i < len; i++){
      if(TODOS[i].id >= largestNum){
        largestNum = TODOS[i].id + 1;
      }
    }
    return largestNum;
  }

  onClick(){
    TODOS.push({name: this.todoName, id: this.getTodoLargestId(), isDone: false});
  }
}
