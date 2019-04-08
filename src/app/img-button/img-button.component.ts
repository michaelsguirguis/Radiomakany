import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img-button',
  templateUrl: './img-button.component.html',
  styleUrls: ['./img-button.component.css']
})
export class ImgButtonComponent implements OnInit {
  @Input() btnText: string;
  @Input() btnImage: string;
  @Input() imgScale: ScaleOption = 'small';
  @Input() textScale: ScaleOption = 'medium';
  @Input() backColor: 'transparent';
  @Output() clickEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  getMyStyle() {
    const styles = {
      'max-height': this.imgScale === 'small' ? '2vh' : this.imgScale === 'medium' ? '4vh' : '6vh'
    };

    return styles;
  }

  fireClickEvent() {
    this.clickEvent.emit('clicked');
  }
}

export type ScaleOption = 'small' | 'medium' | 'large';
