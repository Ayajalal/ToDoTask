import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css'],
})
export class AddToDoComponent implements OnInit {
  title: string = '';
  @Output() nameEvent = new EventEmitter();
  constructor() {}
  count = 2;
  ngOnInit(): void {}
  onAdd() {
    this.nameEvent.emit({
      title: this.title,
      completed: false,
    });
    this, (this.title = '');
  }
}
