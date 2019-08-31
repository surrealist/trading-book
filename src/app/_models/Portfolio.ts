import { Asset } from './Asset';
import * as _ from 'lodash';

export class Portfolio {

  constructor(
    public name = 'Portfolio',
    public isPapertrade: boolean = true,
    public initialCash = 0,
    public assets: Asset[] = []
  ) {
    this.assets = [
      new Asset('BTS', 'BTS'),
      new Asset('AU', 'After You')
    ];
  }

  public get balance() {
    return this.initialCash - this.netTotal;
  }

  public get netTotal() {
    return _.sumBy(this.assets, x => x.total);

    // let sum = 0;
    // this.assets.forEach(x => {
    //   sum += x.total;
    // });
    // return sum;
  }
}
