import { Component, OnInit, Input } from '@angular/core';

import { TodoService } from '../todo.service';
import { ToDo } from '../todo';

@Component({
  selector: 'app-inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.css']
})
export class InlineEditComponent implements OnInit {

  @Input() todo: ToDo;
  editMode = false;

  constructor(private todoService: TodoService) { }

  ngOnInit() { }

  updateTodo(todo:ToDo){
    this.todoService.updateTodo(todo).subscribe();
    this.editMode = false;
  }
}
