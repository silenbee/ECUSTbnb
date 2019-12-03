import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import {Person, Req} from "./person.model";
import {HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable()
export class PersonService {
  public getPersonURL='person/get';
  constructor(public http:HttpClient) { }

  public getPerson(req:Req): Observable<Person> {
    let url = this.getPersonURL;
    return this.http.post<Person>(url,req,httpOptions);
  }

  public submit(person:Person):Observable<Person>{
    let url='person/post';
    return this.http.post<Person>(url,person,httpOptions);
  }

/*  public postPerson():Observable<Person> {
    let url = this.PersonURL;
    return this.http.post<Person>(url);
  }*/

}
