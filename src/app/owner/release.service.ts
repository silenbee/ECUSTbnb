import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {House} from "./model/release.model";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class ReleaseService {

  public api_url='release/user';

  constructor(public http: HttpClient) { }

  public Upload(house: House){
    //house.ownerid=JSON.parse(localStorage.getItem('currentUser.userId'));
    return this.http.post(this.api_url,house,httpOptions)
      .subscribe(data=>{
        if(data['code'])
          alert("插入失败，系统错误");
        else
          alert("成功发布，等待审核！");
      });
  }

}
