import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { Rent } from '../model/rent-model';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class RentlistService {
  public rentListURL='rentlist/list';
  constructor(public http:HttpClient) { }

  public getRentList(): Observable<Rent[]> {
    let url = this.rentListURL;
    return this.http.get<Rent[]>(url);

  }




}
