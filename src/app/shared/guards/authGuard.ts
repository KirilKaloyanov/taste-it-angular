import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { UsersService } from 'src/app/users/users.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private usersService: UsersService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isLogged = !!this.usersService.getToken();
    const shouldBeLogged = route.data['shouldBeLogged'];
    if (shouldBeLogged) {
      if (isLogged) return true;
      else {
        this.router.navigate(['/']);
        return false;
      } 
    } else {
      if (isLogged) {
        this.router.navigate(['/']);
        return false;
      }
      else return true;
    }
  }
}
