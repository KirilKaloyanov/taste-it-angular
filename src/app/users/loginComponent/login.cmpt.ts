import { Component } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.cmpt.html',
  styleUrls: ['./login.cmpt.css'],
})
export class LoginComponent {
  submit(e: any) {
    console.log(e.value);
  }
}
