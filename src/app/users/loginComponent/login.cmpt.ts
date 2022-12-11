import { Component } from '@angular/core';
import { UsersService } from './../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.cmpt.html',
  styleUrls: ['./login.cmpt.css'],
})
export class LoginComponent {
  constructor(private usersService: UsersService, private router: Router) {}

  errors!: string;

  submit(f: any) {
    const user = f.value;
    if (f.invalid) {
      this.errors = 'All fields are required';
      return;
    }
    this.usersService.login(user).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => (this.errors = err.error.message),
    });
  }
}
