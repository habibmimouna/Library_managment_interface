import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './categorie';
import { HttpClient } from '@angular/common/http';
import { Reservation } from './reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseURL = 'http://localhost:8081/api/v1/Reservations';


  constructor(private httpClient: HttpClient) { }
  getReservationList(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(`${this.baseURL}`);
  }
  createReservation(reservation: Reservation): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, reservation);
  }
  deleteReservation(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  updateReservation(id: number, reservation:Reservation): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, reservation);
  }
  getReservationById(id: number): Observable<Object> {
    return this.httpClient.get<Category>(`${this.baseURL}/${id}`);
  }
  
}
