import { Injectable } from '@angular/core';
import { AppUser } from '../app/app-user';
import { AppStateService } from './app-state.service';
import { FirestoreService } from './firestore.service';
import { ErrorLog } from 'src/app/error-log';
import { UserAuthService } from './user-auth.service';

@Injectable()
export class AppUsersService {
  users: AppUser[];

  constructor(
    private authService: UserAuthService,
    private storeService: FirestoreService,
    private stateService: AppStateService
    ) {
    this.storeService.subscribeToCollection('users').subscribe(data => {
      this.users = data.map(e => {
        return {
          id: e.payload.doc.id,
          fullName: e.payload.doc.get('fullName'),
          email: e.payload.doc.get('email'),
          phoneNumber: e.payload.doc.get('phoneNumber'),
          birthday: e.payload.doc.get('birthday')
        } as AppUser;
      });
    });
  }

  async signUpAsync(user: AppUser, password: string) {
    return await new Promise<any>((resolve, reject) => {
      this.authService.registerAsync(user, password).then(
        (data: firebase.auth.UserCredential) => {
          data.user.sendEmailVerification();
          user.id = data.user.uid;
          this.addUserData(user);
          resolve(data.user);
        }, (err) => {
          reject(null);
        }
      );
    });
  }

  async signInAsync(email: string, password: string) {
    this.signOut();

    return await new Promise<any>((resolve, reject) => {
      this.authService.loginAsync(email, password).then(
        (data: firebase.auth.UserCredential) => {
          this.stateService.logUserIn(data.user);
          resolve(data.user);
        }, (err) => {
          reject(null);
        }
      );
    });
  }

  signOut() {
    this.authService.logout();
  }

  registerFacebook() {
    /*this.authService.facebookLogin().then((data: firebase.auth.UserCredential) => {
      const user = this.users.find(p => p.email === data.user.email);
      this.stateService.logUser(user);
    }).catch(err => {
      this.stateService.logError(new ErrorLog(err));
    });*/
  }

  loginFacebook() {
    /*this.authService.facebookLogin().then((data: firebase.User) => {
      const user = this.users.find(p => p.email === user.email);
      this.stateService.logUserIn(user, data);
    }).catch(err => {
      this.stateService.logError(new ErrorLog(err));
    });*/
  }

  getUsers() {
    return this.users;
  }

  getLoggedUser() {
    return this.users.find(u => u.email === this.stateService.loggedAuthUser.email);
  }

  addUserData(user: AppUser) {
    this.storeService.addDocument('users', user).then(doc => {
    }).catch(err => {
      this.stateService.logError(new ErrorLog(err));
    });
  }

  updateUser(user: AppUser) {
    this.storeService.updateDocument('users', user).then(doc => {
    }).catch(err => {
      this.stateService.logError(new ErrorLog(err));
    });
  }

  deleteUser(user: AppUser) {
    this.storeService.deleteDocument('users', user).then(doc => {
    }).catch(err => {
      this.stateService.logError(new ErrorLog(err));
    });
  }
}
