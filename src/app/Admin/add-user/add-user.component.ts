import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../User/user.service';
import { User } from '../../User/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent {
  user: User = {
    id: null,
    adresse: '',
    role: 1,
    username: '',
    email: '',
    password: '',
    libraryCard: '',
    phone: '',
  };

  constructor(private userService: UserService, private router: Router) {}

  backfunction() {
    this.router.navigate(['admin/Dashboard']);
  }

  onSubmit() {
    this.userService.createUser(this.user).subscribe(
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
    this.user = {
      id: null,
      adresse: '',
      role: 1,
      username: '',
      email: '',
      password: '',
      libraryCard: '',
      phone: '',
    };
  }
}
