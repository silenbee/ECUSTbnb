import {Component} from '@angular/core';
import {User} from "./nguser/user-model";
import {LoginService} from "./nguser/user-login/login.service";
import {Router} from "@angular/router";
import { TranslateService, TranslateStore } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngpro';
  public currentUser: User;
  private globalClickCallbackFn: Function;

  constructor(
    public router: Router,
    public userLoginService: LoginService,
    public translate: TranslateService,
  ) {}

  ngOnInit(){
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));

    this.translate.addLangs(["zh", "en"]);
    this.translate.setDefaultLang('zh');
    const browserLang = this.translate.getBrowserLang();
    console.log("获取到浏览器的语言>" + browserLang);
    this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
  }

  public doLogout(): void {
    this.userLoginService.logout();
    this.router.navigateByUrl("/rents");
    window.location.reload();
  }

}
