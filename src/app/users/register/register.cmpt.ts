import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.cmpt.html',
  styleUrls: ['./register.cmpt.css'],
})
export class RegisterComponent {
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
