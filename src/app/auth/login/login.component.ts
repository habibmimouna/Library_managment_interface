import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    console.log('init');
  }

  onSubmit(): void {
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      console.log('Login form submitted');
      console.log(this.loginForm.value);
      if (
        this.loginForm.value.email == 'khalil@gmail.com' &&
        this.loginForm.value.password == '123456789'
      ) {
        localStorage.setItem('token', 'kjkj1258');
        this.router.navigate(['user/Dashboard']);
      }else
      if (
        this.loginForm.value.email == 'Admin@gmail.com' &&
        this.loginForm.value.password == 'Admin1111'
      ) {
        localStorage.setItem('token', 'kjkj1258');
        this.router.navigate(['admin/Dashboard']);
      } else {
        alert('password invalid');
      }
    } else {
      return console.log('error');
    }
  }
}
