import { Component, OnInit } from '@angular/core';
import { FeederInternalService } from "../../services/feeder.internal.service";
import { DBService } from "../../services/db.service";
import 'rxjs/Rx';
import { LoadingController, AlertController, NavController } from 'ionic-angular';
import { NgForm } from "@angular/forms";



@Component({
  selector: 'page-add-feeder-wifi',
  templateUrl: 'add-feeder-wifi.html'
})
export class AddFeederWifiPage implements OnInit {
  private wifiNameList: any = [];
  private wifiList = [];
  private specificWifiSel: boolean = false;
  private details: any = {};
  private feeder: any;

  constructor(private feederInternalService: FeederInternalService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private dbService: DBService) {
  }

  populateWifi() {
    const loading = this.loadingCtrl.create({
      content: 'Connecting to feeder..'
    });
    loading.present();
    this.feederInternalService.wifiApList()
      .subscribe(
      (wifiNameList: any) => {
        loading.dismiss();
        console.log(wifiNameList);
        this.wifiNameList = wifiNameList.names;
      },
      error => {
        loading.dismiss();
        console.log(error);

        let alert = this.alertCtrl.create({
          title: 'Cannot connect to feeder',
          message: 'Do you want to retry?',
          buttons: [
            {
              text: 'Retry',
              role: 'Cancel',
              handler: () => {
                console.log('Retry clicked');
                this.populateWifi();
              }
            },
            {
              text: 'No',
              handler: () => {
                console.log('No clicked');
                this.navCtrl.popToRoot();
              }
            }
          ]
        });
        alert.present();


      }
      )
  }

  ngOnInit() {
    // this.wifiObj = this.feederInternalService.wifiApList();

    //this.wifiList = this.wifiObj.names;
    this.populateWifi();

  }

  // specificWifiChange(specificWifi) {
  //   if (specificWifi === 'Yes') {
  //     this.specificWifiSel = true;
  //   } else {
  //     this.specificWifiSel = false;

  //   }
  // };


  onSubmit(form: NgForm) {
    //console.log(this.details);

    this.configureWifi();
  };

  getSettings() {
    this.feederInternalService.getSettings()
      .subscribe((response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
      )
  };

  configureWifi() {
    const loading = this.loadingCtrl.create({
      content: 'Configuring feeder..'
    });
    loading.present();
    this.feederInternalService.connectToWifi(this.details)
      .subscribe((response: any) => {
        console.log(response);
        loading.dismiss();
        this.feeder = this.getSettings();
        console.log(JSON.stringify(this.feeder));
       // this.dbService.dbConnect();
       // this.dbService.addFeeder(this.feeder);
        this.navCtrl.popToRoot();

      },
      (error) => {
        loading.dismiss();
        console.log(error);
        let alert = this.alertCtrl.create({
          title: 'Cannot connect feeder to wifi',
          message: 'Please check wifi name and password',
          buttons: [
            {
              text: 'Check',
              role: 'Cancel',
              handler: () => {
                console.log('Retry clicked');
              }
            },
            {
              text: 'Cancel',
              handler: () => {
                console.log('No clicked');
                this.navCtrl.popToRoot();
              }
            }
          ]
        });
        alert.present();
      }
      );
  }
};