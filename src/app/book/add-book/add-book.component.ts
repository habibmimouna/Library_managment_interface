import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { CategorieService } from '../categorie.service';
import { Category } from '../categorie';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent {
  categories: Category[] = []; 
  selectedCategories: string[] = []; 
  book: Book = {
    id: null, 
    titre: '',
    auteur: '',
    datePublication: '',
    isbn: '',
    categories: [] 
  };

  constructor(private bookService: BookService, private categorieService: CategorieService, private router: Router) {}
  ngOnInit() {
    this.categorieService.getCategoriesList().subscribe((data) => {
      this.categories = data;
    });
    

  }
  backfunction(){
    this.router.navigate(['admin/Dashboard']);

  }

  onSubmit() {
    this.book.categories = this.selectedCategories.map(id => 
      this.categories.find(category => category.id === id)
    ).filter(category => category !== undefined) as Category[];
    // Format the datePublication to "yyyy-MM-dd'T'HH:mm:ss"
    if (this.book.datePublication) {
      const date = new Date(this.book.datePublication);
      this.book.datePublication = date.toISOString().split('.')[0];
    }

    this.bookService.createBook(this.book).subscribe((data) => {
      console.log('Book added:', data);
      this.resetForm();
    }, error => {
      console.error('Error adding book:', error);
    });
  }

  private resetForm() {
    this.book = {
      id: null, 
      titre: '',
      auteur: '',
      datePublication: '',
      isbn: '',
      categories:[],
    };
  }
}
