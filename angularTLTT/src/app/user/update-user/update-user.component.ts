import { UserService } from '../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model'
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router'

@Component({
  selector: 'app-update',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userClaims: any;
  user:User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private router: Router, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;
    });
  }
  resetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.user = {
      UserName:'',
      Email: '',
      Password: '',
      FullName: '',
      Captcha:null
    }
  }
  OnSubmit(form : NgForm){
    console.log(form.value);
    console.log(this.userClaims);
    console.log(form.value);
    // this.userService.updateUser(form.value).subscribe((data:any)=>{
    //   if(data.Succeeded == true){
    //     this.toastr.success("User update successful");
    //   }
    //   else{
    //     this.toastr.error(data.Errors[0]);
    //   }
    // })
  }
}
