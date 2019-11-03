import { Component, OnInit, Input } from '@angular/core';
import { TODOS } from '../todos';
import { ToDo } from '../todo';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css',]
})
export class ListComponent implements OnInit {

  todos = TODOS;

  constructor() { }

  ngOnInit() {
  }

  RemoveTodo(todo:ToDo){
      TODOS.splice(TODOS.indexOf(todo), 1);
  }

  saveEdit(newName, selectedTodoId){
    for(var i = 0; i <= this.todos.length; i++){
      if(this.todos[i].id == selectedTodoId){
        this.todos[i].name = newName;
        break;
      }
    }
  }
}
