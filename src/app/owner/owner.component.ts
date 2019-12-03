import { Component, OnInit } from '@angular/core';
import {flyIn} from "../animations/fly-in";
import {House} from "./model/release.model";
import {Router, ActivatedRoute} from "@angular/router";
import {ReleaseService} from "./release.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {User} from "../nguser/user-model";
import {UUID} from "angular2-uuid";

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css'],
  animations: [
    flyIn
  ]
})
export class OwnerComponent implements OnInit {
  public release:House = new House();
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  tmpuser:User=new User();

  constructor(public router: Router,
              public activeRoute: ActivatedRoute,
              public releaseservice: ReleaseService,
              private _formBuilder: FormBuilder) { }
  public upload(){
    this.release.houseid=UUID.UUID();
    console.log(this.release);
    this.tmpuser=JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.tmpuser);
    this.release.ownerid=this.tmpuser.userid;
      this.releaseservice.Upload(this.release);
  }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

}
