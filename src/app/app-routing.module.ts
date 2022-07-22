import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
  },
  { path: '404', component: OtherComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
