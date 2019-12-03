import { Component, OnInit } from '@angular/core';
import {flyIn} from "../../animations/fly-in";
import {LoginService} from "../../nguser/user-login/login.service";

@Component({
  selector: 'app-rent-show',
  templateUrl: './rent-show.component.html',
  styleUrls: ['./rent-show.component.css'],
  animations: [
    flyIn
  ]
})
export class RentShowComponent implements OnInit {

  constructor(  public userLoginService: LoginService) { }

  ngOnInit() {
  }

}
