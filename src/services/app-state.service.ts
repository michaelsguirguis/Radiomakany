import { Injectable } from '@angular/core';
import { AppUser } from '../app/app-user';
import { FirestoreService } from './firestore.service';
import { ErrorLog } from 'src/app/error-log';
import * as firebase from 'firebase/app';

@Injectable()
export class AppStateService {
  public isInfobarVisible = true;
  public isEmailVerified = false;
  public isUserLogged = false;
  public loggedAuthUser: firebase.User = null;

  constructor(
    private storeService: FirestoreService,
    ) {}

  logError(err: ErrorLog) {
    this.storeService.addDocument('website-log', err);
  }

  toggleInfobar() {
    this.isInfobarVisible = !this.isInfobarVisible;
  }

  logUserIn(authUser: firebase.User) {
      this.isUserLogged = false;
      this.loggedAuthUser = null;

      if (authUser) {
        this.loggedAuthUser = authUser;
        this.isEmailVerified = authUser.emailVerified;
        this.isUserLogged = true;
      }
  }

  logUserOut() {
    this.loggedAuthUser = null;
    this.isUserLogged = false;
  }

  sendEmailverification() {
    this.loggedAuthUser.sendEmailVerification();
  }
}
