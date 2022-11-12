import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { ToDosComponent } from './component/to-dos/to-dos.component';
import { ToDoComponent } from './component/to-do/to-do.component';
import { AddToDoComponent } from './component/add-to-do/add-to-do.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, ToDosComponent, ToDoComponent, AddToDoComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
