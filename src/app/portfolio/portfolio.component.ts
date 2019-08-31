import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../_models/Portfolio';
import { Asset } from '../_models/Asset';
import * as _ from 'lodash';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public p = new Portfolio();

  constructor() { }

  ngOnInit() { }

  public addAsset() {
    const a = new Asset('AAA', '', 5, 100);
    this.p.assets.push(a);
  }

  public removeAsset(a: Asset) {
    this.p.assets = _.without(this.p.assets, a);
  }
}
