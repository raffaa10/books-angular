import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
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

  addBook(book: Book): Observable<Book> {
    // Ajout dans la liste
    BooksService.books.push(book);
    return of(book);
  }

  updateBook(bookToUpdate: Book): Observable<Book> {
    // Modification du livre
    const book = BooksService.books.find( u => u.isbn === bookToUpdate.isbn);
    if (book) {
      // Modif
      book.publisherId = bookToUpdate.publisherId;
      book.title = bookToUpdate.title;
      // … continuez la modification !

      return of(bookToUpdate);
    }

    return throwError('Livre non trouvé');
  }




}
