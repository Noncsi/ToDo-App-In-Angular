import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css',]
})
export class ListComponent implements OnInit {

  todos: ToDo[];
  todoName: string ='';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(data => this.todos = data)
  }

  removeTodo(todo : ToDo): void {
    this.todos = this.todos.filter(t => t !== todo);
    this.todoService.removeTodo(todo).subscribe();
  }

  getTodoLargestId() {
    this.todoService.getTodos().subscribe(data => this.todos = data)
    if(this.todos == null) {return};
    var largestNum = 0;
    for(var i = 0; i < this.todos.length; i++){
      if(this.todos[i].id >= largestNum){
        largestNum = this.todos[i].id + 1;
      }
    }
    return largestNum;
  }

  onClick(){
    this.todoName = this.todoName.trim();
    const todoId = this.getTodoLargestId();
    let newTodo = new ToDo(); newTodo.id = todoId; newTodo.name = this.todoName; newTodo.isDone = false;
    this.todoService.addTodo(newTodo).subscribe(todo => {this.todos.push(todo);});
  }
}
