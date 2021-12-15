import { User } from './../../models/user.model';
import { FormGroup, FormsModule, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup
  userCred: User

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      mobileNo: new FormControl('', [Validators.required]),
    })
  }

  onSubmit(){
    if(this.formGroup.valid){
      this.userCred.username = this.formGroup.value["username"];
      this.userCred.mobileNumber = this.formGroup.value["mobileNo"]
      this.userCred.email = this.formGroup.value["email"];
      this.userCred.password = this.formGroup.value["password"];

      this.registerService.doRegister(this.userCred).subscribe(
        response =>{
            console.log(response);
            this.router.navigateByUrl('/login')
        },
        error=>{
          console.log(error);
        })}
      else{
        console.log("Not Valid");
      }
    }
  }

