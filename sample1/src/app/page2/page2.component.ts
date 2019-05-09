import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '.app-page2',
  template: `
    <h1>This is Page2</h1>
    To work this comment line no 16 where we are using alise for input decorator as this overwright value.
    <h2>{{"Parent title: " + parentTitle}}</h2>
    <h2>{{"Parent title using alise: " + pTitle}}</h2>
    <button (click)="fnHadleClick()">Send Data to Parent</button>
  `,
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  @Input() public parentTitle;
  @Input('parentTitle') public pTitle;

  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fnHadleClick() {
    this.childEvent.emit('This is test message from page2.');
  }

}
