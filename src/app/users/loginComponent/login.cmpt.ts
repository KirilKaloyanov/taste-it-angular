import { Component } from '@angular/core';
import { AbstractControlDirective } from '@angular/forms';
import { UsersService } from './../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.cmpt.html',
  styleUrls: ['./login.cmpt.css'],
})
export class LoginComponent {
  constructor(private usersService: UsersService, private router: Router) {}

  errors: string | null = null;
  submitBtnText: string = 'Log In';

  onInput() {
    this.errors = null;
  }

  submit(f: AbstractControlDirective) {
    this.submitBtnText = 'Logging in ...'
    const user = f.value;
    if (f.invalid) {
      this.submitBtnText = 'Log In';
      this.errors = 'All fields are required';
      return;
    }
    this.usersService.login(user).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => {
        this.submitBtnText = 'Log In';
        this.errors = err.error.message;
      }
    });
  }
}
