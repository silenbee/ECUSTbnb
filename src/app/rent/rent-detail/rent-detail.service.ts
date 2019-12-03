import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';

import {Rent, ID} from '../model/rent-model';
import {HttpClient} from "@angular/common/http";
import {RentDetail} from "./rentDetail-model";
import {HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class RentDetailService {
  public rentDetailURL = "rentDetail/detail";

  constructor(public http:HttpClient) {
  }

  public getRentDetail(id:ID):Observable<RentDetail>{
      return this.http.post<RentDetail>(this.rentDetailURL,id,httpOptions)
  }

}
