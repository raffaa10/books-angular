import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material.module';
import { BookManagementRoutingModule } from './book-management-routing.module';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [BookComponent, BookListComponent, NavbarComponent, BookDetailComponent],
  exports: [
    BookComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BookManagementRoutingModule
  ]
})
export class BookManagementModule { }
