import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../user-model';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class RegisterService {

  public api_url='register/user';
  public subject: Subject<User> = new Subject<User>();
  public get currentUser(): Observable<User> {
    return this.subject.asObservable();
  }

  constructor(public http: HttpClient) { }

  public register(user:User){
   return  this.http.post<User>(this.api_url,user,httpOptions)
     .subscribe(data=> {
      let user = data;
      console.log("user id>" + user.userid);
      if (user && user.userid) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        this.subject.next(Object.assign({}, user));
        console.log('curentUser:' + JSON.parse(localStorage.getItem('currentUser')).userid);
        alert("账户注册成功，即将跳转至首页...")
      }
    });

    }
  }


