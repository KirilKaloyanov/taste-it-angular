import { Component } from '@angular/core';
import { UsersService } from './../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.cmpt.html',
  styleUrls: ['./login.cmpt.css'],
})
export class LoginComponent {
  constructor(private usersService: UsersService) {}

  submit(user: any) {
    this.usersService.login(user).subscribe({
      next: (res) => console.log('success'),
      error: (err) => console.log('failure')
    });

  }
}
