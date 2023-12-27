import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './categorie';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  private baseURL = 'http://localhost:8081/api/v1/Categories';

  constructor(private httpClient: HttpClient) {}

  getCategoriesList(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.baseURL}`);
  }
  createCategory(category: Category): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, category);
  }
  deleteCategory(id: string): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  updateCategory(id: string, category:Category): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, category);
  }
  
}
