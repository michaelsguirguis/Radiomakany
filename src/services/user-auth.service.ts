import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AppUser } from '../app/app-user';
import { AppStateService } from './app-state.service';
@Injectable()
export class UserAuthService {
  private loggedUser: firebase.User;

  constructor(
    private afAuth: AngularFireAuth,
    private stateService: AppStateService
    ) {
      this.afAuth.authState.subscribe((authUser) => {
        if (authUser) {
          this.loggedUser = authUser;
          this.stateService.logUserIn(authUser);
        } else {
          this.stateService.logUserOut();
        }
      });
  }

  async registerAsync(user: AppUser, password: string) {
    return await new Promise<any>((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        password
        ).then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  }

  async loginAsync(email: string, password: string): Promise<any> {
    return await new Promise<any> ((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(
        email,
        password
        ).then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  }

  logout() {
    this.afAuth.auth.signOut();
    this.loggedUser = null;
  }

  loginFacebook() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth.signInWithPopup(provider).then(res => {
        resolve(res);
      }, err => {
        reject(err);
      });
    });
  }

  getCurrentUser() {
    return this.loggedUser;
  }
}
