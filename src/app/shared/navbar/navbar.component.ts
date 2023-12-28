import { Component } from '@angular/core';
import { UserService } from '../../User/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private userService:UserService){};

  isAdmin(){
    const currentUser=this.userService.getCurrentUser();
    if(currentUser?.role==='ADMIN'){
      
    }
  }

}
