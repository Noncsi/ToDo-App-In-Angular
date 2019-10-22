import { Component, OnInit, Input } from '@angular/core';
import { TODOS } from '../todos';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todos = TODOS;

  constructor() { }

  ngOnInit() {
  }
}
