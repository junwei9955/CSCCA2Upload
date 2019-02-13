import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import { Response } from '@angular/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  readonly rootUrl = 'http://ec2-52-87-177-125.compute-1.amazonaws.com';

  constructor(private http: HttpClient) { }

  registerUser(user : User){
    const body: User = {
      UserName : user.UserName,
      Password : user.Password,
      Email : user.Email,
      FullName : user.FullName,
      Captcha: null
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + '/api/User/Register', body,{headers : reqHeader});
  }

  userAuthentication(userName, password) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    
    return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
  }

  getUserClaims(){
    var reqHeader = new HttpHeaders({ 'Authentication': 'Bearer ' + localStorage.getItem('userToken') });
    return  this.http.get(this.rootUrl+'/api/GetUserClaims',{ headers: reqHeader });
   }
}
