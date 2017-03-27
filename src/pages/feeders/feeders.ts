import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddFeederWifiPage } from '../add-feeder-wifi/add-feeder-wifi'
import { DBService } from "../../services/db.service";

@Component({
  selector: 'page-feeders',
  templateUrl: 'feeders.html'
})
export class FeedersPage {


  constructor(public navCtrl: NavController,
    private dbService: DBService) {
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedersPage');
    this.dbService.dbConnect();
  };

  addFeeder() {
    this.navCtrl.push(AddFeederWifiPage);
  };

}
