import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'home',
  templateUrl: './home.cmpt.html',
  styleUrls: ['./home.cmpt.css']
})
export class HomeComponent implements OnInit{
  user!: null | string;
  userId!: null | string;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.user = this.usersService.getUsername();
    this.userId = this.usersService.getUserId();
  }
}
