import { ToDo } from './../../models/todo.model';
import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/services/to-do.service';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css'],
})
export class ToDosComponent implements OnInit {
  tasksList!: ToDo[];
  constructor(private toDoService: ToDoService) {}

  ngOnInit(): void {
    this.toDoService.getToDoes().subscribe((res) => {
      this.tasksList = res;
    });
  }
  toggleToDo(todo: ToDo) {
    todo.completed = !todo.completed;
    this, this.updateTodo(todo);
  }
  updateTodo(todo: ToDo): any {
    // console.log(event);//update toggle

    this.toDoService.updateToDo(todo).subscribe(() => {
      this.tasksList = this.tasksList.map((item: ToDo) => {
        if (item.id === todo.id) {
          return todo;
        }
        return item;
      });
    });
  }

  Delete(todo: ToDo) {
    this.toDoService.deleteToDo(todo.id).subscribe(() => {
      this.tasksList = this.tasksList.filter((item: ToDo) => {
        return item.id != todo.id;
      });
    });
  }
  addTask(todo: ToDo) {
    this.toDoService.addToDo(todo).subscribe((newToDo) => {
      this.tasksList.push(newToDo);
      console.log(todo, newToDo);
    });
  }
}
