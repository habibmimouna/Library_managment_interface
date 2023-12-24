import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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
    adress: '',
    role: '',
    username: '',
    email: '',
    password: '',
    libraryCard: '',
    phone: '',
  };
  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.signup(this.user).subscribe(
      (data) => {
        console.log('User added:', data);
        
      },
      (error) => {
        console.error('Error adding book:', error);
      }
    );
  }

}
