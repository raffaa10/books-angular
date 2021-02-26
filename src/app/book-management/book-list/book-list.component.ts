import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {BOOKS, FORMATS} from '../model/book-mock-data';
import {Book} from '../model/book';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, AfterViewInit  {

  displayedColumns: string[] = ['title', 'publicationyear', 'format', 'price'];
  dataSource = new MatTableDataSource<Book>([]);

  formats = FORMATS;
  formatSelected = '';


  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // console.log('Values on ngOnInit():');
    // console.log('Mat Paginator:', this.paginator);
    this.dataSource.filterPredicate = (data: Book, filter: string) =>
    this.filterPredicate(data, filter);
    this.getBooks();
  }


  private getBooks(): void{
    this.dataSource.data = BOOKS;
    if (this.formatSelected !== '') {
      this.dataSource.data = this.dataSource.data.filter( book =>
        book.format === this.formatSelected
      );
    }
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



}
