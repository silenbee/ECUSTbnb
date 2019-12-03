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
export class LoginService {

  public api_url='login/user';
  public subject: Subject<User> = new Subject<User>();
  public get currentUser(): Observable<User> {
    return this.subject.asObservable();
  }

  constructor(public http: HttpClient) { }

  public login(user: User){
    return this.http.post<User>(this.api_url,user,httpOptions)
      .subscribe(data=>{
        if(data['code'])
          alert("用户名不存在或密码错误！");
        else{
        let user = data;
        console.log("user id>" + user.userid);
        if (user && user.userid) {
          localStorage.setItem("currentUser", JSON.stringify(user));
          this.subject.next(Object.assign({}, user));
        console.log('currentUser:'+JSON.parse(localStorage.getItem('currentUser')).userid);
          alert("登录成功！");
        }
      }});
  }

  public logout(): void {
    localStorage.removeItem("currentUser");
    this.subject.next(Object.assign({}));
  }



    /*  .get(this.userLoginURL)
      .pipe(
        map((response: Response) => {
          let user = response.json();
          console.log("user object>" + user);
          if (user && user.token) {
            localStorage.setItem("currentUser", JSON.stringify(user));
            this.subject.next(Object.assign({}, user));
          }
          return response;
        })
      )
      .subscribe(
        data => {
          console.log("login success>" + data);
        },
        error => {
          console.error(error);
        }
      );*/


}
