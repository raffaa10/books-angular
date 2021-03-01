import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './book-add/book-add.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import {BookListComponent} from './book-list/book-list.component';

const routes: Routes = [
  {path: 'book/list', component: BookListComponent},
  //{path: 'book/:id', component: BookDetailComponent},
  { path: 'book/add', component: BookAddComponent},
  { path: 'book/:id', component: BookEditComponent},
  { path: '', redirectTo: 'book/list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookManagementRoutingModule { }
