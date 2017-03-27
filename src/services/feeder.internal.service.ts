import { Http, Response } from '@angular/http';
import { Injectable } from "@angular/core";
import 'rxjs/Rx';

@Injectable()
export class FeederInternalService {
  private wifiNameList: any;
  private feeder: any;

  constructor(private http: Http) { }

  wifiApList() {
    return this.http.get('http://192.168.4.1/api/feeder/getWifiApList')
      .timeout(10000)
      .catch(function (e) {
        console.log("got an error in initial processing", e);
        throw e; // rethrow to not marked as handled, 
        // in $q it's better to `return $q.reject(e)` here
      })
      .map((response: Response) => {
        return response.json();
      })
      .do((data) => {
        this.wifiNameList = data;
      }
      )
  }

  connectToWifi(details: any) {
    console.log(details);
    return this.http.put('http://192.168.100.1:8080/api/feeder/connectToWifi', details)
      .timeout(20000)
      .catch(function (e) {
        console.log("got an error in initial processing", e);
        throw e; // rethrow to not marked as handled, 
        // in $q it's better to `return $q.reject(e)` here
      })
  }

  getSettings() {
    return this.http.get('http://192.168.100.1:8080/api/feeder/getSettings')
      .timeout(10000)
      .catch(function (e) {
        console.log("got an error in initial processing", e);
        throw e; // rethrow to not marked as handled, 
        // in $q it's better to `return $q.reject(e)` here
      })
      .map((response: Response) => {
        return response.json();
      })
      .do((data) => {
        this.feeder = data;
      }
      )
  }

  

}


