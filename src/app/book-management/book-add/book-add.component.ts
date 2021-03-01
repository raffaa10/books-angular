import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { BooksService } from '../service/books.service';

@Component({
  selector: 'app-book-add',
  templateUrl: '../book-detail/book-detail.component.html',
  styleUrls: ['../book-detail/book-detail.component.css']
})
export class BookAddComponent extends BookDetailComponent implements OnInit {

  constructor(private booksService: BooksService,
              route: ActivatedRoute,
              fb: FormBuilder,
              router: Router,
              private snackBar: MatSnackBar
              ) {
    super(true, route, fb, router );
  }

  ngOnInit(): void {
    super.onInit();
  }

  validateForm(): void {
    console.log('BookAddComponent - validateForm');
    this.processValidateRunning = true;
    this.booksService.addBook(this.getBookFromFormControl()).subscribe(
      data => {
        this.processValidateRunning = false;
        this.errorMessage = '';
        this.snackBar.open('Livre ajouté !', 'X');
      },
      error => {
        this.processValidateRunning = false;
        this.errorMessage = 'Le livre n\'a pas pu être ajouté !';
        this.snackBar.open('Erreur dans l\'ajout du livre!', 'X');
      }
    );
  }


}
