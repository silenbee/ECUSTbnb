import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';

@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrls: ['./myinfo.component.css'],
  animations: [
    flyIn
  ]
})
export class MyinfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
