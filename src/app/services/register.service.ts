import { environment } from './../../environments/environment';
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  account_url = environment.account_url;
  
  constructor(private http:HttpClient) { }

  //calling the server 
  doRegister(userCred:User):Observable<any>{
    return this.http.post(`${this.account_url}/register`, userCred);
  }
}
