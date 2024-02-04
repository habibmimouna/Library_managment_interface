import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { ReservationService } from '../../book/reservation.service';
import { Reservation } from '../../book/reservation';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent implements OnInit {
  reservations: Reservation[] = [];
  user: User = {
    id: null,
    adresse: '',
    role: 'USER',
    username: '',
    email: '',
    password: '',
    libraryCard: '',
    phone: '',
  };

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private reservationService: ReservationService
  ) {}

  ngOnInit() {
    let currentUser = this.userService.getCurrentUser();
    if (currentUser) {
      this.user = currentUser;
    } else {
      console.log('no user is logged in');
    }
    this.reservationService.getReservationList().subscribe((data) => {
      console.log(data);
      this.reservations = data;

      for (let reservation of this.reservations) {
        
        
        if (currentUser && reservation.userId == currentUser.id) {
        
        console.log("test");
        
          console.log('reserv', reservation);
        }
      }
    });
  }
}
