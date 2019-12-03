import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  animations: [
    flyIn
  ]
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
