import { Http, Response} from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/Rx';

@Injectable()
export class FeederInternalService {
  private wifiNameList: any;

  constructor(private http: Http){}

  wifiApList(){
    return this.http.get('http://192.168.100.1:3000/api/feeder/wifiApList')
      .map((response: Response) => {
      return response.json();
      })
      .do((data) => {
      this.wifiNameList = data;
        }
      )
  }

}


