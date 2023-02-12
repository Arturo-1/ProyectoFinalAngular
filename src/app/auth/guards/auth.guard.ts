import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router:Router
  ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

   return this.validCookie();
  }

  validCookie(

  ){
    if (sessionStorage.getItem('roles')) {
          return true;
        } else {
          // return false;
          return this.router.navigate(['dashboard/home']).then(() => { alert('No cuentas con permisos para ver esta seccion'); return false });
        }
  }
}

  // checkAdmin() {
  //   if (sessionStorage.getItem('role')) {
  //     return true;
    // } else {
  //     this.router.navigate(['home']);
  //     return false;
  //   }
  // }
// }


