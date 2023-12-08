import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';
import { authGuard } from './auth/guard/auth.guard';



const routes: Routes = [
  { path: '',  redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/signup', component: SignupComponent },
  {path:'auth/login', component:LoginComponent},
  {path:'user/Dashboard', component:UserDashboardComponent,canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
