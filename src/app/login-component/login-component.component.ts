import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  userName: string = 'admin';
  password: string = 'password';
  // loginService : LoginService = null;

  constructor(private loginService : LoginService, private router: Router){
    // this.loginService = loginService;
  }

  login(){
    console.log(`userName:${this.userName} : password:${this.password}`);
    this.loginService.setUser(this.userName);
    sessionStorage.setItem('userName',this.userName);
    this.router.navigate(['employeelist']);
  }
}
