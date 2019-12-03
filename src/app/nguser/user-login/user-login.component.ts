import { Component, OnInit } from '@angular/core';
import { User } from '../user-model';
import { LoginService } from './login.service';
import { HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import {Subject} from "rxjs";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  public user: User = new User();
  public subject: Subject<boolean> = new Subject<boolean>();
  public state:number ;
  public signal:boolean ;
  constructor(public loginService:LoginService,
              public router: Router) { }

  public Login(): void {

    console.log(this.user);
    this.loginService.login(this.user);
    /*this.router.navigateByUrl("/rents");
    window.location.reload();*/

        this.loginService.currentUser
          .subscribe(data=>{
            this.state=data.state;
            if(this.state==1)
              this.subject.next(true);
            else this.subject.next(false);

            this.subject.asObservable().subscribe(
              data=>this.signal=data
            )
          });

    setTimeout(() => {
      console.log("subscribe之后subject："+this.subject);
      console.log("subscribe之后signal："+this.signal);
    }, 50000);


  }

  public doLogout(): void {
    this.loginService.logout();
    this.router.navigateByUrl("rents");
  }
    /*  .subscribe((data: User )=> {
        this.currentUser = {
          userid: data['userid'],
          username: data['username'],
          userpass: data['userpass'],
          state: data['state']
        };
        console.log('a:'+data['userid']);
        console.log('b:'+this.currentUser.username);
        console.log('c:'+this.currentUser.userid);
      });*/


  ngOnInit() {
    /*this.loginService.currentUser
      .subscribe(
        data => {
          this.currentUser = data;
          console.log("Angular2---------LoginComponent.ngOnInit data : " + JSON.stringify(data));
          console.log("no json stringify:"+data);
          console.log("currentuser's state in login service: "+this.currentUser.state);
        },
        error => console.error(error)
      )*/

  }

}
