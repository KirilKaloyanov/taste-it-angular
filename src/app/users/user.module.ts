import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './loginComponent/login.cmpt';
import { UsersService } from './users.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: 'login', component: LoginComponent }]),
  ],
  declarations: [LoginComponent],
  providers: [UsersService],
  exports: [],
})
export class UsersModule {}
