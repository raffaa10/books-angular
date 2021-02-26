import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material.module';
import { BookManagementRoutingModule } from './book-management-routing.module';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [BookComponent, BookListComponent, NavbarComponent],
  exports: [
    BookComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    BookManagementRoutingModule
  ]
})
export class BookManagementModule { }
