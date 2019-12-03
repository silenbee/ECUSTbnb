import { Component, OnInit } from '@angular/core';
import {flyIn} from "../../animations/fly-in";

@Component({
  selector: 'app-myRent',
  templateUrl: './myrent.component.html',
  styleUrls: ['./myrent.component.css'],
  animations: [
    flyIn
  ]

})
export class MyRentComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
