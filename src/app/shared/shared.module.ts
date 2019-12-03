import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import {UserLoginComponent} from "../nguser/user-login/user-login.component";
import {SharedMaterialModule} from "../shared-material/shared-material.module";
import {CommentComponent} from "../comment/comment.component";



@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule
  ],
  declarations: [
    UserLoginComponent,
    CommentComponent
  ],
  exports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    UserLoginComponent,
    CommentComponent
  ]
})

export class SharedModule {

}
