import { Component, OnInit } from '@angular/core';
import {flyIn} from "../../animations/fly-in";
import {Person, Req} from "./person.model";
import {PersonService} from "./person.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../nguser/user-model";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  animations: [
    flyIn
  ]
})
export class PersonComponent implements OnInit {
  public person:Person=new Person();
  public id:string;
  public req=new Req();
  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public personservice:PersonService) { }

  public loadperson(){
    if(localStorage.getItem('currentUser')){
       this.req.id=JSON.parse(localStorage.getItem('currentUser')).userid;
      this.personservice.getPerson(this.req)
        .subscribe(data=>{
            this.person=data;
            console.log(data)
          }
        )
    }
  }

  public modify(){
    this.person.userid=JSON.parse(localStorage.getItem('currentUser')).userid;
    this.personservice.submit(this.person)
      .subscribe(data=>{
        if(data['code']==0)
          alert('更新信息成功');
        else alert('更新失败，系统忙！');
      })
  }

  ngOnInit() {
     this.loadperson();
  }
}
