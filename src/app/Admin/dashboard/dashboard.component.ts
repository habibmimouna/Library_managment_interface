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
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  books: Book[] = [];
  categories: Category[] = [];
  category : Category={
    id: null, 
    nom: '',

  };
  users: User[] = [];
  showModal: boolean = false;
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
  toggleModal() {
    this.showModal = !this.showModal;
  }
  addCategory() {
    if (this.newCategoryName) {
      this.category.nom=this.newCategoryName
      this.CategoryServise.createCategory(this.category).subscribe((data)=>{
        console.log('category added:',data);
        })
      console.log('Adding category:', this.newCategoryName);
      this.toggleModal();
      // Reset the input field
      this.newCategoryName = '';
      this.reloadPage();
    }
  }
  reloadPage(): void {
    window.location.reload();
  }
}
