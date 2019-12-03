import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';
import { OwnerComponent } from './owner/owner.component';
import { appRoutes } from './app.routes';
import { DataComponent } from './data/data.component';
import { ElModule } from 'element-angular';
import { HashLocationStrategy , LocationStrategy} from '@angular/common';
/*import {LoginService} from "./login/login.service";*/
import {LoginService} from "./nguser/user-login/login.service";
import {HttpClientModule} from "@angular/common/http";
import { UserRegisterComponent } from './nguser/user-register/user-register.component';
import {TranslateService, TranslateStore, TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import{TranslateHttpLoader} from '@ngx-translate/http-loader';
import {RegisterService} from "./nguser/user-register/register.service";
import { FooterComponent } from './footer/footer.component';
import {ReleaseService} from "./owner/release.service";
import { ReactiveFormsModule } from '@angular/forms';
import {ChartModule} from 'primeng/chart';
import {SharedModule} from "./shared/shared.module";


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    OwnerComponent,
    DataComponent,
    UserRegisterComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(appRoutes),
    ElModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
    LoginService,
    RegisterService,
    TranslateService,
    ReleaseService,
    TranslateStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
