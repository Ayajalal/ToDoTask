import { ToDo } from './../app/models/todo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  constructor(private http: HttpClient) {}
  getToDoes(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(
      'https://jsonplaceholder.typicode.com/todos?_limit=10'
    );
  }
  addToDo(todo: ToDo): Observable<ToDo> {
    return this.http.post<ToDo>(
      'https://jsonplaceholder.typicode.com/todos',
      todo
    );
  }
  deleteToDo(id: number) {
    return this.http.delete<ToDo[]>(
      'https://jsonplaceholder.typicode.com/todos/' + id
    );
  }
  updateToDo(todo: ToDo) {
    return this.http.put(
      'https://jsonplaceholder.typicode.com/todos/' + todo.id,
      todo
    );
  }
}
