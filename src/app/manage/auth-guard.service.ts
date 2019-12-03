import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { LoginService } from '../nguser/user-login/login.service';
import { User } from "../nguser/user-model";
import {Observable, Subject} from "rxjs";
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    public userLoginService: LoginService) {}

   public state:number ;
   public subject = new Subject<boolean>();
    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean>{
       /*
       这是userLoginService中定义的 也是一个subject.asObservable
        public subject: Subject<User> = new Subject<User>();
        public get currentUser(): Observable<User> {
        return this.subject.asObservable();
        }
        */
      /* this.userLoginService.currentUser
         .subscribe(
           data=>this.state=data.state
         )

       setTimeout(()=>{
         if(this.state==1)
          return true
         else false;
       },50)
*/
             this.userLoginService.currentUser
               .subscribe(data=>{
                 this.state=data.state;
                 if(this.state==1)
                   this.subject.next(true)
                 else this.subject.next(false);
               });
          return this.subject.asObservable();
  }
}
