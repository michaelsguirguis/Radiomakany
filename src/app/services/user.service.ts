import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../user.model';
import { StateService } from './state.service';

@Injectable()
export class UserService {
  constructor(
    private httpCLient: HttpClient,
    private stateService: StateService
  ) {}

  public register(user: UserModel) {}
  public login(userName: string, password: string) {}
}
