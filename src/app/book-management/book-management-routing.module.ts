import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import {BookListComponent} from './book-list/book-list.component';

const routes: Routes = [
  {path: 'book/list', component: BookListComponent},
  { path: 'book/:id', component: BookDetailComponent},
  {path: '', redirectTo: 'book/list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookManagementRoutingModule { }
