import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { VerticalDirection } from './transformations/slide.component';
import { StateService } from './services/state.service';
import { ResizeComponent } from './transformations/resize.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./app.component.css']
})
export class HomeComponent implements OnInit {
  @Input() showMenu = false;
  @ViewChild('homecomponent') self: ElementRef;
  @ViewChild(ResizeComponent) bar: ResizeComponent;
  infobarSlideDirection: VerticalDirection = 'left';
  constructor(public stateService: StateService) {}
  ngOnInit() { this.infobarSlideDirection = 'right'; }
  toggleMenu() { this.showMenu = !this.showMenu; }
}
