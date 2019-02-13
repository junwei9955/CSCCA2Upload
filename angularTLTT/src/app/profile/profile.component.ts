import { UserService } from '../user/shared/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user/shared/user.model'
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router'
import { TalentService } from '../talents/shared/talent.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userClaims: any;
  user:User;
  errors : any;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private router: Router, private userService: UserService, private toastr: ToastrService,public talentService: TalentService) { }

  ngOnInit() {
    if(localStorage.getItem('userToken'))
    {
      this.userService.getUserClaims().subscribe(result => {
        console.log("Result : " +result);
        if(result==null)
        {
          localStorage.removeItem('userId');
          localStorage.removeItem('userToken');
          this.router.navigate(['/signin']);
        }
        this.userClaims = result;
        localStorage.setItem('userId',this.userClaims.Id);
      },
      error => {
        this.errors = error;
        console.log(this.errors);
        localStorage.removeItem('userId');
        localStorage.removeItem('userToken');
        this.router.navigate(['/signin']);
      },
      () => {
        this.talentService.getTalentListByUserId();
      }
    );
    }
    else
    {
      this.router.navigate(['/home']);
    }
  }
  
}
