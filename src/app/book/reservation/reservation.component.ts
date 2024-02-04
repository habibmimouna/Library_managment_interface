import { Component } from '@angular/core';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';
import { Router } from '@angular/router';
import { User } from '../../User/user';
import { emprunt } from '../emprunt';
import { EmpruntService } from '../emprunt.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss',
})
export class ReservationComponent {
  emprunt:emprunt={
    id: null,
    dateDebut: '',
    dateFin:'',
    livreId: null,
    userId: null,
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
    private router: Router,
    private EmpruntService :EmpruntService
  ) {}

  onSubmit() {
    if (this.emprunt.dateDebut&&this.emprunt.dateFin) {
      const dateDeb = new Date(this.emprunt.dateDebut);
      const dateFin = new Date(this.emprunt.dateFin);
      this.emprunt.dateDebut = dateDeb.toISOString().split('.')[0];
      this.emprunt.dateFin = dateFin.toISOString().split('.')[0];
    }
    console.log(this.emprunt);

    this.createBook();
  }
  private createBook() {
    this.EmpruntService.createEmprunt(this.emprunt).subscribe(
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
    this.emprunt = {
      id: null,
    dateDebut: '',
    dateFin:'',
    livreId: null,
    userId: null,
    };
  }

}
