import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';
import { SearchBookComponent } from './book/search-book/search-book.component';
import { BorrowBookComponent } from './book/borrow-book/borrow-book.component';
import { AccountComponent } from './User/account/account.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { AddUserComponent } from './Admin/add-user/add-user.component';
import { AuthGuard } from './auth/auth.guard';
import { EditBookCategoryComponent } from './Admin/edit-book-category/edit-book-category.component';
import { EditUsersComponent } from './Admin/edit-users/edit-users.component';
import { ReservationComponent } from './book/reservation/reservation.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/login', component: LoginComponent },
  {
    path: 'user/Dashboard',
    component: UserDashboardComponent,
    canActivate: [AuthGuard],
  },

  { path: 'user/catalog', component: SearchBookComponent },
  { path: 'user/reservation', component: ReservationComponent },
  { path: 'user/account', component: AccountComponent },
  {
    path: 'admin/Dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'admin/add-book', component: AddBookComponent },
  { path: 'admin/add-user', component: AddUserComponent },
  { path: 'admin/edit-users', component: EditUsersComponent },
  { path: 'admin/edit-book-category', component: EditBookCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
