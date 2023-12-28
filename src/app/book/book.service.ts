import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseURL = 'http://localhost:8081/api/v1/Livre';

  constructor(private httpClient: HttpClient) { }

  getBooksList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseURL}`);
  }
  createBook(book: Book): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, book);
  }
  deleteBook(id: string): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  updateBook(id: string, book:Book): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, book);
  }

}
