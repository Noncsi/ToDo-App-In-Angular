import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { ToDo } from '../todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  @Input() todo: ToDo;

  constructor(private todoService: TodoService, 
              private route: ActivatedRoute) { }

  ngOnInit() : void {
    this.getTodo();
  }

  getTodo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.todoService.getTodo(id)
        .subscribe(data => this.todo = data);
  }
}
