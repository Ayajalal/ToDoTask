import { ToDoService } from 'src/services/to-do.service';
import { ToDo } from './../../models/todo.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent implements OnInit {
  @Input() todo!: ToDo;
  @Output() toggleEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();
  constructor(private todoService: ToDoService) {}

  ngOnInit(): void {}
  toggle(item: ToDo): void {
    this.toggleEvent.emit(item);
  }
  onDelete(item: ToDo) {
    this.deleteEvent.emit(item);
  }
}
