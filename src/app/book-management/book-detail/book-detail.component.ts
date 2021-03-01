import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Book } from '../model/book';
import { FORMATS } from '../model/book-mock-data';
import { PUBLISHERS } from '../model/publisher-mock-data';
import { BooksService } from '../service/books.service';

/*
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
 */

export abstract class BookDetailComponent {

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


  protected constructor (
    public addForm: boolean,
    protected route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  abstract validateForm(): void;

  protected onInit(): void {
    // Permet d'initialiser le formulaire au cas où
    // Nous n'en avons pas besoin ici
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
    this.validateForm();
  }

  isFormValid(): boolean {
    return this.bookForm.valid
      // Exemple de validation d'un champ :
      && (!this.addForm || (+this.formGetValue('price')) > 1);
    // le + transforme un string en nombre
  }

  protected copyBookToFormControl(): void {
    this.bookForm.get('isbn').setValue(this.book.isbn);
    this.bookForm.get('publisherId').setValue(this.book.publisherId.toString());
    this.bookForm.get('title').setValue(this.book.title);
    this.bookForm.get('publicationyear').setValue(moment(this.book.publicationyear, 'YYYY-MM-DD'));
    this.bookForm.get('price').setValue(this.book.price);
    this.bookForm.get('format').setValue(this.book.format);
    /*this.bookForm.get('edition').setValue(this.book.edition);
    this.bookForm.get('pages').setValue(this.book.pages);
    this.bookForm.get('dimensions').setValue(this.book.dimensions);
    this.bookForm.get('overview').setValue(this.book.overview);
    this.bookForm.get('synopsis').setValue(this.book.synopsis);
    */
  }

  protected getBookFromFormControl(): Book {
    return {
      isbn: this.bookForm.get('isbn').value,
      publisherId: +this.bookForm.get('publisherId').value,
      title: this.bookForm.get('title').value,
      publicationyear: this.bookForm.get('publicationyear').value.format('YYYY-MM-DD 00:00:00'),
      price: this.bookForm.get('price').value,
      format: this.bookForm.get('format').value,
      edition : '',
      pages : 20,
      dimensions: '',
      overview : '',
      synopsis : '',
      /*edition: this.bookForm.get('edition').value,
      pages: this.bookForm.get('pages').value,
      dimensions: this.bookForm.get('dimensions').value,
      overview: this.bookForm.get('overview').value,
      synopsis: this.bookForm.get('synopsis').value,
       */
    };
  }







}
