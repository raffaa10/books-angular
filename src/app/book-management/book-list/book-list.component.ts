import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {FORMATS} from '../model/book-mock-data';
import {Book} from '../model/book';
import { BooksService } from '../service/books.service';
import {ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, AfterViewInit  {

  displayedColumns: string[] = ['title', 'publicationyear', 'format', 'price', 'action'];
  dataSource = new MatTableDataSource<Book>([]);

  formats = FORMATS;
  formatSelected = '';

  book: Book;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(private booksService: BooksService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // console.log('Values on ngOnInit():');
    // console.log('Mat Paginator:', this.paginator);
    this.dataSource.filterPredicate = (data: Book, filter: string) =>
    this.filterPredicate(data, filter);
    this.getBooks();
  }

  private getBook(): void {
    const isbn = this.route.snapshot.paramMap.get('id');
    this.booksService.getBook(isbn).subscribe(
      book => {
        this.book = book;
        console.log('BookDetail getBook =', book);
      }
    );
  }

  private getBooks(): void {
    this.booksService.getBooks().subscribe( books => {
      if (this.formatSelected !== '') {
        this.dataSource.data = books.filter(book =>
          book.format === this.formatSelected
        );
      } else {
        this.dataSource.data = books;
      }
    });
  }


  addBook(): void {
    this.router.navigate(['/book/add']).then( (e) => {
      if (! e) {
        console.log('Navigation has failed!');
      }
    });
  }


  formatChanged($event): void {
    this.formatSelected = $event.value;
    this.getBooks();
  }

  ngAfterViewInit(): void {
    console.log('Values on ngAfterViewInit():');
    console.log('Mat Paginator:', this.paginator);
  }

  filterPredicate(data, filter): boolean {
    return  !filter || data.title.toLowerCase().startsWith(filter);
  }
  applyFilter($event: KeyboardEvent): void {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(isbn: string): void {
    this.router.navigate(['/book', isbn]).then((e) => {
      if (!e) {
        console.log('Navigation has failed!');
      }
    });
  }

  delete(isbn: string): void {
    alert('delete :' + isbn);
  }





}
