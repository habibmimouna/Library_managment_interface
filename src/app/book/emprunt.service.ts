import { Injectable } from '@angular/core';
import { emprunt } from './emprunt';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmpruntService {
  private baseURL = 'http://localhost:8081/api/v1/Emprunt';
  constructor(private httpClient: HttpClient) {}
  createEmprunt(emprunt: emprunt): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, emprunt);
  }
}
