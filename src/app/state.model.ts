import { UserModel } from './user.model';

export class State {
  constructor(
    public showLogin: boolean = false,
    public showRegister: boolean = false,
    public isUserLogged: boolean = false,
    public loggedUser: UserModel = null
    ) {}
}

export const AppState = new State();
