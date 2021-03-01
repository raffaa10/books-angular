import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
              ) {
    super(true, route, fb, router );
  }

  ngOnInit(): void {
    super.onInit();
  }

  validateForm(): void {
    console.log('BookAddComponent - validateForm');
  }


}
