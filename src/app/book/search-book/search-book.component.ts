import { Component } from '@angular/core';
import { CategorieService } from '../categorie.service';
import { BookService } from '../book.service';
import { Category } from '../categorie';
import { Book } from '../book';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrl: './search-book.component.scss',
})
export class SearchBookComponent {
  categories: Category[] = []; 
  books: Book[] = []; 
  selectedOption: string = '';
  constructor(private Categorieservice: CategorieService ,private Bookservice: BookService) {}

  ngOnInit() {
    this.Categorieservice.getCategoriesList().subscribe((data) => {
      this.categories = data;
    });
    this.Bookservice.getBooksList().subscribe((data) => {
      this.books = data;
    });

  }
  searchTerm: string = '';

  searchBooks() {
    console.log('Searching for:', this.searchTerm);
  }
}
