import { Component } from '@angular/core';
import { UserService } from '../../User/user.service';
import { BookService } from '../../book/book.service';
import { Book } from '../../book/book';
import { User } from '../../User/user';
import { CategorieService } from '../../book/categorie.service';
import { Category } from '../../book/categorie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  books: Book[] = [];
  categories: Category[] = [];
  users: User[] = [];
  showModal: boolean = false;
  showEditModal: boolean = false;
  editingCategory: Category | null = null;
  newCategoryName: string = '';

  constructor(
    private bookService: BookService,
    private categoryService: CategorieService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.bookService.getBooksList().subscribe((data) => {
      this.books = data;
    });
    this.categoryService.getCategoriesList().subscribe((data) => {
      this.categories = data;
    });
    this.userService.getUsersList().subscribe((data) => {
      this.users = data;
    });
  }

  onDeleteBook(id: number) { // Assuming id is a number
    const isConfirmed = confirm('Are you sure you want to delete this book?');
    if (isConfirmed) {
      this.bookService.deleteBook(id).subscribe(
        (response) => {
          console.log('Book deleted successfully', response);
          this.fetchData(); // Fetch updated data
        },
        (error) => {
          console.error('Error deleting book', error);
        }
      );
    }
  }

  onDeleteCategory(id: number) { // Assuming id is a number
    if (id === null) {
      console.error('Attempted to delete a category with null id');
      return;
    }
    const isConfirmed = confirm('Are you sure you want to delete this category?');
    if (isConfirmed) {
      this.categoryService.deleteCategory(id).subscribe(
        (response) => {
          console.log('Category deleted successfully', response);
          this.fetchData(); // Fetch updated data
        },
        (error) => {
          console.error('Error deleting category', error);
        }
      );
    }
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  toggleEditModal(category: Category | null) {
    this.editingCategory = category;
    this.showEditModal = !this.showEditModal;
  }

  addCategory() {
    if (this.newCategoryName) {
      const newCategory: Category = {
        id: null, // Assuming id is auto-generated
        nom: this.newCategoryName,
      };
      this.categoryService.createCategory(newCategory).subscribe((data) => {
        console.log('Category added:', data);
        this.fetchData(); // Fetch updated data
      });
      console.log('Adding category:', this.newCategoryName);
      this.toggleModal();
      this.newCategoryName = '';
    }
  }

  updateCategory() {
    if (this.editingCategory && this.editingCategory.id!==null) {
      this.categoryService.updateCategory(this.editingCategory.id, this.editingCategory).subscribe(
        (response) => {
          console.log('Category updated successfully', response);
          this.fetchData(); // Fetch updated data
          this.toggleEditModal(null);
        },
        (error) => {
          console.error('Error updating category', error);
        }
      );
    }
  }

  get editingCategoryName(): string {
    return this.editingCategory ? this.editingCategory.nom : '';
  }

  set editingCategoryName(value: string) {
    if (this.editingCategory) {
      this.editingCategory.nom = value;
    }
  }
}
