import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule } from "@angular/router";
import { ManageMainComponent } from './manage-main/manage-main.component';
import { PostTableComponent } from './post-table/post-table.component';
import {SharedMaterialModule} from "../shared-material/shared-material.module";
import {AuthGuard} from "./auth-guard.service";
import {manageRoutes} from "./manage.routes";

@NgModule({
  declarations: [
  ManageMainComponent,
  PostTableComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    RouterModule.forChild(manageRoutes),
  ],
  exports:[
    ManageMainComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class ManageModule { }
