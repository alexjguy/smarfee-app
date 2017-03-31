import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FeederPage } from '../pages/feeder/feeder';
import { FeedersPage } from '../pages/feeders/feeders';
import { SigninPage } from '../pages/signin/signin';
import { AddFeederWifiPage } from '../pages/add-feeder-wifi/add-feeder-wifi';
import { SignupPage } from '../pages/signup/signup';
import { FeederInternalService } from "../services/feeder.internal.service";
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { AuthService } from "../services/auth.service";
import { DBService } from "../services/db.service";
//import { AngularFireModule } from 'angularfire2';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '2eaed8c5'
  },
  'database': {
    'authType': 'authenticated'
  }
};

// export const firebaseConfig = {
//     apiKey: "AIzaSyAgxJBjygVzP9mwSzz0PvyYnAUDEXUdQhs",
//     authDomain: "ai-feeder-app.firebaseapp.com",
//     databaseURL: "https://ai-feeder-app.firebaseio.com",
//     projectId: "ai-feeder-app",
//     storageBucket: "ai-feeder-app.appspot.com",
//     messagingSenderId: "851104384996"
// };


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
    // ,AngularFireModule.initializeApp(firebaseConfig)


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
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, FeederInternalService, AuthService, DBService]
})
export class AppModule { }
