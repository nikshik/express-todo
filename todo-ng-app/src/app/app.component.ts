import { TodoService } from './todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  todos: Todo[] = [];
  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    return this.todoService.getTodosByUser('test').subscribe((todos) => this.todos = todos);
  }
}
