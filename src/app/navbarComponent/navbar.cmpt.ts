import { Component } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.cmpt.html',
  styleUrls: ['./navbar.cmpt.css'],
})
export class NavbarComponent {
  user!: null | string;
  userId!: null | string;

  constructor(private usersService: UsersService) {}

  ngDoCheck() {
    this.user = this.usersService.getUsername();
    this.userId = this.usersService.getUserId();
  }

}
