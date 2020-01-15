import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TodoService } from '../todo.service';
import { ToDo } from '../todo';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  private ngUnsubscribe = new Subject<void>();

  todo: ToDo;
  todoId: number

  constructor(private todoService: TodoService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.params
      .pipe(takeUntil(this.ngUnsubscribe.asObservable()))
      .subscribe((value: Params) => {
        this.todoId = +value['id'];
        this.getTodo();
      })
  }

  getTodo(): void {
    this.todoService.getTodo(this.todoId)
      .subscribe(data => this.todo = data);
  }
  next() {
    this.router.navigate(['/list', ++this.todoId]);
  }
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
