import{CommonModule} from '@angular/common';
import{NgModule} from '@angular/core';
import{FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import{StudentComponent} from './student.component';
import{studentRoutes} from './student.routes'
import {SitestatComponent} from "../sitestat/sitestat.component";
import {SocialComponent} from "./social/social.component";
import {SharedMaterialModule} from "../shared-material/shared-material.module";
import { HeadComponent } from './head/head.component';


@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    RouterModule,
    SharedMaterialModule,
    RouterModule.forChild(studentRoutes)
  ],
  declarations:[
    StudentComponent,
    SitestatComponent,
    SocialComponent,
    HeadComponent,
  ],
  providers: []
})

export class StudentModule{}
