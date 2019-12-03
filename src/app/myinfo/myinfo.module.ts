import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PersonComponent} from './person/person.component'
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { myinfoRoutes } from "./myinfo.routes";
import { MyRentComponent } from "./myrent/myrent.component";
import {MyinfoComponent} from "./myinfo.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {PersonService} from "./person/person.service";


@NgModule({
  declarations: [
    MyinfoComponent,
    PersonComponent,
    MyRentComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    RouterModule.forChild(myinfoRoutes),
  ],
  providers: [PersonService],
})
export class MyinfoModule { }
