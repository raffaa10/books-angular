import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Book } from '../model/book';
import { BOOKS } from '../model/book-mock-data';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  static books: Book[] = BOOKS;


  constructor(
  ) { }

  getBooks(): Observable<Book[]> {
    return of(BooksService.books);
  }

  getBook(isbn: string): Observable<Book> {
    return of (BooksService.books.find(book => book.isbn === isbn));
  }



}
