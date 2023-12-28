import { Component } from '@angular/core';
import { UserService } from '../../User/user.service';
import { BookService } from '../../book/book.service';
import { Book } from '../../book/book';
import { User } from '../../User/user';
import { CategorieService } from '../../book/categorie.service';
import { Category } from '../../book/categorie';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrl: './edit-users.component.scss'
})
export class EditUsersComponent {
  books: Book[] = [];
  categories: Category[] = [];
  users: User[] = [];
  category: Category = {
    id: '',
    nom: '',
  };
  book: Book = {
    id: '', 
    titre: '',
    auteur: '',
    datePublication: '',
    isbn: '',
    categories: [] 
  };
  user: User = {
    id: '', 
    username: '',
    email: '',
    phone: '',
    adresse: '',
    role: '' ,
    libraryCard:'',
    password:'',
  };
  
  showModal: boolean = false;
  showEditModal: boolean = false;
  editingCategory: Category | null = null;
  newCategoryName: string = '';
  constructor(
    private Bookservice: BookService,
    private CategoryServise: CategorieService,
    private UserService: UserService
  ) {}

  ngOnInit() {
    this.Bookservice.getBooksList().subscribe((data) => {
      this.books = data;
    });
    this.CategoryServise.getCategoriesList().subscribe((data) => {
      this.categories = data;
    });
    this.UserService.getUsersList().subscribe((data) => {
      this.users = data;
    });
  }
  onDeleteBook(id: string) {
    const isConfirmed = confirm(
      'Are you sure you want to delete this book?'
    );
    if (isConfirmed) {
      this.Bookservice.deleteBook(id).subscribe(
        (response) => {
          console.log('Book deleted successfully', response);

        },
        (error) => {
          console.error('Error deleting book', error);
         
        }
      );
      this.reloadPage();
    }
  }
  onDeleteCategory(id: string) {
    const isConfirmed = confirm(
      'Are you sure you want to delete this category?'
    );
    if (isConfirmed) {
      this.CategoryServise.deleteCategory(id).subscribe(
        (response) => {
          console.log('Category deleted successfully', response);
        },
        (error) => {
          console.error('Error deleting category', error);

        }
      );
      this.reloadPage();
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
      this.category.nom = this.newCategoryName;
      this.CategoryServise.createCategory(this.category).subscribe((data) => {
        console.log('category added:', data);
      });
      console.log('Adding category:', this.newCategoryName);
      this.toggleModal();
      this.newCategoryName = '';
      this.reloadPage();
    }
  }
  updateCategory() {
    if (this.editingCategory) {
      this.CategoryServise.updateCategory(
        this.editingCategory.id,
        this.editingCategory
      ).subscribe(
        (response) => {
          console.log('Category updated successfully', response);
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
  reloadPage(): void {
    window.location.reload();
  }
}
