import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { BooksService } from '../service/books.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: '../book-detail/book-detail.component.html',
  styleUrls: ['../book-detail/book-detail.component.css']
})
export class BookEditComponent extends BookDetailComponent implements OnInit {

  constructor(private booksService: BooksService,
              route: ActivatedRoute,
              fb: FormBuilder,
              router: Router,
              private snackBar: MatSnackBar) {
    super(false, route, fb, router);
  }

  ngOnInit(): void {
    super.onInit();
    this.getBook();
  }

  private getBook(): void {
    const isbn = this.route.snapshot.paramMap.get('id');
    this.processLoadRunning = true;
    this.booksService.getBook(isbn).subscribe(
      book => {
        this.book = book;
        this.copyBookToFormControl();
        this.processLoadRunning = false;
      },
      error => {
        this.processLoadRunning = false;
        this.errorMessage = 'Le livre n\'existe pas !';
        this.snackBar.open('Livre non trouvé !', 'X');
      }
    );
  }


  validateForm(): void {
    console.log('BookEditComponent - validateForm');
    this.processValidateRunning = true;
    this.booksService.updateBook(this.getBookFromFormControl()).subscribe(
      data => {
        this.processValidateRunning = false;
        this.errorMessage = '';
        this.snackBar.open('Livre modifié !', 'X');
      },
      error => {
        this.processValidateRunning = false;
        this.errorMessage = 'Une erreur est survenue dans la modification !';
        this.snackBar.open('Livre non modifié !', 'X');
      }
    );

  }


}
