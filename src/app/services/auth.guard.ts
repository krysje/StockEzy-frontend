import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router:Router){

  }

  canActivate():boolean{

    if(this.loginService.isLoggedIn()){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
    
  }
  
}
