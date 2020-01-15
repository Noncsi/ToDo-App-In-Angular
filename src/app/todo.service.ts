import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ToDo } from './todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  API_URL: string = "/api/list";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getTodos(): Observable<ToDo[]>{    
   return this.http.get<ToDo[]>(this.API_URL)
  }

  getTodo(todoId:number): Observable<ToDo> {
    return this.http.get<ToDo>(`${this.API_URL}/${todoId}`)
  }

  addTodo(todo: ToDo): Observable<ToDo>{
    return this.http.post<ToDo>(this.API_URL, todo, this.httpOptions)
  }

  updateTodo(todo: ToDo): Observable<any> {
    return this.http.put(this.API_URL, todo, this.httpOptions)
  }

  removeTodo(todo:ToDo | number): Observable<ToDo> {
    const id = typeof todo === 'number' ? todo : todo.id;
    const url = `${this.API_URL}/${id}`;
    return this.http.delete<ToDo>(url, this.httpOptions);      
  }
}
