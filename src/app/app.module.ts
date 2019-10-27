import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { InlineEditComponent } from './inline-edit/inline-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddTodoComponent,
    InlineEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
