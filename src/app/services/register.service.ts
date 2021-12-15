import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = "http://localhost:5000/api/Account";
  
  constructor(private http:HttpClient) { }

  //calling the server 
  doRegister(userCred:User):Observable<any>{
    return this.http.post(`${this.url}/register`, userCred);
  }
}
