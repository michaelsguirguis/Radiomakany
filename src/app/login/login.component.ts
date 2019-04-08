import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorStateService } from '../error-state-matcher';
import { AppUsersService } from 'src/services/app-users.service';
import { AppStateService } from 'src/services/app-state.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MessageComponent, Message } from '../message/message.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../forms.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  matcher = new ErrorStateService();

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private userService: AppUsersService,
    private stateService: AppStateService
    ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      emailControl: ['', [Validators.required, Validators.email]],
      passwordControl: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async doLoginAsync() {
    await this.userService.signInAsync(
      this.loginForm.get('emailControl').value,
      this.loginForm.get('passwordControl').value).then(
      () => {
        if (!this.stateService.isEmailVerified) {
          this.dialog.open(MessageComponent, {
            width: '40%',
            data: {
              title: '',
              closeButtonText: 'close',
              matButtonColor: 'warn',
              message: '<p>Hi <b>' + this.userService.getLoggedUser().fullName + '</b><br/>' +
              'Please confirm your email to complete your registeration.</p>',
              useButtons: true,
              allowSendVerificationEmail: true
            } as Message
          });
        }
        this.hide();
      }, () => {
        this.dialog.open(MessageComponent, {
          width: '40%',
          data: {
            title: '',
            closeButtonText: 'close',
            matButtonColor: 'warn',
            message: '<p>Login for <b>' + this.loginForm.get('emailControl').value + '</b> failed. Invalid credentials.</p>'
          } as Message
        });
      }
    );
  }

  facebookLogin() {
    this.userService.loginFacebook();
  }

  resendVerificationEmail() {

  }

  hide() {
    this.stateService.toggleInfobar();
  }
}
