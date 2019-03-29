import { Component, Input } from '@angular/core';

@Component({
  selector: "scale-container",
  templateUrl: './resize.component.html',
  styleUrls: ['../app.component.css']
})
export class ResizeComponent {
  @Input() scale_x = 1;
  @Input() scale_y = 1;
}
