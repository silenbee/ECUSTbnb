import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params, ParamMap} from "@angular/router";
import {RentDetailService} from "./rent-detail.service";
import {RentDetail} from "./rentDetail-model";
import {switchMap} from "rxjs/internal/operators";
import {ID} from "../model/rent-model";

@Component({
  selector: 'app-rent-detail',
  templateUrl: './rent-detail.component.html',
  styleUrls: ['./rent-detail.component.css']
})
export class RentDetailComponent implements OnInit {
  public rentdetail:RentDetail = new RentDetail();
  public id:ID=new ID();
  constructor(public rentDetailService: RentDetailService,
              public activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params=> {
        this.id.id=params["rentId"]
        this.getRent(this.id)
      })
   /*this.rentdetail=this.activeRoute.paramMap.pipe(
     switchMap((params:ParamMap)=>
     this.getRent(params.get('houseid')))
   )*/
  }

  public getRent(id:ID){
    this.rentDetailService.getRentDetail(id)
      .subscribe(data=>{
          this.rentdetail=data;
        console.log(data);
      },
        error=>console.log(error)
      )
  }

}
