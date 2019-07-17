import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  FormControl} from '@angular/forms';
import { LoginService } from './login.service'
import { NzMessageService  } from 'ng-zorro-antd'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { from } from 'rxjs';

interface LoginResult {
  code: string,
  msg: string
}
 @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  
  constructor(
     private fb: FormBuilder,
     private loginService: LoginService, 
     private message: NzMessageService,
     private router: Router
  ) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(loginInfo) {
    console.log(loginInfo)
    this.loginService.check(loginInfo).subscribe((result:LoginResult)=>{
      console.log(result)
      if(result.code === '0'){
        this.message.error(result.msg)
      }else if(result.code === '1'){
        this.router.navigate(['/main'])
      }
    })
  }
}
