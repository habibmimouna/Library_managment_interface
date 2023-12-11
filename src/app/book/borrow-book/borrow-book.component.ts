import { Component } from '@angular/core';

@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrl: './borrow-book.component.scss'
})
export class BorrowBookComponent {
  bookId: string = '';
  userId: string = '';

  borrowBook() {
    console.log('Borrowing book:', this.bookId, 'by user:', this.userId);
  }


}
