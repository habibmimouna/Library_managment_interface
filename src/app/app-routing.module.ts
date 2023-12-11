import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';
import { authGuard } from './auth/guard/auth.guard';
import { SearchBookComponent } from './book/search-book/search-book.component';
import { BorrowBookComponent } from './book/borrow-book/borrow-book.component';
import { AccountComponent } from './User/account/account.component';



const routes: Routes = [
  { path: '',  redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/signup', component: SignupComponent },
  { path:'auth/login', component:LoginComponent},
  { path:'user/Dashboard', component:UserDashboardComponent,canActivate: [authGuard]},
  { path:'user/catalog', component:SearchBookComponent},
  { path:'user/reservation', component:BorrowBookComponent},
  { path:'user/account', component:AccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
