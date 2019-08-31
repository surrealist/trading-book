import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  public n = 0;
  public step = 1;

  // tslint:disable-next-line: max-line-length
  public url = 'https://ichef.bbci.co.uk/news/660/cpsprodpb/E318/production/_103463185_gettyimages-480146543.jpg';

  constructor() { }

  ngOnInit() {
  }

  public inc() {
    this.n += this.step;
  }

  public dec() {
    this.n -= this.step;
  }
}
