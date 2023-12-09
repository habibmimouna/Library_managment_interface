import { CanActivateFn } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  
  

  if (!auth.IsAuthenticated()) {
    router.navigateByUrl('user/Dashboard');
    return false;
  }
  return true;
};