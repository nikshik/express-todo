import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private basseUrl = '/api/todos';

  constructor(private http: HttpClient) { }

  getTodosByUser(user: string) {
    return this.http.get<Todo[]>(`${this.basseUrl}/byuser/${user}`);
  }
}
