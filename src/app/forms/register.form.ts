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

@Component({
  selector: 'app-register-form',
  templateUrl: './register.form.html',
  styleUrls: [
    '../app.component.css',
    '../components/infobar.component.css',
    './form.css'
  ]
})
export class RegisterFormComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  public scaleIconX = 0.9;
  public scaleIconY = 0.9;
  public horizontalScale = 1;
  public verticalScalee = 1;
  public canResize = false;
  @ViewChild('el_container') containerElement: ElementRef;
  @ViewChild('el_form') formElement: ElementRef;
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    if (!this.canResize) {
      return;
    }
    this.verticalScalee = this.getVerticalScaleRatio();
    this.horizontalScale = this.getHorizontalScaleRatio();
  }
  constructor(private fb: FormBuilder, private stateService: StateService) {}
  ngOnInit() {
    this.form = this.fb.group({
      pass_phrase: ['', [Validators.required]],
      email: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      phone_number: ['', [Validators.required]]
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.canResize = true;
      this.onResize();
    }, 100);
  }
  register() {}
  cancel() {
    this.stateService.setShowRegister(false);
  }
  getVerticalScaleRatio() {
    return (
      this.containerElement.nativeElement.offsetHeight /
      (this.formElement.nativeElement.offsetHeight * 1.6)
    );
  }
  getHorizontalScaleRatio() {
    return (this.formElement.nativeElement.offsetWidth /
      (this.containerElement.nativeElement.offsetWidth * 1.2)
    );
  }
}
