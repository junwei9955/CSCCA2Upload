import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoginError : boolean = false;
  constructor(private userService : UserService,private router : Router, private toastr: ToastrService) { }

  ngOnInit() {
    if(localStorage.getItem('userToken'))
    {
      this.router.navigate(['/profile']);
    }
  }

  OnSubmit(userName,password) {
    this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
      localStorage.setItem('userToken',data.access_token);
      this.toastr.success("Sign In successful");
      this.router.navigate(['/profile']);
    },
    (err : HttpErrorResponse)=>{
      this.toastr.error("Sign in failed");
      this.isLoginError = true;
    });
  }

}
