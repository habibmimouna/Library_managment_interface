import { Component } from '@angular/core';


@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrl: './search-book.component.scss'
})
export class SearchBookComponent {
  
  options = [
    { label: 'Categorie', value: '1' },
    { label: 'Author', value: '2' },
    { label: 'Title', value: '3' },
    
  ];

   selectedOption: string ='';

  searchTerm: string = '';

  searchBooks() {
    console.log('Searching for:', this.searchTerm);
  }

}
