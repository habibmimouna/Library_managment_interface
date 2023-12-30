import { Component } from '@angular/core';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';
import { Router } from '@angular/router';
import { User } from '../../User/user';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss',
})
export class ReservationComponent {
  reservation:Reservation={
    id:null,
    dateReservation: new Date,
    livreId:null,
    user_id:null,
  }
  currentUser: User={
    id: null,
    adresse: '',
    role: 'USER',
    username: '',
    email: '',
    password: '',
    libraryCard: '',
    phone: '',
  }
  constructor(
    private reservationService:ReservationService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.reservation.dateReservation) {
      const date = new Date(this.reservation.dateReservation);
      this.reservation.dateReservation = date.toISOString().split('.')[0];
    }
    console.log(this.reservation);

    this.createBook();
  }
  private createBook() {
    this.reservationService.createReservation(this.reservation).subscribe(
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
    this.reservation = {
      id:null,
      dateReservation: '',
      livreId:null,
      user_id:null,
    };
  }

}
