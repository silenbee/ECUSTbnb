import{ Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component'
import {OwnerComponent} from "./owner/owner.component";
import {MyinfoComponent} from "./myinfo/myinfo.component";
import {DataComponent} from "./data/data.component";
import {UserLoginComponent} from "./nguser/user-login/user-login.component";
import {UserRegisterComponent} from "./nguser/user-register/user-register.component";


export const appRoutes=[
  {
    path:'',
    redirectTo:'rents',
    pathMatch:'full'
  },
  {
    path:'rents',
    loadChildren:'./student/student.module#StudentModule'
  },
  {
    path:'rent',
    loadChildren:'./rent/rent.module#RentModule'
  },
  {
    path:'register',
    component:UserRegisterComponent
  },
  {
    path:'owner',
    component:OwnerComponent
  },
  {
    path:'login',
    component:UserLoginComponent
  },
  {
    path:'myinfo',
    loadChildren:'./myinfo/myinfo.module#MyinfoModule'
  },
  {
    path:'data',
    component:DataComponent
  },
  {
    path: 'manage',
    loadChildren:'./manage/manage.module#ManageModule'
  },
  {
    path:'**',//fallback router must in the last
    loadChildren:'./student/student.module#StudentModule'
  }
];

