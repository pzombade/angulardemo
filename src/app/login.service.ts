import { Injectable } from '@angular/core';
import { Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginSubject = new Subject<string>();
  constructor() { }

  setUser(userName:string){
    this.loginSubject.next(userName);
    
  }

  getUser(){
    return this.loginSubject;
  }

  logout(){
    sessionStorage.setItem('userName',"null");
  }
}
