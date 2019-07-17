import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginInfo } from './login-info'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  checkUrl = '/loginCheck'
  constructor(private http: HttpClient) { }

  check(loginInfo: LoginInfo){
    return this.http.post(this.checkUrl, loginInfo)
  }

}
