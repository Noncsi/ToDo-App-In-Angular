import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';


const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'list/:id', component: TodoDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
