import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  private isAuthenticated = true;
  
  
  

  IsAuthenticated(): boolean {
    
    return this.isAuthenticated;
  }

  
}
