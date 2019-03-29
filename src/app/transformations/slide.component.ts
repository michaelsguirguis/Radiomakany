import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
    trigger,
    transition,
    state,
    style,
    animate
} from '@angular/animations';
@Component({
  selector: "slide-horizontal",
  templateUrl: './slide.component.html',
  styleUrls: ['../app.component.css'],
  animations: [
    trigger('slide-vertical', [
      state('*', style({ transform: 'translateX(-100%)' })),
      state('left', style({ transform: 'translateX(-100%)' })),
      state('right', style({ transform: 'translateX(65%)' })),
      transition('* => left', [animate('1s 1s')]),
      transition('* => right', [animate('1s 1s')])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideComponent {
  @Input() direction: VerticalDirection = 'left';
  @ViewChild('animateTarget') animateTarget: ElementRef;
}

export type VerticalDirection = 'left' | 'right';
