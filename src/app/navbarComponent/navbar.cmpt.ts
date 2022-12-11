import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.cmpt.html',
  styleUrls: ['./navbar.cmpt.css'],
})
export class NavbarComponent {
  activeLink: string = '';

  public loggedInUser$!: Observable<{username: string} | null>;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.loggedInUser$ = this.usersService.getLoggedUser();
    this.loggedInUser$.subscribe(result => console.log(result));
  }


  onClick(e: any) {
    this.activeLink = e.target.textContent;
  }
}
