import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.cmpt.html',
  styleUrls: ['./register.cmpt.css'],
})
export class RegisterComponent {

  constructor(private usersService: UsersService, private router: Router){}

  errors: string | null = null;
  submitBtnText = 'Register';

  submit(form: any) {
    this.submitBtnText = 'Register ...';
    const { username, password, repass } = form.value;

    if (form.invalid || password != repass) {
      this.submitBtnText = 'Register';
      this.renderErrors(form.control.controls);
      return;
    }

    this.usersService.register({username, password}).subscribe({
      next: () => {
        this.usersService.login({username, password}).subscribe({
          next: () => this.router.navigate(['/']),
          error: (err) => console.log(err)
        })
      },
      error: err => {
        this.submitBtnText = 'Register';
        this.errors = err.error.errors.username.message;
      }
    })

  }

  renderErrors({ username, password, repass }: any) {
    if (username.errors?.required || password.errors?.required)
      this.errors = 'All fields are required';
    if (username.errors?.minlength || password.errors?.minlength)
      this.errors = 'Username and password must be at least 5 characters long';
    if (password.value != repass.value) {
      this.errors = "Passwords don't match";
      return;
    }
  }

  onInput() {
    this.errors = null;
  }
}
