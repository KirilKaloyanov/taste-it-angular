import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './loginComponent/login.cmpt';
import { LogoutComponent } from './logoutComponent/logout.cmpt';
import { AuthGuard } from '../shared/guards/authGuard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent, canActivate: [AuthGuard], data: {shouldBeLogged: false} },
      { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard], data: {shouldBeLogged: true} },
    ]),
  ],
  declarations: [LoginComponent],
  providers: [],
  exports: [],
})
export class UsersModule {}
