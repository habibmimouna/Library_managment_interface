import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';
import { BorrowBookComponent } from './book/borrow-book/borrow-book.component';
import { SearchBookComponent } from './book/search-book/search-book.component';
import { AccountComponent } from './User/account/account.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { AddUserComponent } from './Admin/add-user/add-user.component';
import { EditBookCategoryComponent } from './Admin/edit-book-category/edit-book-category.component';
import { EditUsersComponent } from './Admin/edit-users/edit-users.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDashboardComponent,
    BorrowBookComponent,
    SearchBookComponent,
    AccountComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    AddBookComponent,
    AddUserComponent,
    EditBookCategoryComponent,
    EditUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
