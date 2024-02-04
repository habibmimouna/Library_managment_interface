import { Component } from '@angular/core';
import { CategorieService } from '../categorie.service';
import { BookService } from '../book.service';
import { ReservationService } from '../reservation.service';
import { Category } from '../categorie';
import { Book } from '../book';
import { User } from '../../User/user';
import { UserService } from '../../User/user.service';
import { Reservation } from '../reservation';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrl: './search-book.component.scss',
})
export class SearchBookComponent {
  categories: Category[] = []; 
  books: Book[] = []; 
  selectedOption: string = '';
  showModal: boolean = false;
  reservationDate: Date=new Date;
  selectedBookId: number | null=null;
  currentUser: User ={
    id: null,
    adresse: '',
    role: 'USER',
    username: '',
    email: '',
    password: '',
    libraryCard: '',
    phone: '',
  }
  reservation:Reservation={
    id:null,
    dateReservation: new Date,
    livreId:null,
    userId:null,

  }
  
  
  constructor(private Categorieservice: CategorieService ,private Bookservice: BookService,private ReservationService:ReservationService,private UserService:UserService) {}

  ngOnInit() {
    this.Categorieservice.getCategoriesList().subscribe((data) => {
      this.categories = data;
    });
    this.Bookservice.getBooksList().subscribe((data) => {
      this.books = data;
    });
    const currentUser = this.UserService.getCurrentUser();
    if (currentUser) {
      this.currentUser = currentUser;
    } else {
     console.log('no user is logged in');
     
    }

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
  toggleModal() {
    this.showModal = !this.showModal;
  }
  openModal(bookId: number) {
    this.selectedBookId = bookId;
    console.log(this.selectedBookId);
    
    
    this.toggleModal();
  }
  reserveBook() {
    this.reservation.livreId=this.selectedBookId
    this.reservation.userId=this.currentUser.id
    console.log(this.reservation.userId);
    
    console.log(this.reservation);
    
    this.ReservationService.createReservation(this.reservation).subscribe(
      (data) => {
        console.log('Reservation successful', data);
        
        this.toggleModal();
        // Additional success handling
      },
      (error) => {
        console.error('Error creating reservation', error);
        // Error handling
      }
    );
  }
  getUser(userId:number){
    let user=this.UserService.getUserById(userId)
    return user
  }
}
