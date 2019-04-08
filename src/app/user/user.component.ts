import { Component, OnInit, Output, EventEmitter, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatTabGroup } from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit {
  canResize = false;
  public horizontalScale = 1;
  public verticalScale = 1;

  @ViewChild('el_container') containerElement: ElementRef;
  @ViewChild(MatTabGroup) formsElement: MatTabGroup;
  @Output() toggleMembershipEvent = new EventEmitter<string>();
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    if (!this.canResize) {
      return;
    }
    this.resize();
  }

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.canResize = true;
      this.onResize();
    }, 100);
  }

  hide() {
    this.toggleMembershipEvent.emit('');
  }

  getVerticalScaleRatio() {
    const height = this.formsElement._elementRef.nativeElement.offsetHeight + 50;
    const containerHeight = this.containerElement.nativeElement.offsetHeight;

    if (containerHeight < height) {
      return (containerHeight / height);
    }

    return 1;
  }

  getHorizontalScaleRatio() {
    const height = this.formsElement._elementRef.nativeElement.offsetHeight;
    const width = this.formsElement._elementRef.nativeElement.offsetWidth;
    const calcHeight = height * this.verticalScale;
    const calcWidth = (calcHeight * width) / height;

    if (this.verticalScale < 1) {
      return (1 - (this.verticalScale - (0.375 * this.verticalScale))) - 0.1;
    }

    return this.verticalScale;
  }

  resize() {
    this.verticalScale = this.getVerticalScaleRatio();
    this.horizontalScale = this.getHorizontalScaleRatio();
  }
}
