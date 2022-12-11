import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.cmpt.html',
  styleUrls: ['./navbar.cmpt.css'],
})
export class NavbarComponent {
  user!: null | string;
  userId!: null | string;
  // public loggedInUser$!: Observable<{username: string} | null>;

  constructor(private usersService: UsersService, private router: Router) {}

  ngDoCheck() {
    // this.loggedInUser$ = this.usersService.getLoggedUser();
    this.user = this.usersService.getUsername();
    this.userId = this.usersService.getUserId();
  }

}
