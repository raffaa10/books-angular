import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../model/book';
import { FORMATS } from '../model/book-mock-data';
import { PUBLISHERS } from '../model/publisher-mock-data';
import { BooksService } from '../service/books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book;
  publishers = PUBLISHERS;
  formats = FORMATS;
  processLoadRunning = false;
  processValidateRunning = false;

  bookForm = this.fb.group({
    isbn: [''], // Valeur de départ vide
    publisherId: ['0'],
    title: [''],
    format: [''],
    publicationyear: [''],
    price: [2]
  });



  constructor(private booksService: BooksService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getBook();
  }

  private formGetValue(name: string): any {
    return this.bookForm.get(name).value;
  }

  private getBook(): void {
    const isbn = this.route.snapshot.paramMap.get('id');

    console.log('getBook= ' + isbn);
  }

  goToBooks(): void {
    this.router.navigate(['/book/list']);
  }

  onSubmitForm(): void {
    // Validation des données (à voir plus tard)
  }

  isFormValid(): boolean { return false; }



}
