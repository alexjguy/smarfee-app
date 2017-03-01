import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FeederPage} from '../pages/feeder/feeder';
import { FeedersPage} from '../pages/feeders/feeders';
import { SigninPage} from '../pages/signin/signin';
import { AddFeederWifiPage} from '../pages/add-feeder-wifi/add-feeder-wifi';
import { SignupPage} from '../pages/signup/signup';
import {FeederInternalService} from "../services/feeder.internal.service";
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import {AuthService} from "../services/auth.service";

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '2eaed8c5'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FeedersPage,
    FeederPage,
    SigninPage,
    SignupPage,
    AddFeederWifiPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FeedersPage,
    FeederPage,
    SigninPage,
    SignupPage,
    AddFeederWifiPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, FeederInternalService, AuthService]
})
export class AppModule {}
