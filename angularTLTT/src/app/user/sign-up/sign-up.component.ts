import { UserService } from '../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model'
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../sign-in/sign-in.component.css']
})
export class SignUpComponent implements OnInit {

  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
}
  resetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.user = {
      UserName:'',
      Email: '',
      Password: '',
      FullName: '',
      Captcha: null
    }
  }

  OnSubmit(form : NgForm){
    form.value.UserId = "";
    form.value.captcha = "";
    console.log(form.value);
    this.userService.registerUser(form.value)
    .subscribe((data: any) => {
      if(data.Succeeded == true)
      {
        this.resetForm(form);
        this.toastr.success('User Registration successful');
        
      }
      else{
        this.toastr.error(data.Errors[0]);
      }
    })
  }
}
