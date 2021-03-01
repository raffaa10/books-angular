import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material.module';
import { BookManagementRoutingModule } from './book-management-routing.module';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { BookDetailComponent } from './book-detail/book-detail.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookAddComponent } from './book-add/book-add.component';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [BookComponent, BookListComponent, NavbarComponent, /*BookDetailComponent,*/ BookEditComponent, BookAddComponent, AlertComponent],
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
