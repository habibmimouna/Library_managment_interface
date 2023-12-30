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
    const currentUserRole=this.userService.getCurrentUser()?.role;
    if(currentUserRole==='ADMIN'){

      
      return true
    }else return false
  }

}
