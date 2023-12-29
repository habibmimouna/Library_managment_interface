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
  editingUser: User = {
    id: '', 
    username: '',
    email: '',
    phone: '',
    adresse: '',
    role: '' ,
    libraryCard:'',
    password:'',
  };
 
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
  onDeleteUser(id: string) {
    const isConfirmed = confirm(
      'Are you sure you want to delete this user?'
    );
    if (isConfirmed) {
      this.UserService.deleteUser(id).subscribe(
        (response) => {
          console.log('User deleted successfully', response);

        },
        (error) => {
          console.error('Error deleting user', error);
         
        }
      );
      this.reloadPage();
    }
  }
  
 
 
  get editingUserName(): string {
    return this.editingUser ? this.editingUser.username : '';
  }

  set editingUserName(value: string) {
    if (this.editingUser) {
      this.editingUser.username = value;
    }
  }

  
  reloadPage(): void {
    window.location.reload();
  }
}
