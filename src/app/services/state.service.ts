import { Injectable } from '@angular/core';
import { AppState } from '../state.model';
import { UserModel } from '../user.model';

@Injectable()
export class StateService {
  getShowLogin() { return AppState.showLogin; }
  setShowLogin(flag: boolean = true) { AppState.showLogin = flag; }
  getShowRegister() { return AppState.showRegister; }
  setShowRegister(flag: boolean = true) { AppState.showRegister = flag; }
  getLoggedUser() { return AppState.loggedUser; }
  setLoggedUser(user: UserModel) {
    AppState.loggedUser = user;
    if (AppState.loggedUser == null) {
      AppState.isUserLogged = false;
    } else {
      AppState.isUserLogged = true;
    }
  }
  getIsUserLogged() { return AppState.isUserLogged; }
}
