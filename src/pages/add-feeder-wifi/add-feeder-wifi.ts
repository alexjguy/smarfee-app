import {Component, OnInit} from '@angular/core';
import {FeederInternalService} from "../../services/feeder.internal.service";
import 'rxjs/Rx';


@Component({
  selector: 'page-add-feeder-wifi',
  templateUrl: 'add-feeder-wifi.html'
})
export class AddFeederWifiPage implements OnInit {
  private wifiNameList: any;
  private wifiList = [];

  constructor(private feederInternalService: FeederInternalService) {


  }


  ngOnInit() {
    // this.wifiObj = this.feederInternalService.wifiApList();

    //this.wifiList = this.wifiObj.names;

    this.feederInternalService.wifiApList()
      .subscribe(
        (wifiNameList: any) => {
          console.log(wifiNameList);
          this.wifiNameList = wifiNameList.names;
        },
        error =>
          console.log(error)
      )

  }
}

