import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = 'http://localhost:8081/api/v1/auth/signup';

  constructor(private httpClient: HttpClient) {}

  signup(user: User): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, user);
  }
}
