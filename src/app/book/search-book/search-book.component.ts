import { Component } from '@angular/core';


@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrl: './search-book.component.scss'
})
export class SearchBookComponent {
  searchTerm: string = '';

  searchBooks() {
    console.log('Searching for:', this.searchTerm);
  }

}
