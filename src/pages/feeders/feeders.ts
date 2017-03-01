import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AddFeederWifiPage} from '../add-feeder-wifi/add-feeder-wifi'

@Component({
  selector: 'page-feeders',
  templateUrl: 'feeders.html'
})
export class FeedersPage {


  constructor(public navCtrl: NavController) {
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedersPage');
  };

  addFeeder(){
    this.navCtrl.push(AddFeederWifiPage);
  };

}
