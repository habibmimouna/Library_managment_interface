import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../User/user';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
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
  constructor(private authService: AuthService,private router:Router) {}

  onSubmit() {
    this.authService.signup(this.user).subscribe(
      (data) => {
        console.log('User added:', data);
        const isConfirmed = confirm('you have sign up with success go back to login page ?');
    if (isConfirmed) {
        this.router.navigate(['auth/login']);
    }
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );
  }

}
