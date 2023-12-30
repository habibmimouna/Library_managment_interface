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
    if (this.selectedOption) {
      console.log('Searching in category:', this.selectedOption);
      this.Bookservice.getBooksByCategory(this.selectedOption).subscribe((data) => {
        // Filter books based on the searchTerm
        this.books = data.filter(book => 
          book.titre.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
          book.auteur.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      });
    } else {
      console.log('No category selected');
      // Optionally, handle the case where no category is selected
    }
  }
  
}
