import { Injectable } from "@angular/core";
import firebase from 'firebase';

@Injectable()
export class AuthService {
  constructor() {
  }

  signup(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  signin(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);

  };

  signout() {
    firebase.auth().signOut();
  }

  getActiveUser() {
    return firebase.auth().currentUser;
  }

  getActiveUserUid(){
    return this.getActiveUser().uid;
  }

}
