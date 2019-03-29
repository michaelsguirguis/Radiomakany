import { Component, Input } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-info-bar',
  templateUrl: './infobar.component.html',
  styleUrls: ['../app.component.css', './infobar.component.css']
})
export class InfoBarComponent {
  @Input() showLogin = false;
  @Input() showRegister = false;
  @Input() isUSerLogged = false;

  constructor(public stateService: StateService) {}
  actionLogin() {
    this.stateService.setShowLogin();
  }
  actionRegister() {
    this.stateService.setShowRegister();
  }
}
