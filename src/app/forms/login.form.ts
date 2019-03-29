import {
  Component,
  OnInit,
  AfterViewInit,
  HostListener,
  ViewChild,
  ElementRef
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StateService } from '../services/state.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.form.html',
  styleUrls: [
    '../app.component.css',
    '../components/infobar.component.css',
    './form.css'
  ]
})
export class LoginFormComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  public scaleIconX = 0.9;
  public scaleIconY = 0.9;
  public facebookScaleX = 0.8;
  public facebookScaleY = 0.8;
  public horizontalScale = 1;
  public verticalScale = 1;
  public canResize = false;
  @ViewChild('el_container') containerElement: ElementRef;
  @ViewChild('el_form') formElement: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    if (!this.canResize) {
      return;
    }
    this.verticalScale = this.getVerticalScaleRatio();
    this.horizontalScale = this.getHorizontalScaleRatio();
  }
  constructor(
      private fb: FormBuilder,
      private stateService: StateService,
      private userService: UserService
      ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      pass_phrase: ['', [Validators.required]]
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.canResize = true;
      this.onResize();
    }, 100);
  }
  login() {}
  cancel() { this.stateService.setShowLogin(false); }
  getVerticalScaleRatio() {
    return (
      this.containerElement.nativeElement.offsetHeight /
      (this.formElement.nativeElement.offsetHeight * 2.2)
    );
  }
  getHorizontalScaleRatio() {
    return (
      this.formElement.nativeElement.offsetWidth /
      (this.containerElement.nativeElement.offsetWidth * 1.2)
    );
  }
}
