import {Auth, User, UserDetails, IDetailedError} from '@ionic/cloud-angular';
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
  constructor(public auth: Auth,
              public user: User) {
  }

  signup(email: string, password: string) {
    let details: UserDetails = {'email': email, 'password': password};
    return this.auth.signup(details).
    then(() => { console.log('user is authenticated'); },
      (err: IDetailedError<string[]>) => {
      for (let e of err.details) {
        if (e === 'conflict_email') {
          alert('Email already exists.');
        } else {
          console.log(e);
        }

      }
    });
  };
}
