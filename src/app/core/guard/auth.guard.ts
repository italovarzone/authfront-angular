import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router
  ) {}

  canActivate(): boolean | UrlTree {
    if (!this.authService.getToken()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
