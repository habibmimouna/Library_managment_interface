import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';
import { CategorieService } from '../categorie.service';
import { Category } from '../categorie';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent {
  categories: Category[] = [];

  book: Book = {
    id: null,
    titre: '',
    auteur: '',
    datePublication: '',
    isbn: '',
    img:'',
    categoryId: null,
  };

  constructor(
    private bookService: BookService,
    private categorieService: CategorieService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categorieService.getCategoriesList().subscribe((data) => {
      this.categories = data;
    });
  }

  backfunction() {
    this.router.navigate(['admin/edit-book-category']);
  }
  onFileChange(event: any) {
    const fileInput = event.target;
    const file = fileInput.files[0];
    const reader = new FileReader();
  
    reader.onloadend = () => {
      const base64file = reader.result as string;
      console.log(base64file);
  
      // You can store the base64 string in your book object or use it as needed.
      this.book.img = base64file;
  
      // Reset the file input to allow selecting the same file again if needed
      fileInput.value = ''; // This line will clear the file input value
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  
  

  onSubmit() {
    if (this.book.datePublication) {
      const date = new Date(this.book.datePublication);
      this.book.datePublication = date.toISOString().split('.')[0];
    }
    console.log(this.book);

    this.createBook();
  }

  private createBook() {
    this.bookService.createBook(this.book).subscribe(
      (data) => {
        console.log('Book added:', data);
        this.resetForm();
      },
      (error) => {
        console.error('Error adding book:', error);
      }
    );
  }

  private resetForm() {
    this.book = {
      id: null,
      titre: '',
      auteur: '',
      datePublication: '',
      isbn: '',
      img:'',
      categoryId: null,
    };
  }
}
