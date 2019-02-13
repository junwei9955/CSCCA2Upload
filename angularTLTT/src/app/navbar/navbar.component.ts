import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../user/shared/user.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userClaims : any; 
  errors : any;
  selectedFiles: FileList;
 
  constructor(private router:Router, private userService: UserService) { }

  ngOnInit() {
    console.log("Nav bar component : " + localStorage.getItem('userToken'))
    if(localStorage.getItem('userToken'))
    {
      this.userService.getUserClaims().subscribe(result => {
        console.log(result);
        this.userClaims = result;
        localStorage.setItem('userId',this.userClaims.Id);
        localStorage.setItem('userEmail',this.userClaims.Email);
      },
      error => {
        this.errors = error;
        console.log(this.errors);
        localStorage.removeItem('userId');
        localStorage.removeItem('userToken');
        localStorage.removeItem('userEmail');
        this.router.navigate(['/signin']);
      },
      () => {
        
      }
    );
    }
    else
    {
      this.router.navigate(['/signin']);
    }
    
  }
  Logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userEmail');
    this.router.navigate(['/signin']);
  }


}



