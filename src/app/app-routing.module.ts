import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';


const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'list/:id', component: TodoDetailComponent }
];
const extra: ExtraOptions = {
  enableTracing: true
}

@NgModule({
  imports: [RouterModule.forRoot(routes, extra)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
