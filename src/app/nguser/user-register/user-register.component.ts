import { Component, OnInit } from '@angular/core';
import {User} from "../user-model";
import {RegisterService} from "./register.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  public user:User =new User();
  public repassword:string;
  constructor(public registerService:RegisterService,
              public router: Router) { }

  public Register():void{
    console.log('this.user');
    this.registerService.register(this.user);
    this.router.navigateByUrl("/rents");
    window.location.reload();

  }

  ngOnInit() {
  }

}
