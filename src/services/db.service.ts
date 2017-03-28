import { Injectable } from "@angular/core";
import { Feeder } from '../models/feeder.model';
import {Http} from '@angular/http';


@Injectable()
export class DBService {

    constructor(private http: Http) { }

    setFeeder(feeder: any) { // this adds a feeder in the db first time and sets allocation

    }

    getFeeders(token: string) {
       // return this.http.get();
    }

}