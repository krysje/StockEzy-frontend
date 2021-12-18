import { environment } from './../../environments/environment';
import { Login } from './../models/login.model';
import { Authuser } from './../models/authuser.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  account_url = environment.account_url;
  
  constructor(private http:HttpClient) { }

  //calling the server 
  doLogin(loginCred:Login):Observable<any>{
    return this.http.post(`${this.account_url}/login`, loginCred);
  }

    


  // for login user
  saveToken(token){
    localStorage.setItem("token", token);
    return true;
  }

  isLoggedIn(){
   return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    return true;
  }

  getToken(){
    return localStorage.getItem("token");
  }

}
