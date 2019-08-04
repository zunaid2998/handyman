import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean{
    let authInfo = {
        authenticated: true
    }

    if (!authInfo.authenticated) {
        this.router.navigate(['login']);
        return false;
    }

    return true;
  }
}
