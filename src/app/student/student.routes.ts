import{ Routes,RouterModule} from '@angular/router';
import{ StudentComponent } from'./student.component';

export const  studentRoutes = [
   {
    path: '',
    component:StudentComponent,
    children:[{
    path:'',
    loadChildren:'../rent/rent.module#RentModule'
       }]
   }
 ];

