import { Injectable } from "@angular/core";
import { Feeder } from '../models/feeder.model';
import { Http } from '@angular/http';
import firebase from 'firebase';


@Injectable()
export class DBService {
    public db: any;
    public feeders: any;
    constructor(private http: Http) { }

    setFeeder(feeder: any) { // this adds a feeder in the db first time and sets allocation

    }

    getFeeders(token: string) {
        // return this.http.get();
        this.db = firebase.database().ref('/');
        this.db.child('feeders').on('value', data => {
            this.feeders = data.val();
            console.log(this.feeders);
        })
    }

}