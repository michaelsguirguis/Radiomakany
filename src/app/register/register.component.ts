import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppUser } from '../app-user';
import { AppUsersService } from 'src/services/app-users.service';
import { MatDialog } from '@angular/material';
import { MessageComponent, Message } from '../message/message.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../forms.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  @Output() toggleMembershipEvent = new EventEmitter<string>();

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private userService: AppUsersService
    ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      emailControl: ['', [Validators.required, Validators.email]],
      passwordControl: ['', [Validators.required, Validators.minLength(6)]],
      fullNameControl: ['', [Validators.required]],
      phoneNumberControl: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      birthdayControl: ['', [Validators.required]]
    });
  }

  async doRegisterAsync() {
    const user = {
      id: '',
      fullName: this.registerForm.get('fullNameControl').value,
      email: this.registerForm.get('emailControl').value,
      phoneNumber: this.registerForm.get('phoneNumberControl').value,
      birthday: this.registerForm.get('birthdayControl').value
    } as AppUser;

    await this.userService.signUpAsync(
      user,
      this.registerForm.get('passwordControl').value
      );

    this.dialog.open(MessageComponent, {
      width: '40%',
      data: {
        title: '',
        matButtonColor: 'success',
        closeButtonText: 'close',
        message: '<p>Hello <b>' + user.fullName
         +
         '</b>, a confirmation email has been sent to you.<br/>Please click the link provided to complete your registration.'
      } as Message
    });

    this.hide();
  }

  facebookRegister() {
    this.userService.loginFacebook();
  }

  hide() {
    this.toggleMembershipEvent.emit('');
  }
}
