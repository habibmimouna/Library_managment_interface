import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../User/user.service';
import { User } from '../../User/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'], // Note: 'styleUrls' instead of 'styleUrl'
})
export class AddUserComponent {
  user: User = {
    id: null, 
    adresse: '',
    role: 'USER',
    username: '',
    email: '',
    password: '',
    libraryCard: '',
    phone: '', // Assuming phone should be a number, initialize with null or a valid number
  };

  constructor(private userService: UserService, private router: Router) {}

  backfunction() {
    this.router.navigate(['admin/Dashboard']);
  }

  onSubmit() {
    this.userService.createUser(this.user).subscribe(
      (data) => {
        console.log('User added:', data);
        this.resetForm();
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );
  }

  private resetForm() {
    this.user = {
      id: null,
      adresse: '',
      role: 'USER',
      username: '',
      email: '',
      password: '',
      libraryCard: '',
      phone: '',
    };
  }
}
