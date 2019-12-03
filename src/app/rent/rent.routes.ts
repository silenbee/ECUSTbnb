import { RouterModule } from '@angular/router';
import {RentComponent} from './rent.component';
import {RentListComponent} from "./rent-list/rent-list.component";
import {RentShowComponent} from "./rent-show/rent-show.component";

export const rentRoutes=[
  {
    path:'',
    redirectTo:'page/1',
    pathMatch:'full'
  },
  {
    path:'page/:page',
    component:RentListComponent
  },
  {
    path: 'rentDetail/:rentId',
    component: RentShowComponent
  }
];
