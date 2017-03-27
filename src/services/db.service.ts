import { Database } from '@ionic/cloud-angular';
import { Injectable } from "@angular/core";
import { Feeder } from '../models/feeder.model';
import { User } from '@ionic/cloud-angular';



@Injectable()
export class DBService {
    private feedersCol = this.db.collection('feeders'); // collection that holds all the settings for each feeder
    private ownedCol = this.db.collection('owned'); // collection for feeders that owned by a user


    constructor(public db: Database,
        public user: User) { }

    dbConnect() { //initial connection to a database
        this.db.connect();
        this.db.status().subscribe((status) => {
            if (status.type === 'reconnecting') {
                // Display connecting spinner
                console.log(status.type); // reconnecting
            }
        });
        // Equivalent to
        this.db.status().subscribe((status) => {
            // Display connecting spinner
            console.log(status.type); // reconnecting

        });
    }

    addFeeder(feeder: any) { // this adds a feeder in the db first time and sets allocation
        this.feedersCol.find({ name: feeder.name }).fetch()
        .subscribe(result => console.log(result), err => console.log(err))
       // if(
        this.feedersCol.insert(feeder);
        this.ownedCol.insert({ user: this.user, feeders: [feeder.name] })
    }

    getFeeders() {
        this.feedersCol.find({ user: this.user }).fetch()
            .subscribe(
            result => console.log('Result:', result),
            err => console.error(err),
            () => console.log('Results fetched')
            );
    }

}