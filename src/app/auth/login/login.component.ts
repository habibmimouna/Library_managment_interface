import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../../User/user.service';
import { User } from '../../User/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
 

  constructor(private authService: AuthService, private router: Router,private userService:UserService) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      data => {
        console.log('Login successful');
       
        this.userService.getUserByEmail(this.email).subscribe(user => {
          if (user) {
            console.log('Fetched user:', user);
            this.userService.setCurrentUser(user); 
          }
        });
        this.router.navigate(['user/Dashboard']); 
      },
      error => {
        console.error('Login failed', error);
        this.errorMessage = 'Login failed. Please check your credentials.';
      }
    );
  }

  
}
