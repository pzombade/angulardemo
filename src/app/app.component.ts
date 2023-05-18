import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'PZ';
  loginSubscription: Subscription;
  isLoggedIn = false;

  constructor(private loginService : LoginService){
    // this.loginService = loginService;
  }

  ngOnInit(): void {
    console.log(`In ngOnInit`);
    this.loginSubscription = this.loginService.getUser()
    .subscribe(response => {
      this.title = response;
      this.isLoggedIn = sessionStorage.getItem('userName') !== "null";
    })
  }
  ngOnDestroy(): void {
    console.log(`In ngOnDestroy`);
    this.loginSubscription.unsubscribe();
  }

  logout(){
    
    this.loginService.logout();
  }
}
