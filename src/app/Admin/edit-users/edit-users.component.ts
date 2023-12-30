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
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent {
  books: Book[] = [];
  categories: Category[] = [];
  users: User[] = [];
  showModal: boolean = false;
  showEditModal: boolean = false;
  editingUser: User | null = null;

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

  onDeleteUser(id: number) { // Assuming id is a number
    const isConfirmed = confirm('Are you sure you want to delete this user?');
    if (isConfirmed) {
      this.userService.deleteUser(id).subscribe(
        (response) => {
          console.log('User deleted successfully', response);
          this.fetchData(); // Fetch updated data
        },
        (error) => {
          console.error('Error deleting user', error);
        }
      );
    }
  }

  toggleEditModal(user: User | null) {
    this.editingUser = user;
    this.showEditModal = !this.showEditModal;
  }

  get editingUserName(): string {
    return this.editingUser ? this.editingUser.username : '';
  }

  set editingUserName(value: string) {
    if (this.editingUser) {
      this.editingUser.username = value;
    }
  }
}
