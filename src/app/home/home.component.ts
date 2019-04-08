import { Component, OnInit, Input } from '@angular/core';
import { AppStateService } from 'src/services/app-state.service';
import { VerticalDirection } from '../slide/slide.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public showMenu = false;
  infobarSlideDirection: VerticalDirection = 'left';

  constructor(public stateService: AppStateService) { }

  ngOnInit() {
    this.infobarSlideDirection = 'right';
  }

  toggleMenu() { this.showMenu = !this.showMenu; }

  toglleInfobar() {
    this.stateService.toggleInfobar();
  }
}
