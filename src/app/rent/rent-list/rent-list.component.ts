import { Component, OnInit } from '@angular/core';
import {Rent} from "../model/rent-model";
import {PageEvent} from '@angular/material';
import {Router, ActivatedRoute} from "@angular/router";
import {RentlistService} from "../service/rentlist.service";

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.css']
})
export class RentListComponent implements OnInit {
  public RentList:Array<Rent>;
  public itemsPerPage: number = 6;
  public totalRecords: number = 11;
  public currentPage: number = 1;
  public offset: number = 0;
  public end: number = 0;

  constructor(public router: Router,
               public activeRoute: ActivatedRoute,
               public rentService: RentlistService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.currentPage = params.page;
      this.loaddata();
    });
  }

  public loaddata(){
    this.offset = (this.currentPage - 1) * this.itemsPerPage;
    this.end = (this.currentPage) * this.itemsPerPage;
    this.rentService.getRentList()
      .subscribe(data=>this.RentList=data.slice(this.offset, this.end > this.totalRecords ? this.totalRecords : this.end));
/*    console.log(this.RentList[0].housedesc);*/
  }

  public pageChanged(event: any): void {
    let temp = parseInt(event.pageIndex) + 1;
    this.router.navigateByUrl("rents/page/" + temp);
  }


}
