import { RouterModule } from '@angular/router';
import {PersonComponent} from "./person/person.component";
import {MyinfoComponent} from "./myinfo.component";
import {MyRentComponent} from "./myrent/myrent.component";


export const myinfoRoutes=[
  {
    path: '',
    component: MyinfoComponent,
    children: [
      {path: '', redirectTo: 'person', pathMatch: 'full'},
      {path: 'person', component: PersonComponent},
      {path: 'myRent',component: MyRentComponent},
      {path: '**', redirectTo: 'person'}
    ]
  }
];
