import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AppStateService } from 'src/services/app-state.service';
import { AppUsersService } from 'src/services/app-users.service';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.css']
})
export class InfoBarComponent implements OnInit {
  @Output() toogleInfobarEvent = new EventEmitter<string>();

  constructor(
    public stateService: AppStateService,
    public userStoreService: AppUsersService
    ) {}

  ngOnInit() {
  }

  hide() {
    this.toogleInfobarEvent.emit('');
  }
}
