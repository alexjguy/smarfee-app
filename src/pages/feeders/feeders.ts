import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddFeederWifiPage } from '../add-feeder-wifi/add-feeder-wifi'
import { DBService } from "../../services/db.service";
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'page-feeders',
  templateUrl: 'feeders.html'
})
export class FeedersPage {
  public feeders: any[] = [];
  public test: any;


  constructor(public navCtrl: NavController,
    private dbService: DBService,
    private authService: AuthService) {
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedersPage');
    this.authService.getActiveUser().getToken()
      .then(
      (token: string) => {
        console.log(token);
      }
      );
      this.dbService.getFeeders();

  };

  addFeeder() {
    this.navCtrl.push(AddFeederWifiPage);
  };

}
