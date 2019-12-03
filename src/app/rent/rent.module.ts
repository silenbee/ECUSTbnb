import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RentComponent} from './rent.component'
import { rentRoutes } from './rent.routes';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { ElModule } from 'element-angular';
import { RentListComponent } from './rent-list/rent-list.component';
import {CommonModule} from "@angular/common";
import {RentlistService} from "./service/rentlist.service";
import { RentShowComponent } from './rent-show/rent-show.component';
import { RentDetailComponent } from './rent-detail/rent-detail.component';
import { RentDetailService } from "./rent-detail/rent-detail.service";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    RentComponent,
    RentListComponent,
    RentShowComponent,
    RentDetailComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    SharedMaterialModule,
    RouterModule.forChild(rentRoutes),
    ElModule.forRoot()
  ],
  providers:[RentlistService,RentDetailService]

})
export class RentModule { }
