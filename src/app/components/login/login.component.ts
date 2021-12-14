import { LoginService } from './../../services/login.service';
import { Authuser } from './../../models/authuser.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginCred: Login;
  authuser: Authuser;
  formGroup: FormGroup;
 
  credentials={
    email:'',
    password:''
  }

  constructor(private formbuilder: FormBuilder, private loginService:LoginService, private router:Router ) { 
    this.loginCred = new Login();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }


  onSubmit(){
    if(this.formGroup.valid){
      this.loginCred.email = this.formGroup.value["email"];
      this.loginCred.password = this.formGroup.value["password"];

      this.loginService.doLogin(this.loginCred).subscribe(
        response =>{
            console.log(response);
            this.authuser = response
            this.loginService.saveToken(this.authuser.token)
            this.router.navigateByUrl('/dashboard')
        },
        error=>{
          console.log(error);
        })}
      else{
        console.log("Not Valid");
      }
    }
  }



