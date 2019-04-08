import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resize',
  templateUrl: './resize.component.html',
  styleUrls: ['../app.component.css']
})
export class ResizeComponent {
  @Input() scaleX = 1;
  @Input() scaleY = 1;
}
