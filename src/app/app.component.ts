import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Auth, User } from '@ionic/cloud-angular';


import { HomePage } from '../pages/home/home';
import { FeedersPage } from "../pages/feeders/feeders";
import { SigninPage } from "../pages/signin/signin";
import { SignupPage } from "../pages/signup/signup";
import { AuthService } from "../services/auth.service";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = SigninPage;
  signinPage = SigninPage;
  signupPage = SignupPage;
  isAuthenticated = false;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform,
    private menuCtrl: MenuController,
    private auth: Auth,
    private authService: AuthService) {
    if (this.auth.isAuthenticated()) {
      this.isAuthenticated = true;
      this.rootPage = FeedersPage;
    } else {
      this.isAuthenticated = false;
      this.rootPage = SigninPage;
    }
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
  onLogout() {
    this.authService.signout();
    this.menuCtrl.close();
    this.isAuthenticated = false;
    this.nav.setRoot(SigninPage);
  };
}
